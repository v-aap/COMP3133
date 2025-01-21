const fs = require('fs')
const zlib = require('zlib')
const ToLowerCasePipe = require('./ToLowerCasePipe.js')
const ToWordsPipe = require('./ToWordsPipe.js')

const readStream = fs.createReadStream('input_stream.txt')
const writeStream = fs.createWriteStream('output_stream.txt')

//ReadStream
readStream.on('data', (chunk) => {
    console.log(chunk)
})

readStream.on('end', () => {
    console.log('Data read stream end')
})

readStream.on('error', (err) => {
    console.log(`error read stream ${err}`)
})

readStream.on('close', () => {
    console.log('read stream close')
})

//Write Stream
writeStream.on('error', (err) => {
    console.log(`error read stream ${err}`)
})

writeStream.write("Hello")
writeStream.write("World")
writeStream.write("NodeJs")
// writeStream.end()

//Pipes
readStream.pipe(writeStream)
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.gz'))

//Convert to Lower case
readStream.pipe(new ToLowerCasePipe())
            .pipe(fs.createWriteStream('lower_stream.txt'))

// Split words            
readStream.pipe(new ToWordsPipe())
            .pipe(fs.createWriteStream('words_stream.txt'))