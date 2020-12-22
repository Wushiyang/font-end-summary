# toFixed

### 使用

string Number.prototype.toFixed(number digits)

使用定点表示法表示给定的数字

```javascript
//使用
123.456.toFixed(2)	//"123.46"
0.004.toFixed(2)	//"0.00"
1.23e+5.toFixed(2)	//"123000.00"
-2.34.toFixed(1)	//-2.3，由于操作符优先级字符串被转成了数字
1e+21.toFixed(2)	//"1e+22"，数值不小于1e+21的会调用Number.prototype.toString()返回科学记数法的字符串
//异常
123.456.toFixed(200)
//Uncaught RangeError: toFixed() digits argument must be between 0 and 100
//   at Number.toFixed (<anonymous>)
//   at <anonymous>:1:9
's'.toFixed()
//Uncaught TypeError: "s".toFixed is not a function
//    at <anonymous>:1:5
```

### 兼容性

![1578241354112](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1578241354112.png)

