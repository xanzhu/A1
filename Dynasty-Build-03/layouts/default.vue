<template>
  <div class=" default-container top-0 bottom-0 left-0 right-0 overflow-auto fixed leading-6 m-0 bg-black text-white pb-10">
    <zheader />
    <nuxt />
    <zfooter />
  </div>
</template>
<style>
body {
  background-color: #000;
}
</style>
<script>
import zheader from '@/components/xanzhu-header-logo'
import zfooter from '@/components/global-footer'

export default {
  components: {
    zheader,
    zfooter
  }
}
</script>
