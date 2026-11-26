const fs = require('node:fs');

const line = 'My agent reported all tests green; ' + 'its only tool call was `ls`.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line);
