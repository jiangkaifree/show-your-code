
# 解构赋值

优化下面的 `function`, 并且不改变它的输出结果

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
function getData(result) {
  if (result.code === 0) {
    return result.data
  } else {
    return result.message
  }
}
```

点击上方的 **接受挑战** 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='https://github.com/2462870727/show-your-code/blob/main/questions/02-much-statement/README.md' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='https://github.com/2462870727/show-your-code/blob/main/questions/04-repater-string/README.md' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a><a href="https://github.com/2462870727/show-your-code/issues/new?title=03-composition-value&labels=answer&template=issue.md" ><img src='https://img.shields.io/badge/-%E6%88%91%E6%9C%89%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%A7%A3%E7%AD%94-blue' alt='我有更好的答案' /></a>

<br>
<details><summary>查看 👀 答案</summary>

<br>

```js
function getData(result) {
  const { code, data, errMessage } = result
  if (code === 0) {
    return data
  } else {
    return message
  }
}
```

`ES6` 当中的解构赋值，能很大程度上避免我们出现又臭又长的 `.` 。比如这里的 `result.`

<br>
</details>