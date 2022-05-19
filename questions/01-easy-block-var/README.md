
# 块级作用域

这个简单的案例希望让你可以快速上手。在这里，我们使用了一些神奇的技巧让 TypeScript 通过自身的类型系统来实现自动判题。

在这个挑战中，你需要修改下方的代码使得测试通过。

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
// 期望 foo 是一个块级作用域的变量
var foo = 1
```

```js
// 你需要使得下面代码输出 success 而不是 2
if (true) {
  var foo = 1; // 只修改这行
}
try {
  ++foo
  console.log(foo)
} catch {
  console.log('success')
}
```

点击上方的 `接受挑战` 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a>

<br>
<details><summary>查看 👀 答案</summary>

<br>

```js
if (true) {
  var foo = 1; // 使用 let
}
try {
  ++foo
  console.log(foo)
} catch {
  console.log('success')
}
```
> `const` , `let` 会避免提升变量，形成局部作用域。但注意⚠️这里 由于 foo 自增。所以应当使用 `let`

<br>

</details>

<br>

## 相关学习