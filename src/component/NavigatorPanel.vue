<template>
  <div class="navigator-panel">
    <ul v-for="(item, index) in data"
        :key="index"
        :class="item.type"
    >
      <li :class="item.type" @click="menuClick(item)">{{ item.label }}</li>
      <NavigatorPanel
        v-if="item.children"
        :data="item.children"
      />
    </ul>
  </div>
</template>

<script>
  import router from '../config/router.config';
  
  export default {
    name: 'NavigatorPanel',
    props: {
      data: {
        required: true,
        type: Array,
        default: () => []
      }
    },
    methods: {
      menuClick(item) {
        router.push({ path: item.routePath }).catch(e => {
          if (e.name !== 'NavigationDuplicated') {
            throw e;
          }
        });
      },
    }
  };
</script>

<style scoped lang="less">
  .navigator-panel {
    width: 100%;
    ul, li {
      list-style: none;
    }
    ul.SubSystem {
      background-color: orangered;
      padding-left: 15px;
    }
    ul.TableCategory {
      background-color: #09a155;
      padding-left: 15px;
    }
    li.action, li.table {
      background-color: #0f8ee9;
      padding-left: 15px;
    }
    li.action:hover, li.table:hover {
      cursor: pointer;
    }
    li {
      font-size: 14px;
      padding: 5px;
    }
  }
</style>
