# toExponential

### 使用

string Numer.prototype.toExponential(number digits)

用科学记数法来表示number对象，小数点后以digits的整数部分提供的数值来四舍五入。

```javascript
//使用
1.2.toExponential()	//"1.2e+0"
30 .toExponential() //"3e+1"，整数字面量要空一格空格，避免.被解析为小数点

//异常
30 .toExponential(300) 
//Uncaught RangeError: toExponential() argument must be between 0 and 100
//    at Number.toExponential (<anonymous>)
//    at <anonymous>:1:5
's'.toExponential(300)
//Uncaught TypeError: "s".toExponential is not a function
//    at <anonymous>:1:5
```

### 兼容性

| Feature       | Chrome | Firefox (Gecko) | Internet Explorer | Opera | Safari |
| :------------ | :----- | :-------------- | :---------------- | :---- | :----- |
| Basic support | (Yes)  | (Yes)           | (Yes)             | (Yes) | (Yes)  |

| Feature       | Android | Chrome for Android | Firefox Mobile (Gecko) | IE Mobile | Opera Mobile | Safari Mobile |
| ------------- | :------ | :----------------- | :--------------------- | :-------- | :----------- | :------------ |
| Basic support | (Yes)   | (Yes)              | (Yes)                  | (Yes)     | (Yes)        | (Yes)         |