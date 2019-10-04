const http = require('http')
const fs = require('fs')
//谷歌会屏蔽视频，请用IE查看
http.createServer((req, res) => {
    const rs = fs.createReadStream('./test.mp4')
    res.setHeader('Content-Type', 'video/mp4')
    // res.writeHead(200, {'Content-Type': 'video/mp4'})
    rs.pipe(res)
}).listen(4000)