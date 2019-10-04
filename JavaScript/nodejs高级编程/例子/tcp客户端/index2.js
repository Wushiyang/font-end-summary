const net = require('net');
const port = 8000;
let conn;

const retryInterval = 1000;
let retriedTimes = 0;
const maxRetries = 2;

let quitting = false;

// process.stdin.resume();  //node旧模式

process.stdin.on('data', data => {
    if (data.toString().trim().toLowerCase() === 'quit') {
        quitting = true;
        console.log('quitting...');
        conn.end();
        process.stdin.pause();
    } else {
        conn.write(data);
    }
});

(function connect(){
    function reconnect(){
        if (retriedTimes >= maxRetries) {
            throw new Error('Max retries have been exceeded, I give up.');
        }
        retriedTimes++;
        setTimeout(connect, retryInterval);
    }

    conn = net.createConnection(port);
    conn.on('connect', () => {
        retriedTimes = 0;
        console.log('connect to server');
    })
    conn.on('error', err => {
        console.log('Error in connection:', err);
    });
    conn.on('close', () => {
        if (!quitting) {
            console.log('\nreconnect!!!');
            reconnect();
        }
    });
    conn.pipe(process.stdout, {end: false}); //pipe会在可读流发射end事件时关闭可写流，所以设置end: false，设置end事件时不触发可写流end()方法
}());
