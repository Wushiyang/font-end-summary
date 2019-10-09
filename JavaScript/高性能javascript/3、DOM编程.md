# DOM编程

浏览器的dom操作是渲染引擎和js引擎两个线程交互的过程，频繁对dom操作很影响性能。

### DOM访问和修改

innerHTML比createTextNode然后appendChild修改dom更高效，特别在老浏览器（可能在生成节点的时候更少访问dom且渲染引擎做过优化）

cloneNode比cteateElement更高效

HTML集合以一个“假定实时态”实时存在，这意味着当底层文档对象更新时，它也会自动更新。所以访问HTML集合的元素或属性时，使用局部变量缓存

```
//HTML集合
document.getElementsByName()
document.getElementsByClassName()
document.getElementsByTagName()
document.images
document.links
document.forms
document.forms[0].elements
```

在老的浏览器nextSibling比childNodes性能优越

大部分现在浏览器提供的API只返回元素节点，使用这些API执行效率比自己在JavaScript代码实现过滤的效率要高，特别是children代替childNodes。**（有异议！！！）**

```
children	childNodes
childElementCount	childNodes.length
firstElementChild	firstChild
lastElementChild	lastChild
nextElementSibling	nextSibling
previousElementSibling	previousSibling
//这个优化待议，因为在新版浏览器里children返回去html集合，childNodes返回nodeList，而且children节点数不见得比childNodes少。
```

使用选择器API，都返回node或nodeList

```
document.querySelectorAll
document.querySelector
```

### 重绘和重排

#### 概念

##### 重排重绘

浏览器下载完页面所有组件后会解析并生成两个内部结构DOM树（页面结构）和渲染树（DOM节点如何展示）。

DOM树每个展示的节点在渲染树至少有一个对应节点，隐藏的DOM元素在渲染树没有对应节点。

渲染树的节点被称为“帧”或“盒”，有padding、margin、border和position。

DOM树和渲染树构建完成，浏览器开始**绘制（paint）**页面。

当DOM变化影响元素几何属性，其他元素的几何属性和位置也会受影响，浏览器会使渲染树受影响部分失效，并重新构造渲染树，这个过程称为**“重排（reflow）”**，重排后绘制受影响部分到屏幕中，这个过程称为**“重绘（repaint）”**。

#### 优化

##### 渲染树变化排队和刷新

由于每次重排都会产生计算消耗，大多数浏览器通过队列化修改并批量执行来优化重排过程。获取布局信息的操作会导致队列刷新。

```javascript
//以下方法会返回最新布局信息，因此浏览器不得不执行渲染队列中的“待处理变化”并触发重排以返回正确的值。因此在修改样式的过程中避免使用下面属性（可能是说本来使用队列优化一次重排渲染，但是触发了队列刷新，会立即重排重绘，导致多次重排！！！）
offsetTop,offsetLeft,offsetWidth,offsetHeight
scrollTop,scrollLeft,scrollWidth,scrollHeight
clientTop,clientLeft,clientWidth,clientHeight
getComputedStyle()(currentStyle)
```

##### 最小化重绘和重排

将多次修改合并为一次修改，比如多次样式修改使用el.style.cssText一次修改

修改css的class名称应用css样式，虽然会带来些微性能影响，但是易于显示清晰维护。

##### 批量修改dom

```
减少重绘重排的步骤:
1、使元素脱离文档流
2、对其应用多重改变
3、把元素带回文档
具体方法：
1、隐藏元素(display:none)，应用修改(apendChild)，重新显示(display:block)
2、使用文档片段（fragment），在dom之外构建一个子树，在添加回文档(apendChild)（推荐方法）
3、将原始元素拷贝到一个脱离文档的节点中(cloneNode)，修改副本(apendChild)，完成后替换原始元素(replaceChild)。
```

##### 缓存布局信息

不要频繁获取布局信息，获取一下后通过计算修改布局而不是根据最新的布局信息取修改布局。

```
//低效
myElement.style.left = 1 + myElement.offsetLeft + 'px';
myElement.style.top = 1 + myElement.offsetTop + 'px';
if (myElement.offsetLeft >= 500) {
	stopAnimation();
}
//缓存布局高效
current++
myElement.style.left = current + 'px';
myElement.style.top = current + 'px';
if (current >= 500) {
	stopAnimation();
}
```

##### 使元素脱离动画流

使用绝对定位处理动画，进行部分重排重绘。

##### IE和:hover

避免大量使用hover伪类

### 事件委托

将事件绑定父元素，利用事件冒泡监听是哪个子元素触发。

为了严谨性，写事件时应该注意是否阻止**事件冒泡**和**默认动作**。