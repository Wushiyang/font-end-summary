//tcp服务器写入文件./txt
const ws = require('fs').createWriteStream('./txt')
const net = require('net')
net.createServer(socket => {
    socket.pipe(ws)
}).listen(8000)