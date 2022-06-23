# composition 

<a><img src='https://img.shields.io/badge/-%E5%BC%80%E5%A7%8B%E6%8C%91%E6%88%98-blue'/></a>

```js
// 期望 getUrlPath 接受一个 options 参数，传递则返回 path，不传递返回 '/'

function getRes(url) => {
  const firstRes = axios({url: '/api/1'}).resopnse
  const secondRes = axios({url: '/api/2', method: 'post', data: firstRes}).resopnse
  const thirdRes =  axios({url: '/api/3', method: 'post', data: secondRes}).response
  return thirdRes
}

// 这是提供的简单axios工具函数 ，用于返回 xhr 你并不需要关心这部分
function axios(config) {
  const { method = "GET", url, data } = config;
	const xhr = new XMLHttpRequest();
	xhr.open(method, url, false);
	xhr.send(data);
	return xhr;
} 
```

点击上方的 **接受挑战** 开始编码！旅途愉快！👍🏻

<a href='https://github.com/2462870727/show-your-code' target="_blank">
<img alt='返回首页' src='https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-lightgrey' />
</a><a href='https://github.com/2462870727/show-your-code/blob/main/questions/06-function-default/README.md' target="_blank"><img alt='上一题' src='https://img.shields.io/badge/-%E2%AC%86%EF%B8%8F%E4%B8%8A%E4%B8%80%E9%A2%98-orange' /></a>
<a href='' target="_blank">
<img alt='下一题' src='https://img.shields.io/badge/-%E2%AC%87%EF%B8%8F%E4%B8%8B%E4%B8%80%E9%A2%98-success' />
</a><a href="https://github.com/2462870727/show-your-code/issues/new?title=07-Rename-var&labels=answer&template=issue.md" ><img src='https://img.shields.io/badge/-%E6%88%91%E6%9C%89%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%A7%A3%E7%AD%94-blue' alt='我有更好的答案' /></a>

<br>
<details><summary>查看 👀 答案</summary>
<br>

```js
function getRes(url) => {
  const { resopnse: firstRes } = axios({url: '/api/1'})
  const { resopnse: secondRes } = axios({url: '/api/2', method: 'post', data: firstRes})
  const { response: thirdRes } =  axios({url: '/api/3', method: 'post', data: secondRes})
  return thirdRes
}
```

解构赋值在实际开发中也有着不少的运用。这里使用的是 **变量重命名**。有时候有直接解构，可能存在着重复声明同一个变量。解构后直接重命名，相当快速便捷。

<br>
</details>


<br>

## 扩展阅读

[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)