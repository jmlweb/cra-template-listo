const fs = require('fs');
const path = require('path');
const copydir = require('copy-dir');
const { promisify } = require('util');

const pkg = require('./package.json');

const EXCLUDED_DEPENDENCIES = ['rimraf', 'copy-dir'];
const TMPL = 'template';
const INCLUDED_DIRS = ['src', 'public'];
const GITIGNORE = '.gitignore';
const AUX_FILES = [
  '.eslintignore',
  '.eslintrc',
  '.editorconfig',
  'README.md',
];
const EXCLUDED_SCRIPTS = ['template:prepare', 'template:generate', 'template'];

const mkdir = promisify(fs.mkdir);
const cpDir = promisify(copydir);
const cp = promisify(fs.copyFile);
const writeFile = promisify(fs.writeFile);

const getPath = (...subpaths) => path.join(__dirname, ...subpaths);

// A1. Create "template" folder
const createTemplateFolder = () => mkdir(getPath(TMPL));

// A2. Copy "src" and "public" into template folder
const copyIncludedDirs = () => {
  const promises = INCLUDED_DIRS.map((f) => cpDir(getPath(f), getPath(TMPL, f), {
    utimes: true,
    mode: true,
    cover: true,
  }));
  return Promise.all(promises);
};

// A3. Copy gitignore without the "dot" into template folder
const copyGitIgnore = () => cp(getPath(GITIGNORE), getPath(TMPL, GITIGNORE.slice(1)));

// A4. Copy aux files
const copyAuxFiles = () => {
  const promises = AUX_FILES.map((f) => cp(getPath(f), getPath(TMPL, f)));
  return Promise.all(promises);
};

// B. Generate template.json excluding unneeded libraries
const createTemplateJSON = () => {
  const dependencies = Object.entries(pkg.dependencies).reduce((acc, [key, val]) => {
    if (EXCLUDED_DEPENDENCIES.includes(key)) {
      return acc;
    }
    return {
      ...acc,
      [key]: val,
    };
  }, {});

  const scripts = Object.entries(pkg.scripts).reduce((acc, [key, val]) => {
    if (EXCLUDED_SCRIPTS.includes(key)) {
      return acc;
    }
    return {
      ...acc,
      [key]: val,
    };
  }, {});

  const content = JSON.stringify({
    dependencies,
    scripts,
  }, null, 2);
  return writeFile(getPath('template.json'), content);
};

// EXECUTE SCRIPTS

createTemplateFolder()
  .then(() => Promise.all(
    [
      copyIncludedDirs(),
      copyGitIgnore(),
      copyAuxFiles(),
    ],
  ));

createTemplateJSON();
