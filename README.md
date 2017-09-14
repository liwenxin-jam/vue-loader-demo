# vue-loader-demo

> 此项目作为vue1.0了解熟悉vue-loader，基于webpack实现，会用到es6语法。 注意依赖包的版本，因为用的是vue1.0，部分依赖也是要用低版本。

``` bash
简单的目录结构:
	|-index.html    首页
	|-main.js	入口文件
	|-App.vue	vue文件，官方推荐命名法
	|-package.json	工程文件(项目依赖、名称、配置)
		npm init --yes 默认生成
	|-webpack.config.js	webpack配置文件
```

<pre>webpack准备工作
	格式npm install <package-name>  --save-dev:
	npm install webpack webpack-dev-server --save-dev       在本地环境下载webpack和webpack-dev-server 
	App.vue	-> 变成正常代码		vue-loader@8.5.4
	npm install vue-loader@8.5.4 --save-dev

	vue相关依赖如下：
	vue-html-loader、css-loader、vue-style-loader、
	vue-hot-reload-api@1.3.2  --save-dev
	
	babel相关依赖如下：
	babel-loader 
	babel-core
	babel-plugin-transform-runtime
	babel-preset-es2015
	babel-runtime

	
	最核心依赖：  注意--save 和  --save-dev的区别
	vue@1.0.28 --save
</pre>

<pre>vue-router准备工作:
	npm install vue-router@0.7.13   由于使用的是vue1.0，需要配置使用低版本的vue-router
	1. 下载vue-router模块
	   npm install vue-router@0.7.13
	2. import VueRouter from 'vue-router'
	3. Vue.use(VueRouter);
	4. 配置路由
	   var router=new VueRouter();
	   router.map({
		路由规则
	   })
	5. 开启
	   router.start(App,'#app');
	   
	注意使用了router-view的区别，不再需要使用new Vue实例化，使用router.start即可:
	之前: index.html	->   <app></app>
	现在: index.html	->   <div id="app"></div>

	App.vue	->   需要一个 <div id="app"></div>  根元素
</pre>

<pre>程序运行工作:
配置package.json脚本指令
"scripts": {
    "dev": "webpack-dev-server --inline --hot"   自动刷新 热加载  如需要自定义端口号加上  --port 8081
    "build": "webpack -p"   打包并压缩，路径和文件名可以自己配置
}
项目代码没有上传node_modules依赖包，请终端下先执行脚本 npm install
终端下执行npm run dev
</pre>

<pre>vue2.0的vue-cli脚本架说明
	基本使用流程:
	1. npm install vue-cli -g	安装 vue命令环境
		验证安装ok?
			vue --version
	2. 生成项目模板
		vue init <模板名> 本地文件夹名称
	3. 进入到生成目录里面
		cd xxx
		npm install
	4. npm run dev
</pre>
