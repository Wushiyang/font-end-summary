# 构建TCP客户端

TCP是位于传输层的网络协议。

TCP是双向数据流，在往TCP数据流中写入数据时，不会收到对方收到数据的确认信号，只保证数据包被应用程序按顺序接受，不能保证被全部接受。

TCP是连续数据流，如需识别单独的消息，就必须实现一个帧协议，指定每个消息的起始位置和结束位置。

### 连接服务器

```node
const net = require('net')
const conn = net.createConnection(option[, connectListener])	//创建连接,返回socket对象
net.createConnection(path[, connectListener])
net.createConnection(port[, host][, connectlistener])
conn.write(data[, encoding][, callback])	//写入数据
conn.on('data', data => {})	//监听接收数据
conn.end()	//中断连接
conn.on('error', error => {})	//处理错误
```

### 命令行TCP客户端实例

./例子/tcp客户端/index.js

./例子/tcp客户端/index2.js

在vscode编辑器终端界面打开客户端，关闭时使用 Ctrl+C 会发现服务端报“ECONNRESET”错误，这是linux环境网络编程错误，错误码是104（node是默认linux环境，所以windows也报这错）。

**这是由于接收端（服务端）还在读取，但是对端（客户端）已经关闭了，则接收端（服务端）就会报这个错误。**

**正常关闭是socket发送退出到服务端，服务端关闭连接，然后客户端正常退出**