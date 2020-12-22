# toString

### 使用

string Number.prototype.toString(any radix = 10)

以指定的基数返回该对象的字符串表示。

如果转换的基数大于10则返回的字符串使用a、b、c等字母表示单个位数大于10的数字。

对象是负数则保留负号。

```javascript
//使用
(123556).toString(16)	//"1e2a4"
(-10).toString(2)	//"-1010"
//异常
(-10).toString(37)
//Uncaught RangeError: toString() radix argument must be between 2 and 36
//    at Number.toString (<anonymous>)
//    at <anonymous>:1:7
```



### 兼容性

| Feature       | Chrome | Firefox (Gecko) | Internet Explorer | Opera | Safari |
| :------------ | :----- | :-------------- | :---------------- | :---- | :----- |
| Basic support | (Yes)  | (Yes)           | (Yes)             | (Yes) | (Yes)  |

| Feature       | Android | Chrome for Android | Firefox Mobile (Gecko) | IE Mobile | Opera Mobile | Safari Mobile |
| :------------ | :------ | :----------------- | :--------------------- | :-------- | :----------- | :------------ |
| Basic support | (Yes)   | (Yes)              | (Yes)                  | (Yes)     | (Yes)        | (Yes)         |