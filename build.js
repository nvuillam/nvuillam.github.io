#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const docsDir = path.join(cwd, 'docs');
const indexPath = path.join(docsDir, 'index.md');
const mkdocsPath = path.join(cwd, 'mkdocs.yml');
const prefix = 'nicolas-vuillamy-';

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

remaining.forEach((sec, i) => {
  const title = sec.title || `Page ${i+1}`;
  const slug = slugify(title);
  let filename = `${prefix}${slug}.md`;
  // avoid collisions by appending a counter when needed
  let counter = 1;
  while (fs.existsSync(path.join(docsDir, filename))) {
    filename = `${prefix}${slug}-${counter}.md`;
    counter++;
  }
  const body = sec.lines.join('\n').trim() + '\n';
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
