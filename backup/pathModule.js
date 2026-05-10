// const path = require('path');

// console.log(__filename);
// console.log(__dirname);

// const  filePath = "users/karan/desktop/nodejs/pathModule.js";
// console.log(path.basename(filePath))
// console.log(path.basename(filePath, '.js'))
// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))
// const finalPath = path.join('Desktop','nodejs',"test/pathModule.js");
// console.log(finalPath)

const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, 'data', 'doc.txt');
fs.writeFileSync(filePath, "Hello, This is a new file created using Node.js");
const data = fs.readFileSync(filePath, 'utf-8')
console.log(data)