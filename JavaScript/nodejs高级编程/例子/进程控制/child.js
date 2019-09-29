process.stdin.resume()
process.stdin.on('data', data => { 
    process.stdout.write(`您好, ${data.toString().trim()}！小ai很高心为您服务`)
})
// 监听没生效，可能是windows环境???
// process.on('SIGTERM', () => {
//     console.log('接到退出信号SIGTERM')
//     process.exit()
// })