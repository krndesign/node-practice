const fs = require('fs');
const { fileURLToPath } = require('url');

// console.log('file : ' + fs.readFileSync('doc.txt', 'utf-8'))
// fs.readFile('doc.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.error(`Error reading file: ${err}`);
//         return;
//     }
//     console.log('file read : ' + data);
// })

// write file
// fs.writeFile('data.txt', "Hello, This is a new file created using Node.js", (err)=>{
//     if(err){
//         console.error(`Error writing file: ${err}`);
//         return;
//     }
//     console.log('File written successfully');
// })

// apend file

// fs.appendFile('data.txt', "\nthis is the new line and my name is karan", (err)=>{
//     if (err){
//         console.error('Error appending file: ' + err);
//         return;
//     }
//     console.log('File appended successfully');
// })

// delete file

// fs.unlink('data.txt', (err)=>{
//     if(err){
//         console.error('Error deleting file: ' + err);
//         return;
//     }
//     console.log('File deleted successfully');
// })

// rename file

fs.rename('doc.txt', 'document.txt', (err)=>{
    if(err){
        console.error('Error renaming file: ' + err);
        return;
    }
    console.log('File renamed successfully');
})