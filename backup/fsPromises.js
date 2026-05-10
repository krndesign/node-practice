const fs = require('fs').promises;

// fs.writeFile('data.txt', 'Hello, World learning nodeJS with fs.promises!')
//     .then(()=>{
//         console.log('File written successfully.');
//     })
//     .catch((err)=>{
//         console.error('Error writing file:', err);
//     });

// fs.readFile('data.txt', 'utf8')
//     .then((data)=>{
//         console.log('File content:', data);
//     })
//     .catch((err)=>{
//         console.error('Error reading file:', err);
//     })

fs.appendFile('data.txt', '\nThis is an appended line.')
    .then(()=>{
        console.log('Content appended successfully.');
    })
    .catch((err)=>{
        console.error('Error appending to file:', err);
    })

// fs.unlink('example.txt')
//     .then(()=>{
//         console.log('File deleted successfully.');  
//     })
//     .catch((err)=>{
//         console.error('Error deleting file:', err);
//     });