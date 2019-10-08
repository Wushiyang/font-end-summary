# DOM编程

浏览器的dom操作是渲染引擎和js引擎两个线程交互的过程，频繁对dom操作很影响性能。

### DOM访问和修改

innerHTML比createTextNode然后appendChild修改dom更高效，特别在老浏览器（可能在生成节点的时候更少访问dom且渲染引擎做过优化）

cloneNode比cteateElement更高效

HTML集合以一个“假定实时态”实时存在，这意味着当底层文档对象更新时，它也会自动更新。所以访问HTML集合的元素或属性时，使用局部变量缓存

### 重绘和重排

### 事件委托