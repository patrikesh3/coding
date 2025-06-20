// import fs from 'fs';
// // readFile() -- callback
// fs.readFile('./text.txt', 'utf8',(err, data)=>{
//     if(err) throw Error;
//     console.log(data)
// })
// //  readFileSync()  --  Synchronous
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data)

import fs from 'fs/promises';
// // readFile() -- promises .then()
// fs.readFile('./text.txt', 'utf8')
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err));

// readFile() -- async/await
const readFile = async() =>{
    try{
        const data= await fs.readFile('./text.txt', 'utf8');
        console.log(data)
    } catch(err){
        console.log(err)
    }
}
     // writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'I am writing to this file');
        console.log('Writing is to ...')
    } catch (error) {
        console.log(error)
    }}
// appendFile() 
const appendFile = async () => {
    try {
            fs.appendFile('./text.txt', '\n appended file');
    console.log('appended to...')
    } catch (error) {
        console.log(error)
    }}
writeFile()
appendFile()
readFile()