#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'source', 'src');
const tsconfigPath = path.join(__dirname, 'source', 'tsconfig.json'); 
const destDir = process.cwd(); 

const filesToCopy = [
    'main.ts',
    'ModAPI.d.ts'
];


function copyFiles(src, dest, files) {
    files.forEach(file => {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);
        fs.copyFile(srcFile, destFile, err => {
            if (err) {
                console.error(`Error copying file ${file}: ${err}`);
            } else {
                console.log(`Copied ${file} to ${dest}`);
            }
        });
    });
}


function copyTsconfig(src, dest) {
    fs.copyFile(src, path.join(dest, 'tsconfig.json'), err => {
        if (err) {
            console.error(`Error copying tsconfig.json: ${err}`);
        } else {
            console.log(`Copied tsconfig.json to ${dest}`);
            console.log('Thank you for using ef template!');
        }
    });
}

console.log("Copying specified files from the source folder...");
copyFiles(sourceDir, destDir, filesToCopy);
copyTsconfig(tsconfigPath, destDir);