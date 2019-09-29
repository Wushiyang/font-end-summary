const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
    const rs = fs.createReadStream('./58596.txt')
    //慢客户端问题，控制可读流等待可写流
    // rs.on('data', data => {
    //     if (!res.write(data)) {
    //         console.log('wait drain!')
    //         rs.pause()
    //     }
    // })
    // res.on('drain', () => {
    //     rs.resume()
    // })
    // rs.on('end', () => {
    //     res.end()
    // })

    //使用pipe方法解决慢客户端问题，控制可读流等待可写流
    rs.pipe(res, {end: false})
    rs.on('end', () => {
        res.write('\n\tuse Pipe!!!')
        res.end()
    })
}).listen(8000)