<template>
  <div class="xtx-infinite-loading" ref="target">
    <div class="loading" v-if="loading">
      <i class="el-icon-loading"></i>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogInfiniteLoading',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>