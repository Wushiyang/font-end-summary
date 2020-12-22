# window对象

### 一、计时器对象

```javascript
setTimeout();
clearTimeout();
setInterval();
clearInterval();
```



### 二、浏览器定位和导航

```javascript
window.location		url对象
	.protocol		协议
	.host			包含端口号的域名
	.hostname		不包含端口号的域名
	.port			端口号
	.pathname		路径
	.search			查询部分
	.hash			锚部分
	.assign()		使窗口载入并显示制定url的文档
	.replace()		替换制定url的文档
	.reload()		重新载入当前文档
```



### 三、浏览历史

```javascript
window.history
	.forward()		载入后一个历史文档
	.back()			载入前一个历史文档
	.go(number)		跳转历史文档
	.length			历史文档数量
```

子窗口的浏览历史会按时间穿插在主窗口历史中。

### 四、浏览器信息

```javascript
window.navigator
	.appName		Microsoft Internet Explorer || Netscape
	.appVersion		当前浏览器版本号
	.userAgent		浏览器在USER-AGENT HTTP头发送的字符串，包含appVersion
	.platform		浏览器所在操作系统
    .onLine			是否联网
    .geolocation	geolocation对象确定用户地理位置
    .javaEnabled	非标准方法，是否可运行java小程序
    .cookieEnabled	是否可保存永久cookie
```

### 五、屏幕对象

```javascript
window.screen
	.width			屏幕宽度
	.height			屏幕高度
	.availWidth		去除状态栏的屏幕宽度
	.availHeight	去除状态栏的屏幕高度
    .colorDepth		显示的BPP值
```

### 六、对话框

```javascript
window.alert()		显示对话框
window.prompt()		可返回内容的对话框
window.confirm()	返回true/false的对话框
```

会阻塞线程。

### 七、错误处理

```javascript
window.onerror = function(msg, url, line){}
```

时代产物，使用try/catch。

### 八、window对象文档元素

文档的id属性会在window对象上注册属性，如果该属性已存在则不会注册。

### 九、多窗口和窗体

```javascript
window.open(url, name, setting,isRepalce);	
					name有_blank，_parent，_top
window.close();
window.frames		类数组对象，指向window自身，window[0] === window.frames[0]
window.top			顶级窗口
window.parent		父级窗口
iframeElement.contentWindow	引用iframe的窗体对象
window.frameElement	当前窗体的frame对象
```

窗口间的互相访问受同源策略限制。

window是全局对象的代理（windowProxy）。