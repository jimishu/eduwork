## npm
##### 1.	npm是nodejs默认的软件包管理系统
##### 2.	查看镜像的配置结果
+ npm config get registry
##### 3.	设置为淘宝镜像，安装速度更快
+ npm config set registry 
+ https://registry.npm.taobao.org
##### 4.	npm的使用 
+ npm list -g 查看所有全局安装的模块
+ npm list vue 查看某个模块的版本号（vue）
+ npm install -save moduleName  -save在package文件的dependencies节点写入依赖
+ npm install -save-dev moduleName 开发时写入依赖

## package.json
![package](/images/1.png)
## npm常用命令
+ npm help install
## 包的使用
```
// 引用npm下载的包
const $ = require('jquery')
console.log($);
```
##### 模块和包的区别（包在package.json中，模块通常新建的文件）
## ES6语法兼容问题
![es6兼容](/images/2.png)
## webpack使用








