<template>
  <div class="navigator">
    <NavigatorPanel :data="menuLists"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import NavigatorPanel from './NavigatorPanel';
  
  export default {
    name: 'Navigator',
    data() {
      return {
        menuLists: [
        {
          label: '示例菜单一',
          routePath: '/PageOne'
        },
        {
          label: '示例菜单二',
          routePath: '/PageTwo'
        }
      ]
      }
    },
    components: {
      NavigatorPanel
    }
  };
</script>

<style lang="less">
  .navigator {
    height: 100%;
    width: 180px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .navigator::-webkit-scrollbar {
    width: 0;
  }
</style>
