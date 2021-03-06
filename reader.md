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
 官网[webpack官网](https://webpack.docschina.org/)
+ 树结构：在一个入口文件中引入所有资源，形成所有依赖关系树状图
+ 模块：所有的资源或一个文件都可称为模块
+ chunk: 打包被操作的模块文件叫chunk
+ bundel: bundel是最后打包后的文件，大多数是chunk的合体
+ 开发环境： webpack --mode development
+ 生成环境： webpack --mode production

##### webpack打包html资源
+ 插件打包、重命名、压缩
步骤：
+ npm i html-webpack-plugin
 ```
 const htmlWebpackPlugin = require('html-webpack-plugin');
 ```

##### webpack打包less或sass资源
+ 因为css只是单纯的属性描述，它并不具有变量、条件语句等，css的特性导致了它难组织和维护
+ Sass和Less都属于CSS预处理器，定义了一种新的语言，其基本思想使用一种专门的编程语言，为CSS增加一些编程的特性，将CSS作为目标生成文件，然后开发者使用这种语言进行CSS编码工作
+ Less需要less包和less-loader
+ Sass需要node-sass包和sass-loader。备注：sass文件以.scss结尾
+ 提取CSS作为单独文件：
  ![提取CSS为单独文件](/images/3.png)
+ CSS浏览器兼容







