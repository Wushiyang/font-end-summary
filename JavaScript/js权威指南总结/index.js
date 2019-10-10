var a = [];
var times = 1000;
// init array
for(var i = 0; i <= times; i++)
  a[i] = i;
 
// ordinary way
console.time('1');
var sum = 0;
for(var i = 1; i <= times; i++)
  sum += 1 / a[i];
console.log(sum);
console.timeEnd('1');
 
// Duff's device
console.time('2');
var sum = 0;
while(times) {
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
  sum += 1 / a[times--];
}
console.log(sum);
console.timeEnd('2');