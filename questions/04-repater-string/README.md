```js
if (chanceMessage.indexOf('0') > -1) {
  message.error('账号已锁定，请联系管理员解锁');
}
if (chanceMessage.indexOf('1') > -1) {
  message.error('验证Pin码失败，还有1次重试机会');
}
if (chanceMessage.indexOf('2') > -1) {
  message.error('验证Pin码失败，还有2次重试机会');
}
if (chanceMessage.indexOf('3') > -1) {
  message.error('验证Pin码失败，还有3次重试机会');
}
if (chanceMessage.indexOf('4') > -1) {
  message.error('验证Pin码失败，还有4次重试机会');
}
if (chanceMessage.indexOf('5') > -1) {
  message.error('验证Pin码失败，还有5次重试机会');
}
```


```js
obj.a || 'aa'
obj.func && obj.func()
```