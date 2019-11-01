<template>
  <div
    class="dispalyArea"
  >
    <div
      id="content"
      style="height: 100%; padding: 0 15px 0;overflow: auto;position: relative"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        enableTabLists: true
      };
    },
    name: 'ContentDisplayArea',
    computed: {
      ...mapState('global', ['stateOne, stateTwo']),
    },
  };
</script>

<style scoped>
  .dispalyArea {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
