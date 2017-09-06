# vue-loader-demo

此项目作为vue1.0了解熟悉vue-loader，基于webpack实现，会用到es6语法

<pre>简单的目录结构:
	|-index.html
	|-main.js	入口文件
	|-App.vue	vue文件，官方推荐命名法
	|-package.json	工程文件(项目依赖、名称、配置)
		npm init --yes 生成
	|-webpack.config.js	webpack配置文件
</pre>

<pre>webpack准备工作:
	cnpm install webpack --save-dev
	cnpm install webpack-dev-server --save-dev

	App.vue	-> 变成正常代码		vue-loader@8.5.4
	cnpm install vue-loader@8.5.4 --save-dev

	cnpm install vue-html-loader --save-dev
	
	vue-html-loader、css-loader、vue-style-loader、
	vue-hot-reload-api@1.3.2  --save-dev
	
	babel-loader  
	babel-core
	babel-plugin-transform-runtime
	babel-preset-es2015
	babel-runtime
</pre>
