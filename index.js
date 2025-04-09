#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'source', 'src');
const tsconfigPath = path.join(__dirname, 'source', 'tsconfig.json'); 
const destDir = process.cwd(); 


function copyDirectory(src, dest) {
    fs.readdir(src, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${src}: ${err}`);
            return;
        }
        
        fs.mkdir(dest, { recursive: true }, (err) => {
            if (err) {
                console.error(`Error creating directory ${dest}: ${err}`);
                return;
            }

            files.forEach(file => {
                const srcFile = path.join(src, file);
                const destFile = path.join(dest, file);

                fs.stat(srcFile, (err, stats) => {
                    if (err) {
                        console.error(`Error stating file ${srcFile}: ${err}`);
                        return;
                    }

                    if (stats.isDirectory()) {
                        copyDirectory(srcFile, destFile); 
                    } else {
                        fs.copyFile(srcFile, destFile, err => {
                            if (err) {
                                console.error(`Error copying file ${file}: ${err}`);
                            } else {
                                console.log(`Copied ${file} to ${dest}`);
                            }
                        });
                    }
                });
            });
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

console.log("Copying src folder and tsconfig.json from the source folder...");
copyDirectory(sourceDir, path.join(destDir, 'src')); 
copyTsconfig(tsconfigPath, destDir); 