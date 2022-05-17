
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
  var foo = 1;
}
try {
  foo += 1
  console.log(foo)
} catch {
  console.log('success')
}
```

点击上方的 `接受挑战` 开始编码！旅途愉快！

<br>
<a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/13/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/13/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->