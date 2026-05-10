const fs = require('fs');

// write file
// fs.writeFile('data.txt', 'Hello world with NodeJS', (err) =>{
//     if(err){
//         console.error(`Error writing File: ${err}`);
//         return;
//     }
//     console.log('File written successfully');
// })

// read file
// fs.readFile('data.txt', 'utf8', (err, data) =>{
//     if(err){
//         console.error(`Error reading file: ${err}`);
//         return;
//     }
//     console.log(`File content: ${data}`);
// })

// update file
// fs.appendFile('data.txt', '\nAppended text with NodeJS', (err)=>{
//     if(err){
//         console.error(`Error appending file: ${err}`);
//         return;
//     }
//     console.log('File appended successfully');
// })

// delete file
// fs.unlink('data.txt', (err) =>{
//     if(err){
//         console.error(`Error deleting file: ${err}`);
//         return;
//     }
//     console.log('File deleted successfully');
// })