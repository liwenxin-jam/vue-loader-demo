# vue-loader-demo

此项目作为vue1.0了解熟悉vue-loader，基于webpack实现，会用到es6语法

<pre>简单的目录结构:
	|-index.html    首页
	|-main.js	入口文件
	|-App.vue	vue文件，官方推荐命名法
	|-package.json	工程文件(项目依赖、名称、配置)
		npm init --yes 默认生成
	|-webpack.config.js	webpack配置文件
</pre>

<pre>webpack准备工作:
	npm install webpack webpack-dev-server --save-dev       在本地环境下载webpack和webpack-dev-server 
	App.vue	-> 变成正常代码		vue-loader@8.5.4
	npm install vue-loader@8.5.4 --save-dev

	npm install vue-html-loader --save-dev
	
	vue-html-loader、css-loader、vue-style-loader、
	vue-hot-reload-api@1.3.2  --save-dev
	
	babel-loader  
	babel-core
	babel-plugin-transform-runtime
	babel-preset-es2015
	babel-runtime
</pre>

<pre>程序运行工作:
配置package.json脚本指令
"scripts": {
    "dev": "webpack-dev-server --inline --hot"   自动刷新 热加载  如需要自定义端口号加上  --port 8081
}
终端下执行npm run dev
</pre>
