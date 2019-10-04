# 构建TCP服务器

### 创建TCP服务器和socket套接字使用

```
const server = net.createServer()
server.on('listent', () => {})
server.on('connection', socket => {})
server.on('close', socket => {})
server.on('error', error => {})
server.listen(port)
server.close()
```

socket套接字是可读可写流（详例./例子/tcp服务器/index和write）

```
socket.setTimeout(time)	//设置socket的连接超时，超时触发end()
socket.setKeepAlive(isStart, delay)	//保持长连接
```

setKeepAlive避免网络或终端出现超时，Node发送带有被打开的确认（ACK）标志触发另一个终端的空应答来达到这个目的。

```node
socket.setNoDelay(isSet)	//设置是否启动Nagle算法
```

在发送TCP数据包前，内核会缓存数据，使用Nagle算法决定何时实际发送数据（在发送小块数据时，该算法用来减少网络发送的包的数量，不过这会导致延迟延时发送数据）。

```
socket.on('data', data => {})
socket.on('error', error => {})
socket.on（'close', () => {})
socket.write()
process.on('uncaoughtException', error => {})
```

### 构建简单的TCP聊天器

详例./例子/tcp服务器/chat