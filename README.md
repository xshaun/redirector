# Redirector

作为浏览器扩展插件。其核心功能是重定向网络资源标志符，意在用最简约的代码解决由于部分第三方关键资源被禁止而无法使用相关服务的问题。

*例如：overleaf 是优秀的在线LaTex编辑器，方便团队协作，简化环境搭建等。但`登陆/注册`功能依赖于 reCAPTCHA，不幸的是，reCAPTCHA 往往从 google.com 站点加载，在境内无法访问，导致无法使用 overleaf 服务。为此，此插件将在浏览器加载reCAPTCHA所需资源时，将资源地址从 https://www.google.com/recaptcha/api.js 重定向为 https://recaptcha.net/recaptcha/api.js。*

# 如何安装使用

1. 从GitHub下载插件代码 redirector
2. 按照自己的需求，加入重定向代码。如下：
```js
// match pattern for the URLs to redirect
addRule("https://www.google.com/recaptcha/api.js*", "https://recaptcha.net/recaptcha/api.js");
//addRule("http://*", "https://*");
```
3. 打开Chrome浏览器（需启动开发者模式），点击`More Tools` -> `Extensions` -> `Load unpacked`。选择代码目录。加载完成后即可。

# 问题

1. 如何启动Chrome的开发者模式(Developer mode)?

> 在浏览器中键入'*chrome://extensions*'，选中 `扩展插件(extensions)` 旁边的 `开发者模式(developer mode)`复选框。

2. 新增的规则如何生效？

>每次 新增/删除/修改 等规则，需要打开`More Tools` -> `Extensions` ，找到Redirector并点击刷新按钮。

# 参考

1. onBeforeRequest:  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
2. Match_patterns: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns

