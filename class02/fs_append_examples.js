//const fs = require('fs').promises
const fs = require('fs')

async function addHeader(fileName){
    try {
        await fs.promises.appendFile(fileName,'StudentId,firstName,lastName')
        console.log('Student header added')
    } catch (err) {
        console.log('Error while appending student header')
    }

}

async function appendData(fileName, sid, fnm, lnm){
    try {
        await fs.promises.appendFile(fileName, `\r\n${sid}, ${fnm}, ${lnm}`)
        console.log('Student record added')
    } catch (err) {
        console.log('Error while appending student data')
    }

}

const file = 'student.csv'
addHeader(file)
appendData(file, 1 , 'Valeria' , 'Arce')