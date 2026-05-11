const fs = require('fs').promises;

// writefile 
// async function writeFileFn() {
//     try{
//         await fs.writeFile('data.txt','Hello World')
//         console.log('File Written Successfully')
//     }catch(err){
//         console.error(`Error Writing file : ${err}`)
//     }
// }
// writeFileFn()

// async function readFileFn() {
//     try{
//         const data = await fs.readFile('data.txt', 'utf8')
//         console.log(`File Content : ${data}`);
//     }catch(err){
//         console.error(`Error Reading file : ${err}`)
//     }
// }
// readFileFn()

// async function appendFilefn(){
//     try{
//         await fs.appendFile('data.txt','\nApended text added')
//         console.log('File Appended Successfully')
//     }catch(err){
//         console.error(`Error Appending file : ${err}`)
//     }
// }
// appendFilefn();

async function  deleteFileFn(){
    try{
        await fs.unlink('test.txt');
        console.log('File Deleted Successfully')
    }catch(err){
        console.error(`Error Deleting file : ${err}`);
    }
}

deleteFileFn();
