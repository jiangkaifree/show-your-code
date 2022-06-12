# function default params

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
// 期望 getUrlPath 接受一个 url 参数，传递则返回 path，不传递返回 '/'

function getUrlPath(url) => {
  if (url !== undefined) {
    return url
  } else {
    return '/'
  }
}
```

点击上方的 `接受挑战` 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='https://github.com/2462870727/show-your-code/blob/main/questions/05-default-value/README.md' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a><a href="https://github.com/2462870727/show-your-code/issues/new?title=04-repater-string&labels=answer&template=issue.md" ><img src='https://img.shields.io/badge/-%E6%88%91%E6%9C%89%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%A7%A3%E7%AD%94-blue' alt='我有更好的答案' /></a>

<br>
<details><summary>查看 👀 答案</summary>
<br>

```js
function getUrlPath(url = "/") => {
  return url
}
```

这里探讨的 `function` 的默认参数，函数参数缺省是很常见的问题。同样的 `ES6` 提供的 `function` 默认参数，这样做能保证我们的函数参数的一致性，也避免了对参数是否存在的判断的问题。
<br>
</details>


## 扩展阅读

[默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/default_parameters)