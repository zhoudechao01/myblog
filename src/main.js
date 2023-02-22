import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入图标库
import 'font-awesome/css/font-awesome.min.css'

// 引入富文本编辑器预览HTML
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// 引入插件
import VueLazyload from 'vue-lazyload'


// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

// 注册插件
Vue.use(VueLazyload,{
	preLoad: 1.3,
	loading: '../src/assets/loading.gif',
	attempt: 1
})

Vue.use(VMdPreview);
Vue.use(ElementUI)
Vue.config.productionTip = false

//页面跳转后回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
