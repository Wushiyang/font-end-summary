const cp = require('child_process')
const child = cp.spawn('node', ['child'])

let name = ''

child.stderr.on('data', data => {
    console.log(data)
})
child.on('exit', (code, signal) => {
    console.log(`[${code}:${signal}]小ai自闭了！谢谢使用`)
    console.log('然后我好像也要滚了是吧= =！！！我去自闭')
    process.exit()
    // process.kill(process.pid)
    // process.kill不触发precess的exit事件
})
process.once('exit', code => {
    console.log(`[${code}]我真的走了，不挽留下我么！！！再见 ( T-T )`)
})

childListen()
service()

function service(){
    process.stdout.write('请输入您的名字: ')
    process.stdin.once('data', data => {
        name = data.toString().trim()
        process.stdout.write(`确定是${name}么?[y/n]`)
        nameConfirm()
    })
}

function nameConfirm(){
    process.stdin.once('data', data => {
        const result = data.toString().trim()
        if (result.toUpperCase() === 'Y') {
            child.stdin.write(name)
        } else if (result.toUpperCase() === 'N') {
            service()
        } else {
            process.stdout.write('请输入[y/n]')
            nameConfirm()
        }
    })
}

function useConfirm(){
    process.stdin.once('data', data => {
        const result = data.toString().trim()
        if (result.toUpperCase() === 'Y') {
            childListen()
            service()
        } else if (result.toUpperCase() === 'N') {
            child.kill('SIGTERM')
        } else {
            process.stdout.write('请输入[y/n]')
            useConfirm()
        }
    })
}

function childListen(){
    child.stdout.once('data', data => {
        console.log(`ai进程: ${data}`)
        console.log('服务结束！继续使用本服务么?[y/n]')
        useConfirm()
    })
}