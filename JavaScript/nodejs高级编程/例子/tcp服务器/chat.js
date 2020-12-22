//TCP服务器例子
const net = require('net')
const server = net.createServer()
let sockets = []

server.on('connection', socket => {
    console.log('has a new connect')
    socket.on('data', data => {
        console.log(data.toString())
        sockets.forEach(sk => {
            sk.write(data)
        })
    })
    sockets.push(socket)
})
server.on('close', socket => {
    console.log('connect close!!!')
    const index = sockets.indexOf(socket)
    sockets.slice(index, 1)
})
server.on('error', error => {
    console.log(`server error: ${error.message}`)
})
server.listen(8000)
