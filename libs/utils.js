const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

function readFile(pathname) {
  const path = resolve(__dirname, pathname);
  return JSON.parse(readFileSync(path, 'utf8'));
}

module.exports = {
  readFile
};