<template>
  <div id="app">
    <Calender/>
  </div>
</template>
<script>

// @ is an alias to /src
import Calender from '@/views/Calender.vue'
export default {
  name: 'App',
  components: {
    Calender
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");
html,
body {
  font-family: "Tajawal", sans-serif;
}
</style>
