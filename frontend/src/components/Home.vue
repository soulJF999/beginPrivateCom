<template>
  <section>
    <div class="page-wrapper">
      <TopMenu />
    </div>
  </section>
</template>

<script>
import TopMenu from './TopMenu'
export default {
  name: "Home",
  components: {TopMenu}
}
</script>

<style scoped lang="less">
  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
