# new Map()

优化下面的 `function`, 并且不改变它的输出结果

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
// 期望返回对应的message
function getMessage(message) {
  if (message === 0) {
    return '账号已锁定，请联系管理员解锁';
  } else if (message === 1) {
    return '验证Pin码失败，请重试';
  } else if (message === 2) {
    return '验证Pin码失败，还有2次重试机会';
  }
}

```

点击上方的 **接受挑战** 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='https://github.com/2462870727/show-your-code/blob/main/questions/05-default-value/README.md' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='https://github.com/2462870727/show-your-code/blob/main/questions/05-default-value/README.md' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a><a href="https://github.com/2462870727/show-your-code/issues/new?title=04-repater-string&labels=answer&template=issue.md" ><img src='https://img.shields.io/badge/-%E6%88%91%E6%9C%89%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%A7%A3%E7%AD%94-blue' alt='我有更好的答案' /></a>

<br>
<details><summary>查看 👀 答案</summary>

<br>

```js

function getMessage(message) {
  const codeMap = new Map([
    [0, '账号已锁定，请联系管理员解锁'],
    [1, '验证Pin码失败，请重试'],
    [2, '初始密码，请修改默认初始密码'],
  ])
  return codeMap.get(message)
}
```

使用 `Map` 数据结构能够更好的帮助我们获取到对应的提示信息，并且可以更好的扩展代码。
<br>
</details>

## 扩展阅读

[MDN文档Map介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
