# javascript的子集和扩展

### javascript子集

使用use strict

JSLint

ESLint

```
##### 一些具体规则：
为了静态分析，禁用eval()、Function()、with(){}

不能用this，因为this会访问全局对象（在浏览器比如window）

禁止访问window、document，方法一完全禁用，方法二提供需要安全规范后的api

禁用某些属性和方法，比如arguments的caller和callee，constructor，prototype，非标准属性__proro__

静态分析可以防止(.)运算符存取特殊属性，但是无法阻止([])内的表达式，故使用([])存取属性时，应使用字符串直接量。
```

### javascript扩展

使用TypeScript

ES6性特性

服务器端javascript：Rhino、node