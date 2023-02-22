<template>
  <div class="pageing">
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :pager-count="5"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogIndex',

  data() {
    return {
      currentPage: 0,
    };
  },

  mounted() {
    
  },

  methods: {
    handleCurrentChange(val) {
      this.$emit('func', val)
      // getData(this.$parent, "/works", { size: this.pagesize, page: this.currentPage });
    },
  },
};
</script>

<style lang="less" scoped>
.pageing{
  width: 100%;
  /deep/ .el-pagination{
    text-align: center;
  }
  /deep/ .btn-prev{
    background-color: #1f222e;
    color: #b7b7b7;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
  }
  /deep/ .btn-next{
    background-color: #1f222e;
    margin-left: 6px;
    color: #b7b7b7;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
  }

  /deep/ .number{
    background-color: #1f222e;
    margin-left: 6px;
    color: #b7b7b7;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
  }

  /deep/ .btn-quicknext{
    background-color: #1f222e;
    margin-left: 6px;
    color: #b7b7b7;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
  }
  /deep/ .btn-quickprev{
    background-color: #1f222e;
    margin-left: 6px;
    color: #b7b7b7;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
  }

  /deep/ .active{
    background-color: #4b5bb6;
  }
}
</style>