# web浏览器的JavaScript

### 浏览器端的JavaScript

window和document

### HTML嵌入JavaScript

#### 内联

在<script>jscode</script>

#### 外部sciprt

script标签的type属性默认是text/javascript，定义了scirpt的MIME

```
<script src="url" type="text/javascript"></script>
分离大块代码

多web页面共用

javascript代码下载后会被浏览器缓存

google通用类库优化
```

#### html事件处理程序

```
event="jscode"，例如onclick="jscode"
```

#### url协议

```
url协议,例如<a href="javascript:jscode">url js</a>
```

### 浏览器JavaScript的执行

```
1、GUI渲染线程创建Document对象（dom树），开始解析web页面，解析html元素或文本后添加element对象或text对象节点到dom树，然后在渲染树绘制盒，这个阶段document.readystate属性值是“loading”。
2、GUI渲染线程遇到没有async和defer属性的<script>元素时，添加节点到dom树。GUI渲染线程阻塞，如果是内部脚本，则启用JavaScript线程处理脚本；如果是外部脚本，则下载脚本，然后启用JavaScript线程处理脚本。在处理脚本过程中如果有使用dom的api，如document.wirte()，会阻塞JavaScript线程启用GUI渲染线程添加节点到dom树，然后在渲染树绘制盒，完成后再阻塞GUI渲染线程，开启JavaScript线程处理脚本。脚本处理完毕后JavaScript线程阻塞，GUI渲染线程开启继续解析web页面。
3、当GUI渲染线程遇到设置async属性的<script>元素时，会下载脚本，并继续解析web页面，当脚本下载完，就会GUI渲染线程阻塞，JavaScript线程启动立即执行脚本，异步脚本禁止使用document.write（可能为了立即执行并解析，所以没有暂停解析或关闭文档流，无法确定在哪点write），使用会发黄色警告，执行完后会阻塞JavaScript线程，GUI渲染线程继续解析web页面。
4、文档解析完成后。document.readyState属性变成“interactive”。
5、之前GUI渲染线程解析到的defer属性的<script>的脚本会在这时按照文档的顺序开始执行，这时候脚本可以访问完整的dom树,禁止使用document.write()。
6、Document对象触发DOMContentLoaded。程序从同步脚本执行转到异步事件驱动阶段（事件触发线程、定时器线程、异步请求线程）。
7、文档虽然完全解析，但可能还有图片等内容等待载入。当所有内容完成载入，并且异步脚本完成执行，document.readyState属性变为“complete”，触发window对象的load事件。
8、往后都是异步驱动阶段（事件触发线程、定时器线程、异步请求线程进行处理）。
```

### 兼容性

分级浏览器支持

功能测试

怪异模式(IE4/IE5)和标准模式(IE6以上)，使用H5头使用标准模式(<!DOCTYPE html>)

客户端嗅探

IE的条件注释<!--[if lte IE 6]><![endif]-->

### 可访问性

屏幕阅读器的辅助性技术

### 安全性

#### javascript的限制

```
1、限制脚本打开新窗口，除非是用户点击触发打开新窗口
2、js可以关闭自己打开的窗口，但不能不经用户确认关闭其他窗口
3、HTML FileUpload元素的value属性是只读的
4、脚本不能读取不同服务器载入的文档内容，同源策略。
```

#### 不严格同源策略

```
1、设置document.domain为二级域名，可以读取同二级域名的二级以上域名的站点，document.domain不能只设置以及域名。
2、跨域资源共享
3、跨文档消息，window.postMessage()
```

#### 跨站脚本攻击xss

这段脚本如果在通过url的search参数带进html代码的话有安全隐患。

```
//应该处理下name，使用name.replace(/</g/, "&lt;").replace(/>/g, "&gt;")
var name = decodeURIComponent(window.location.search.substring(1) || "");
document.write("Hello" + name);
```

#### 拒绝服务攻击

使用无限循环，占用系统资源攻击计算机。