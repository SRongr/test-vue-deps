<template>
  <div id="app">
    b is {{b}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      a:2
    }
  },
  computed: {
    b() {
      return this.a + 1
    }
  },
}
</script>