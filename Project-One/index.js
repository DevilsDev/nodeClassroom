  // SECTION
  /*
  Very first node code 😁

const greeting = 'Hello World!'
console.log(greeting)
  */

// ---------------------------------------------------------------------------------------------------------
// SECTION
  /*
  How to call Node Core modules❓ We use require() to import any node modules
  This is a blocking synchronous approach
const fs = require('fs')

  */
  //NOTE
  /*
  Reads a file and returns the content as a Buffer, it takes two parameters: 1. The path to the file 2. The encoding of the file.
const textInput = fs.readFileSync('./txt/words.txt', 'utf-8')
console.log(textInput)
  */

// ---------------------------------------------------------------------------------------------------------
// SECTION
  /*
  How to write text to some file❓ We use the fs.writeFileSync() method to write to a file.
const textOutput = `This is some text I want to output: ${textInput}.\Created on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOutput)
console.log('file created')
  */

// ------------------------------------------------------------------------------------------------
// SECTION
  /*
  How to code with Non-blocking asynchronous approach❓
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if(err) return console.error('Error! 💣')
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
      console.log(data2)
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', (err) => {
        console.log('Your file have been created ✅')
      })
      console.log(data3)
    })
  })
})

console.log('This will print before the callback function')
  */

// ------------------------------------------------------------------------------------------------
// SECTION
// Creating a simple web server 🎏
const http = require('http')
