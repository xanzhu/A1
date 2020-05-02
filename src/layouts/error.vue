<template>
  <div class="error">
    <xan-logo />
    <h1 v-if="error.statusCode === 404">
      Page not found.
    </h1>
  </div>
</template>

<script>
import xanLogo from '@/components/svg/XANZHU'

export default {
  components: {
    xanLogo
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
body {
  background-color: #000;
  color: #fff;
}
.error {
  padding: 3em;
  text-align: center;
}
svg {
  fill: #fff;
  max-height: 15em;
}
.error-home {
  color: white;
  font-weight: 700;
}

@media only screen and (max-width: 768px){
  h1 {
    margin: 1em;
    text-align: center;
  }

  .error {
    padding: 2em;
  }
}
</style>
