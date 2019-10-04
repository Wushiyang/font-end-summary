# 构建HTTP服务器

### 构建http服务器

```node
const server = http.createServer()	//创建http服务
server.on('request', (req, res) => {})
server.close()	//关闭http端口
server.listen(port)

req.url	//不包含模式、主机名或者端口的路径
req.method	//请求上用到的方法
req.headers	//请求头对象
util.inspect(object)	//node提供的字符串表示对象的方法
res.writeHead(statusCode[, statusMessage][, headers])	//发送响应头部
res.setHeader(name, value)	//设置响应头部
res.write()	//写入响应对象并发送
res.end()	//写入响应对象发送并断开连接
res.on('end', () => {})	//关闭响应时触发
```

Node的请求会先接受头部，请求体之后才会发送，通过data事件获取，并通过end事件得知结束

Node响应会先发射头部，然后是响应体，最后断开，所以setHeader必须在头部发射前设置，即res.write和res.writeHead前设置



### 以流的形式传送HTTP分块响应setHeader

HTTP分块编码允许服务器持续向客户端发送数据，而不需发送数据大小，除非制定了Content-Lengh响应头，否则NodeHTTP服务器会向客户端发送Transfer-Encoding: chunked。

该响应头可以让客户端接受若干块数据作为响应主体，并在客户端结束响应之前发送一个具有0长度的结束块，对于HTTP客户端传送文本、音频或者视频数据非常有用。

（详例./例子/http服务器/video.js）