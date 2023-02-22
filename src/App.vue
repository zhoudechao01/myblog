<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogApp',
};
</script>

<style lang="less" scoped>
	#app{
		width: 100vw;
		height: 100vh;
    img{
      position: absolute;
      top: 1px;
    }
	}
</style>