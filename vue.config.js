const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    // 设置跨域请求
    proxy: {
      '/api': {
        target: 'http://localhost:8000', //请求的根路径
        changeOrigin: true, // 允许跨域
        pathRewrite: { //重写路径
          '^/api': ''
        }
      }
    }
  }
})
