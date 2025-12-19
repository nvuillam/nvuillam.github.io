#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const docsDir = path.join(cwd, 'docs');
const indexPath = path.join(docsDir, 'index.md');
const mkdocsPath = path.join(cwd, 'mkdocs.yml');
const prefix = 'nicolas-vuillamy-';

// Ensure `docs/index.md` exists by copying `README.md` at the start of the
// build. This mirrors previous behavior when the copy was performed in the
// CI workflow.
const readmePath = path.join(cwd, 'README.md');
if (fs.existsSync(readmePath)) {
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
  try {
    // Use COPYFILE_FICLONE_FORCE to attempt an efficient copy and ensure the
    // destination is overwritten even if it already exists.
    const flags = fs.constants && fs.constants.COPYFILE_FICLONE_FORCE ? fs.constants.COPYFILE_FICLONE_FORCE : 0;
    fs.copyFileSync(readmePath, indexPath, flags);
    console.log('Copied README.md to docs/index.md (overwritten)');
  } catch (e) {
    // Some platforms/runners don't support the copyfile syscall and will
    // return ENOSYS / ENOTSUP. Fall back to a manual read/write to ensure the
    // file is still copied and overwritten.
    const fallbackCodes = new Set(['ENOSYS', 'ENOTSUP', 'EXDEV', 'EINVAL']);
    if (e && fallbackCodes.has(e.code)) {
      try {
        const data = fs.readFileSync(readmePath);
        fs.writeFileSync(indexPath, data);
        console.log('Copied README.md to docs/index.md via read/write fallback (overwritten)');
      } catch (e2) {
        console.error('Failed to copy README.md to docs/index.md via fallback:', e2.message);
      }
    } else {
      console.error('Failed to copy README.md to docs/index.md:', e.message);
    }
  }
}

function slugify(s){
  return s.toString().toLowerCase()
    .replace(/[#_*`\[\]()]/g,'')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/(^-|-$)/g,'')
    .slice(0,60) || 'page';
}

if (!fs.existsSync(indexPath)){
  console.error('docs/index.md not found. Make sure README.md was copied to docs/index.md before running this script.');
  process.exit(1);
}

let content = fs.readFileSync(indexPath,'utf8').replace(/\r\n/g,'\n');

// Split by H2 headings (lines starting with '## ' but not '###')
const lines = content.split('\n');
let introLines = [];
let sections = [];
let current = null;

for (let i = 0; i < lines.length; i++){
  const line = lines[i];
  if (/^##\s+(?!#)/.test(line)){
    // start new section
    if (current) sections.push(current);
    current = { title: line.replace(/^##\s+/, '').trim(), lines: [line] };
  } else {
    if (current) current.lines.push(line);
    else introLines.push(line);
  }
}
if (current) sections.push(current);

if (sections.length === 0) {
  console.log('No H2 sections found. Nothing to do.');
  process.exit(0);
}

// Remove previously generated files
fs.readdirSync(docsDir)
  .filter(f => f.startsWith(prefix) && f.endsWith('.md'))
  .forEach(f => {
    try { fs.unlinkSync(path.join(docsDir,f)); } catch(e){}
  });

const generated = [];
// Keep the first H2 section inside index.md (don't generate a separate file)
let remaining = sections.slice();
if (remaining.length > 0) {
  const first = remaining.shift();
  // append first section lines to introLines
  introLines = introLines.concat(['']).concat(first.lines);
}

// First pass: compute filenames for all sections to be generated so we can
// replace internal anchor links (#anchor) with real links to generated pages.
const planned = remaining.map((sec, i) => {
  const title = sec.title || `Page ${i+1}`;
  const slug = slugify(title);
  let filename = `${prefix}${slug}.md`;
  return { sec, title, slug, filename };
});

// Resolve filename collisions (on-disk and within planned set)
const used = new Set(fs.readdirSync(docsDir));
planned.forEach(p => {
  let filename = p.filename;
  let counter = 1;
  while (used.has(filename)) {
    filename = `${prefix}${p.slug}-${counter}.md`;
    counter++;
  }
  p.filename = filename;
  used.add(filename);
});

// Build a map of slug -> filename for anchor replacement
const slugToFile = {};
planned.forEach(p => { slugToFile[p.slug] = p.filename; });

function replaceAnchorLinks(text) {
  return text.replace(/\[([^\]]+)\]\(#([^\)]+)\)/g, (m, label, anchor) => {
    const norm = slugify(anchor);
    if (slugToFile[norm]) return `[${label}](${slugToFile[norm]})`;
    return m;
  });
}

// Second pass: write files with anchors replaced
planned.forEach((p, i) => {
  const sec = p.sec;
  const title = p.title;
  const filename = p.filename;
  // Build page body: remove the H2 title line (first line) from generated page
  // and trim leading blank lines so the page starts with the content paragraph.
  const contentLines = sec.lines.slice();
  if (contentLines.length > 0 && /^##\s+/.test(contentLines[0])) {
    contentLines.shift();
  }
  while (contentLines.length > 0 && contentLines[0].trim() === '') {
    contentLines.shift();
  }
  let body = contentLines.join('\n').trim() + '\n';
  body = replaceAnchorLinks(body);
  fs.writeFileSync(path.join(docsDir, filename), body);
  generated.push({ title, filename });
});

// Rebuild docs/index.md keeping intro (including first H2) and a short sections list
// remove lines starting with spaces and an asterisk (e.g., '  * ...')
const filteredIntro = introLines.filter(l => !/^\s*\*\s+/.test(l));
let newIndex = filteredIntro.join('\n').trim() + '\n\n';
if (generated.length) {
  newIndex += '## Sections\n\n';
  generated.forEach(g => {
    newIndex += `- [${g.title}](${g.filename})\n`;
  });
  newIndex += '\n';
}
// Replace anchor links in rebuilt index.md so references to sections point to
// their generated pages when possible.
if (typeof replaceAnchorLinks === 'function') {
  newIndex = replaceAnchorLinks(newIndex);
}
fs.writeFileSync(indexPath, newIndex);

// Update mkdocs.yml nav section to include generated pages
if (fs.existsSync(mkdocsPath)){
  const yaml = fs.readFileSync(mkdocsPath,'utf8').replace(/\r\n/g,'\n').split('\n');
  const navStart = yaml.findIndex(l => l.trim().startsWith('nav:'));
  const navLines = [];
  navLines.push('nav:');
  navLines.push('  - "Home": "index.md"');
  generated.forEach(g => {
    const safeTitle = g.title.replace(/"/g,'');
    navLines.push(`  - "${safeTitle}": "${g.filename}"`);
  });

  if (navStart === -1) {
    yaml.push('', ...navLines);
    fs.writeFileSync(mkdocsPath, yaml.join('\n') + '\n');
  } else {
    let end = yaml.length;
    for (let i = navStart+1; i < yaml.length; i++){
      if (/^[^\s-].+:/.test(yaml[i])){ end = i; break; }
    }
    const newYaml = [...yaml.slice(0, navStart), ...navLines, ...yaml.slice(end)];
    fs.writeFileSync(mkdocsPath, newYaml.join('\n') + '\n');
  }
  console.log('Generated', generated.length, 'pages and updated mkdocs.yml nav.');
} else {
  console.log('mkdocs.yml not found; created pages but did not update navigation.');
}

console.log('Done.');

