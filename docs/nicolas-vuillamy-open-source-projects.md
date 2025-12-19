I created and still maintain several open-source projects:

| Project | Description | Stats |
| --- | --- | --- |
| [MegaLinter](#megalinter) | Open-source CI/CD linter to ensure code consistency across projects | [![GitHub stars](https://img.shields.io/github/stars/megalinter/megalinter?cacheSeconds=3600)](https://github.com/megalinter/megalinter/stargazers/) |
| [sfdx-hardis](#sfdx-hardis) | Salesforce DX plugin with many productivity commands | [![Downloads/week](https://img.shields.io/npm/dw/sfdx-hardis.svg)](https://npmjs.org/package/sfdx-hardis) |
| [vscode-sfdx-hardis](#vscode-sfdx-hardis) | VS Code extension embedding `sfdx-hardis` for GUI workflows | [![Installs](https://img.shields.io/visual-studio-marketplace/i/NicolasVuillamy.vscode-sfdx-hardis)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-sfdx-hardis) |
| [npm-groovy-lint](#npm-groovy-lint) | Groovy linter, formatter and auto-fixer | [![Downloads/week](https://img.shields.io/npm/dw/npm-groovy-lint.svg)](https://npmjs.org/package/npm-groovy-lint) |
| [vscode-groovy-lint](#vscode-groovy-lint) | VS Code extension wrapping `npm-groovy-lint` | [![Installs](https://img.shields.io/visual-studio-marketplace/i/NicolasVuillamy.vscode-groovy-lint)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint) |
| [java-caller](#java-caller) | Library to deliver and execute Java apps from Node/npm | [![Downloads/week](https://img.shields.io/npm/dw/java-caller.svg)](https://www.npmjs.com/package/java-caller) |
| [node-sarif-builder](#node-sarif-builder) | Module to build SARIF logs in JavaScript/TypeScript apps | [![Downloads/week](https://img.shields.io/npm/dw/node-sarif-builder.svg)](https://npmjs.org/package/node-sarif-builder) |
| [markdown-table-formatter](#markdown-table-formatter) | Utility to automatically format markdown tables | [![Downloads/week](https://img.shields.io/npm/dw/markdown-table-formatter.svg)](https://npmjs.org/package/markdown-table-formatter) |
| [github-dependents-info](#github-dependents-info) | Collect info about repo dependents; outputs JSON, markdown and badge | [![PyPI - Downloads](https://img.shields.io/pypi/dm/github-dependents-info)](https://pypi.org/project/github-dependents-info/) |

I also contribute to many others :)

---

### [MegaLinter](https://github.com/oxsecurity/megalinter)

[![MegaLinter Banner](https://github.com/oxsecurity/megalinter/raw/main/docs/assets/images/megalinter-banner.png)](https://megalinter.io)

![GitHub release](https://img.shields.io/github/v/release/megalinter/megalinter?sort=semver)
[![Docker Pulls](https://img.shields.io/badge/docker%20pulls-3.1M-blue)](https://megalinter.github.io/flavors/)
[![Downloads/week](https://img.shields.io/npm/dw/mega-linter-runner.svg)](https://npmjs.org/package/mega-linter-runner)
[![GitHub stars](https://img.shields.io/github/stars/megalinter/megalinter?cacheSeconds=3600)](https://github.com/megalinter/megalinter/stargazers/)
[![GitHub contributors](https://img.shields.io/github/contributors/oxsecurity/megalinter.svg)](https://gitHub.com/oxsecurity/megalinter/graphs/contributors/)
[![MegaLinter](https://github.com/megalinter/megalinter/workflows/MegaLinter/badge.svg?branch=main)](https://github.com/megalinter/megalinter/actions?query=workflow%3AMegaLinter+branch%3Amain)

MegaLinter is an **Open-Source** tool for **CI/CD workflows** that analyzes the **consistency of your code**, **IAC**, **configuration**, and **scripts** in your repository sources, to **ensure all your projects sources are clean and formatted** whatever IDE/toolbox is used by their developers, powered by [**OX Security**](https://www.ox.security/?ref=megalinter).

Supporting [**55** languages](https://megalinter.io/latest/supported-linters/#languages), [**24** formats](https://megalinter.io/latest/supported-linters/#formats), [**20** tooling formats](https://megalinter.io/latest/supported-linters/#tooling-formats) and **ready to use out of the box**, as a GitHub action or any CI system **highly configurable** and **free for all uses**.

- Online documentation: <https://megalinter.io/>
- Repository: https://github.com/oxsecurity/megalinter

---

### [sfdx-hardis](https://github.com/hardisgroupcom/sfdx-hardis)

[![sfdx-hardis Banner](https://raw.githubusercontent.com/hardisgroupcom/sfdx-hardis/main/docs/assets/images/sfdx-hardis-banner.png)](https://sfdx-hardis.cloudity.com)

[![Version](https://img.shields.io/npm/v/sfdx-hardis.svg)](https://npmjs.org/package/sfdx-hardis)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-hardis.svg)](https://npmjs.org/package/sfdx-hardis)
[![Downloads/total](https://img.shields.io/npm/dt/sfdx-hardis.svg)](https://npmjs.org/package/sfdx-hardis)
![Docker Pulls](https://img.shields.io/docker/pulls/hardisgroupcom/sfdx-hardis)
[![GitHub stars](https://img.shields.io/github/stars/hardisgroupcom/sfdx-hardis?cacheSeconds=3600)](https://github.com/hardisgroupcom/sfdx-hardis/stargazers/)
[![GitHub contributors](https://img.shields.io/github/contributors/hardisgroupcom/sfdx-hardis.svg)](https://gitHub.com/hardisgroupcom/sfdx-hardis/graphs/contributors/)
[![Mega-Linter](https://github.com/hardisgroupcom/sfdx-hardis/workflows/Mega-Linter/badge.svg?branch=main)](https://github.com/hardisgroupcom/sfdx-hardis/actions?query=workflow%3AMega-Linter+branch%3Amain)

Salesforce DX plugin with lots of useful commands allowing to:

- Do with simple commands what could be done manually in minutes/hours
- [Define a complete CI/CD Pipeline for your Salesforce project](https://sfdx-hardis.cloudity.com/salesforce-ci-cd-home/)
- [Backup Metadatas and monitor any Salesforce org](https://sfdx-hardis.cloudity.com/salesforce-monitoring-home/)

References: 

- Online documentation: <https://hardisgroupcom.github.io/sfdx-hardis/>
- Repository: <https://github.com/hardisgroupcom/sfdx-hardis>

---

### [vscode-sfdx-hardis](https://github.com/hardisgroupcom/vscode-sfdx-hardis)

[![](https://github.com/hardisgroupcom/vscode-sfdx-hardis/raw/main/resources/extension-demo.gif)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-sfdx-hardis)

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/NicolasVuillamy.vscode-sfdx-hardis)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-sfdx-hardis)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/NicolasVuillamy.vscode-sfdx-hardis)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-sfdx-hardis)
[![Mega-Linter](https://github.com/hardisgroupcom/vscode-sfdx-hardis/workflows/Mega-Linter/badge.svg?branch=master)](https://github.com/nvuillam/mega-linter#readme)
[![GitHub stars](https://img.shields.io/github/stars/hardisgroupcom/vscode-sfdx-hardis.png?label=stars&cacheSeconds=3600)](https://github.com/hardisgroupcom/vscode-sfdx-hardis/stargazers/)

[Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-sfdx-hardis) embedding sfdx-hardis but also other plugins, aiming to allow developers but also admins to work with clicks and not command lines

- Repository: <https://github.com/hardisgroupcom/vscode-sfdx-hardis>

---

### [npm-groovy-lint](https://nvuillam.github.io/npm-groovy-lint/)

[![Version](https://img.shields.io/npm/v/npm-groovy-lint.svg)](https://npmjs.org/package/npm-groovy-lint)
[![Downloads/week](https://img.shields.io/npm/dw/npm-groovy-lint.svg)](https://npmjs.org/package/npm-groovy-lint)
[![Downloads/total](https://img.shields.io/npm/dt/npm-groovy-lint.svg)](https://npmjs.org/package/npm-groovy-lint)
[![Mega-Linter](https://github.com/nvuillam/npm-groovy-lint/actions/workflows/mega-linter.yml/badge.svg?branch=main)](https://github.com/nvuillam/npm-groovy-lint/actions/workflows/mega-linter.yml)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/npm-groovy-lint?label=stars&cacheSeconds=3600)](https://github.com/nvuillam/npm-groovy-lint/stargazers/)
[![Docker Pulls](https://img.shields.io/docker/pulls/nvuillam/npm-groovy-lint)](https://hub.docker.com/r/nvuillam/npm-groovy-lint)

Groovy linter, formatter and auto-fixer

- Online documentation: <https://nvuillam.github.io/npm-groovy-lint/>
- Repository: <https://github.com/nvuillam/npm-groovy-lint/>

---

### [vscode-groovy-lint](https://github.com/nvuillam/vscode-groovy-lint/)

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/NicolasVuillamy.vscode-groovy-lint)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/NicolasVuillamy.vscode-groovy-lint)](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint)
[![Mega-Linter](https://github.com/nvuillam/vscode-groovy-lint/workflows/Mega-Linter/badge.svg?branch=master)](https://github.com/nvuillam/mega-linter#readme)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/vscode-groovy-lint.png?label=stars&cacheSeconds=3600)](https://github.com/nvuillam/vscode-groovy-lint/stargazers/)

[Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint) embedding npm-groovy-lint

- Online documentation: <https://nvuillam.github.io/vscode-groovy-lint/>
- Repository: <https://github.com/nvuillam/vscode-groovy-lint/>

---

### [java-caller](https://github.com/nvuillam/node-java-caller/)

[![Version](https://img.shields.io/npm/v/java-caller.svg)](https://www.npmjs.com/package/java-caller)
[![Downloads/week](https://img.shields.io/npm/dw/java-caller.svg)](https://npmjs.org/package/java-caller)
[![Downloads/total](https://img.shields.io/npm/dt/java-caller.svg)](https://npmjs.org/package/java-caller)
[![Mega-Linter](https://github.com/nvuillam/node-java-caller/workflows/Mega-Linter/badge.svg)](https://github.com/nvuillam/mega-linter#readme)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/node-java-caller?label=stars&cacheSeconds=3600)](https://GitHub.com/nvuillam/node-java-caller/stargazers/)

Library to easily deliver and execute java applications using node/npm

- Repository: <https://github.com/nvuillam/node-java-caller/>

---

### [node-sarif-builder](https://github.com/nvuillam/node-sarif-builder)

[![Version](https://img.shields.io/npm/v/node-sarif-builder.svg)](https://npmjs.org/package/node-sarif-builder)
[![Downloads/week](https://img.shields.io/npm/dw/node-sarif-builder.svg)](https://npmjs.org/package/node-sarif-builder)
[![Downloads/total](https://img.shields.io/npm/dt/node-sarif-builder.svg)](https://npmjs.org/package/node-sarif-builder)
[![Mega-Linter](https://github.com/nvuillam/node-sarif-builder/workflows/MegaLinter/badge.svg?branch=main)](https://megalinter.github.io/)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/node-sarif-builder?label=stars&cacheSeconds=3600)](https://github.com/nvuillam/node-sarif-builder/stargazers/)

Module to easily build SARIF logs within a javascript / typescript application

- Repository: https://github.com/nvuillam/node-sarif-builder

---

### [markdown-table-formatter](https://github.com/nvuillam/markdown-table-formatter)

[![](https://raw.githubusercontent.com/nvuillam/markdown-table-formatter/master/docs/assets/images/banner.jpg)](https://github.com/nvuillam/markdown-table-formatter)

[![Version](https://img.shields.io/npm/v/markdown-table-formatter.svg)](https://npmjs.org/package/markdown-table-formatter)
[![Downloads/week](https://img.shields.io/npm/dw/markdown-table-formatter.svg)](https://npmjs.org/package/markdown-table-formatter)
[![Downloads/total](https://img.shields.io/npm/dt/markdown-table-formatter.svg)](https://npmjs.org/package/markdown-table-formatter)
[![MegaLinter](https://github.com/nvuillam/markdown-table-formatter/workflows/Mega-Linter/badge.svg)](https://github.com/nvuillam/mega-linter#readme)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/markdown-table-formatter?label=stars&cacheSeconds=3600)](https://github.com/nvuillam/markdown-table-formatter/stargazers/)

Utility to automatically format markdown tables in files

- Repository: https://github.com/nvuillam/markdown-table-formatter

---

### [github-dependents-info](https://github.com/nvuillam/github-dependents-info/)

[![PyPI](https://img.shields.io/pypi/v/github-dependents-info)](https://pypi.org/project/github-dependents-info/)
[![PyPI - Downloads](https://img.shields.io/pypi/dm/github-dependents-info)](https://pypi.org/project/github-dependents-info/)
[![GitHub stars](https://img.shields.io/github/stars/nvuillam/github-dependents-info?cacheSeconds=3600)](https://github.com/nvuillam/github-dependents-info/stargazers/)
[![Build status](https://github.com/nvuillam/github-dependents-info/workflows/build/badge.svg?branch=main&event=push)](https://github.com/nvuillam/github-dependents-info/actions?query=workflow%3Abuild)
[![MegaLinter](https://github.com/nvuillam/github-dependents-info/workflows/MegaLinter/badge.svg?branch=main)](https://oxsecurity.github.io/megalinter)
[![License](https://img.shields.io/github/license/nvuillam/github-dependents-info)](https://github.com/nvuillam/github-dependents-info/blob/master/LICENSE)

Collect information about dependencies between a github repo and other repositories. Results available in JSON, markdown and badge

- Repository: https://github.com/nvuillam/github-dependents-info/

---
