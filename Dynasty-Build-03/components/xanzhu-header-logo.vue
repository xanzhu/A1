<template>
  <div class="logo-header text-center sm:text-left mt-4 ml-6 leading-6 font-bold font-display">
    <n-link :to="{name: 'index'}" class="link" aria-label="Home">
      <p class="version-date text-sm pb-1 tracking-wide">
        A1.1 — JULY 2020
      </p>
      <h1 class="header-branding text-xl">
        XANZHU
      </h1>
    </n-link>
  </div>
</template>
<script>
export default {
  name: 'Zheader'
}
</script>
