const net = require('net')

net.createServer(socket => {
    socket.setEncoding('utf8')
    console.log('new connect')
    socket.write('you can type anything Or "quit" to disconnect!!!\n\r')

    socket.on('data', data => {
        if (data.toLowerCase().trim() === 'quit') {
            socket.write('bye bye!!!')
            return socket.end()
        }
        socket.write(data)
    })
    socket.on('end', data => {
        console.log('Client disconnect!')
    })

    socket.on('error', error => {
        console.log('Socket Error:', error)
    })
    // socket.setTimeout(3000, () => {
    //     console.log('timeout,disconnect!!!')
    //     socket.write('timeout,disconnect!!!\n\r')
    //     socket.end()
    // })
}).listen(8000)