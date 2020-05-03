<template>
  <div class="error">
    <xan-logo class="elogo" />
    <h1 v-if="error.statusCode === 404">
      Page not found.
    </h1>
    <br>
    <a href="/" class="backlink">Return</a>
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
.elogo {
  fill: #fff;
  max-height: 15em;
}
.error-home {
  color: white;
  font-weight: 700;
}

.backlink {
  text-decoration: none;
  color: #ffff00;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid yellow;
  padding: 0.6em;
}

@media only screen and (max-width: 768px){
  h1 {
    margin: 1em;
    text-align: center;
    margin: 0;
  }

  .error {
    padding: 2em 1em 2em 1em;
  }

  .backlink {
    font-size: 15px;
    margin: 0;
  }

  .elogo {
    margin-bottom: 1.5em;
  }

}
</style>
