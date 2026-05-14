import fs from 'fs';
import path from 'path';

const srcDir = 'd:/01_Projects/workspace/pep-pearl.github.io/src';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = {
  'bg-muted': 'bg-page-soft',
  'text-soft': 'text-ink-muted',
  'text-faint': 'text-ink-muted',
  'text-accentStrong': 'text-brand-dark',
  'bg-accentStrong': 'bg-brand-dark',
  'border-accentStrong': 'border-brand-dark',
  'text-accentSoft': 'text-brand',
  'bg-accentSoft': 'bg-page-soft',
  'border-accentSoft': 'border-brand',
  'text-accent': 'text-brand',
  'bg-accent': 'bg-brand',
  'border-accent': 'border-brand',
  'outline-accent': 'outline-brand',
  'shadow-soft': 'shadow-sm', // User wants to reduce shadows
};

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    for (const [key, value] of Object.entries(replacements)) {
      content = content.replace(new RegExp(key, 'g'), value);
    }
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});
