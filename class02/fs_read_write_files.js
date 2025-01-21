const fs = require('fs')

fs.open('data.txt', 'r+', (err, fd) => {
    if(err){
        console.log(err)
        return
    }

    var buffer = Buffer.alloc(10)
    // 0 = buffer 0 position to length of buffer
    // if you add , a number after length it will start from there
    fs.readSync(fd, buffer, 0, buffer.length)
    // You set the buffer bytes which results in only 10 characters being shown
    console.log(buffer.toString())
    // Printing it twice (below) will show the rest of the data, and then it will loop
    // fs.readSync(fd, buffer, 0, buffer.length)
    // console.log(buffer.toString())

    // Because of the allocation it inserts Toronto at the 10th position
    // fs.writeSync(fd, Buffer.from('Toronto'))
    fs.writeSync(fd, Buffer.from('Toronto'), 0, 7, 21)
    
    fs.closeSync(fd)

})