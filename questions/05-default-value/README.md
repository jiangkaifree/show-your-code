# new Map()

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
// 期望 getValue 接受一个 object，当存在 name 属性时，返回name的值，否则返回 hello。

function getValue(params) => {
  if (params.name) {
    return params.name
  }
  return 'hello'
}
```

点击上方的 **接受挑战** 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='https://github.com/2462870727/show-your-code/blob/main/questions/04-repater-string/README.md' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='https://github.com/2462870727/show-your-code/blob/main/questions/06-function-default/README.md' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a><a href="https://github.com/2462870727/show-your-code/issues/new?title=04-repater-string&labels=answer&template=issue.md" ><img src='https://img.shields.io/badge/-%E6%88%91%E6%9C%89%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%A7%A3%E7%AD%94-blue' alt='我有更好的答案' /></a>

<br>
<details><summary>查看 👀 答案</summary>
<br>

```js
function getValue(params) => {
  return params.name || 'hello'
}
```

这算是 `||` 的一种妙用方式。简单的看，这可能只是一些无关紧要的优化，但是它可以让你更好地理解 `||` 的作用。以及如果你的代码中包含过多的 `if` 语句，你可能会发现这样可能会更加简洁。

> `||` 的作用是，如果第一个表达式为 `true`，则返回第一个表达式的值，否则返回第二个表达式的值。 `&&` 的作用是，如果第一个表达式为 `false`，则返回第二个表达式的值，否则返回第一个表达式的值。
<br>
</details>
