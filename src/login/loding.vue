<template>
  <div class="loading"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>
<style lang="scss" scoped>
@media screen and (min-width: 360px) and (max-width: 796px) {
  .loading {
    position: fixed;
    left: 0;
    top: 0;
    background: url("../assets/login/loading.gif") center center no-repeat #fff;
    width: 100vw;
    height: 100vh;
    background-size: 100%;
    z-index: 1000;
  }
}
@media screen and (min-width: 796px) {
  .loading {
    position: fixed;
    left: 0;
    top: 0;
    background: url("../assets/login/loading.gif") center center no-repeat #fff;
    width: 100%;
    height: 100%;
    background-size: 30%;
    z-index: 1000;
  }
}
</style>
