const fs = require('fs')

// Read File Async with Callback
//fs.readFile("input.txt", "utf-8", (err, data) => {

fs.readFile("input.txt", (err, data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(`Async: ${data.toString()}`)
})

//Sync
const dataSync = fs.readFileSync("input.txt")
console.log(`Sync: ${dataSync.toString()}`)


// Async with Promise
fs.promises.readFile("input.txt")
    .then((data => {
        console.log(`Async Promise: ${data.toString()}`)

    }))
    .catch((err) => {
        console.log(err)
    })

console.log("--- END ---")