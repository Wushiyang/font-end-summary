const net = require('net');
const port = 8000;
let conn;

process.stdin.resume();

(function connect(){

    conn = net.createConnection(port)
    conn.on('connect', () => {
        console.log('connect to server')
    })
    conn.on('error', err => {
        console.log('Error in connection:', err)
    })
    conn.on('close', () => {
        console.log('\nreconnect!!!')
        connect()
    })
    conn.pipe(process.stdout, {end: false}) //pipe会在可读流发射end事件时关闭可写流，所以设置end: false，设置end事件时不触发可写流end()方法
    process.stdin.pipe(conn)
}())

//凡是有循环的要考虑退出循环的情况必须发生!!!
//解决问题查看
