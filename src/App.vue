<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import HeroView from "@/components/LayoutItem.vue"
import LayoutView from './views/LayoutView.vue';


export default {
  components: { HeroView, LayoutView }
};
</script>

<style lang='scss'>
</style>
