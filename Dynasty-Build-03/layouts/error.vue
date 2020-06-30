<template>
  <div class="error text-center pt-20 pb-5">
    <div v-if="error.statusCode === 404" class="404 font-display mt-8">
      <h1 class="text-lg">
        Page not found
      </h1>
      <p class="pt-2 font-body text-sm">
        Check your syntax and try again.
      </p>
    </div>
    <div v-else>
      <h1>Server error</h1>
      <p>System came across an error </p>
    </div>
    <n-link :to="{name: 'index'}" class="font-body">
      <button class="bg-red-700 hover:bg-red-800 font-normal py-1 px-4 rounded mt-5">
        Return
      </button>
    </n-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head () {
    return {
      title: 'Page not found — xanzhu',
      meta: [
        { hid: 'description', name: 'description', content: 'The requested page/request could not be found, please try again.' },
        { hid: 'robots', name: 'robots', content: 'noindex nofollow' }
      ]
    }
  }
}
</script>
