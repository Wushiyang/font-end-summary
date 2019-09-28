const fs = require('fs')
fs.open('./logs', 'a+', (err, fd) => {
    fs.write(fd, 'this is a msgs', (err, written, string) => {
        console.log(written)
        console.log(string)
    })
})