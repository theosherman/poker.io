<template lang="pug">
.ui.container
  router-view
  .ui.center.aligned.basic.segment
    p &copy; 2017 Poker.IO - Theo Sherman
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "~semantic-ui-css/semantic.css";
</style>