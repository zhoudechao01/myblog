<template>
  <div>
    <Banner/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Banner from './banner'
import Skills from './skills'
import Project from './project'
import Contact from './contact'
import Footer from '../../components/common/footer/index.vue'
export default {
  name: 'PersonBlogIntroduce',
  components: {
    Banner,
    Skills,
    Project,
    Contact,
    Footer
  },
};
</script>

<style lang="scss" scoped>

</style>