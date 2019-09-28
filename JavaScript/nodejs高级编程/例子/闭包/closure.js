const http = require('http')
let share = 0
http.createServer((req, res) => {
    if(req.url!='/favicon.ico'){
        share--
        res.end(share + '')
    }
}).listen(8000)
http.createServer((req, res) => {
    if(req.url!='/favicon.ico'){
        share++
        res.end(share + '')
    }
}).listen(3000)