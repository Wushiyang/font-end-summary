# let 和 const

## 1、Let 的总结

### 块作用域

```javascript
var a = []
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 6
```

let 在块里形成 block 作用域,所以每个 a[x]的[[Scopes]]为
[
Block {i: x}
Global
]
每一次的循环都是一个 block
for (let i = 0; i < 10; i++) {
a[i] = function () {
console.log(i);
};
}
相当于
{
for (let i = 0; i < 10; i++) {
a[i] = function () {
console.log(i);
};
}
}
外界取不到 i
for (let i = 0; i < 3; i++) {
let i = 'abc';
console.log(i);
}
存在故变量体是循环体的父作用域

### 暂时性死区

在同块里 let 变量不能同名

### 不存在变量提升

会将变量置顶并赋值为 undefined

### 顶层声明不再像 var 作为顶层对象的属性

浏览器的块级作用域 Es5 浏览器
函数声明类似于 var，即会提升到全局作用域或函数作用域的头部。

Es6 浏览器做的兼容方式：

1、允许在块级作用域内声明函数。

2、函数声明类似于 var，即会提升到全局作用域或函数作用域的头部。

3、同时，函数声明还会提升到所在的块级作用域的头部。
推荐必须在块级作用域声明函数则应写成函数表达式

## 2、const 和 let 一样，不同的是保存该变量不可更改

但是无法保证该地址（对象）的属性不可改变

用 Object.freeze()来冻结对象，使之不可拓展且属性不可配置不可写

Object.keys 返回自身可枚举属性数组

```javascript
var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key])
    }
  })
}
```

let、const、class 顶层声明的变量不再作为顶层对象的属性

Class 声明一个构造函数，在 Google 浏览器里用 typeof 检测是 function

globalThis 作为任何环境的顶层对象

```javascript
// 获取顶层对象的方法
var getGlobal = function () {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw new Error('unable to locate global object')
}
```

全局环境：this 返回顶层对象；node 模块的 this 返回当前模块，es6 模块返回 undefined

函数里：函数不是作为对象方法运行时，this 会指向顶层对象，但严格模式下 this 返回 undefined，New Function('return this')总是返回全局对象，不管是严格还是普通模式，但如果浏览器用了 CSP 则不能用 eval 和 new Function
