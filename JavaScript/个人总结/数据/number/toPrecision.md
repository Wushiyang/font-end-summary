# toPrecision

### 使用

string Number.prototype.toPrecision(number precision)

以定点表示法或指数表示法表示的一个数值对象的字符串表示，四舍五入到precision参数指定的显示数字位数。

忽略precision参数，则表现类似于Number.prototype.toString()。

precision向下取整。

```javascript
//使用
5.1234.toPrecision()	//"5.1234"
5.1234.toPrecision(3)	//"5.12"
(1234.5).toPrecision(2)	//"1.2e+3"，precision小于整数位时使用科学记数法
//异常
(1234.5).toPrecision(120)
//Uncaught RangeError: toPrecision() argument must be between 1 and 100
//    at Number.toPrecision (<anonymous>)
//    at <anonymous>:1:10
```



### 兼容性

| Feature       | Chrome | Firefox (Gecko) | Internet Explorer | Opera | Safari |
| :------------ | :----- | :-------------- | :---------------- | :---- | :----- |
| Basic support | (Yes)  | (Yes)           | (Yes)             | (Yes) | (Yes)  |

| Feature       | Android | Chrome for Android | Firefox Mobile (Gecko) | IE Mobile | Opera Mobile | Safari Mobile |
| :------------ | :------ | :----------------- | :--------------------- | :-------- | :----------- | :------------ |
| Basic support | (Yes)   | (Yes)              | (Yes)                  | (Yes)     | (Yes)        | (Yes)         |

