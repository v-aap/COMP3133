const fs = require('fs')

//Write Async Callback
// let dataToWrite = "Welcome"
let dataToWrite = Buffer.from("Welcome")
fs.writeFile("output.txt", dataToWrite, (err) => {
    if(err){
        console.log(err)
        return
    }

    console.log('Write Async callback success')
})

//Sync
fs.writeFileSync("output.txt", dataToWrite)

//Async Promise
fs.promises.writeFile("output.txt" , dataToWrite)
    .then(() => {
        console.log('Async promise write success')
    })
    .catch((err) => {
        console.log(err)
    })