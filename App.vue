<template>
	<h1>Welcome Vue</h1>
	<h2 @click="change">{{msg}}</h2>
	<my-menu></my-menu>
</template>
<script>
	import Menu from './components/Menu.vue'
	export default{
		data(){
			return {
				msg: 'Welcome Vue Jam'
			}
		},
		methods:{
			change(){ 
				this.msg = 'wahaha'
			}
		},
		components:{
			'my-menu' : Menu
		}
	}
</script>
<style>
	body{
		background: #ccc;
	}
</style>