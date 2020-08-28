<template>
  <header>
    <el-menu mode="horizontal" class="horizonMenu">
      <el-menu-item index="home" class="top-menu-item" @click="testServer">Home</el-menu-item>
      <el-menu-item index="aboutUs" class="top-menu-item">About Us</el-menu-item>
      <el-menu-item index="portfolio" class="top-menu-item">Portfolio</el-menu-item>
      <el-menu-item index="blog" class="top-menu-item">Blog</el-menu-item>
      <el-menu-item index="contactUs" class="top-menu-item">Contact Us</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {}
  },
  methods: {
    testServer () {
      this.$http.post('/api/home/getMockData').then(res => {
        if (res.data.code === 0) {
          console.log('hello')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
  header {
    display: flex;
    flex-direction: row;

    .horizonMenu {
      display: flex;
      flex-direction: row;
      list-style-type: none;

      .top-menu-item {
        width: 122px
      }
    }
  }
</style>
