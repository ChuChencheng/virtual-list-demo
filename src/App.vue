<template>
  <div id="app">
    <List
      :data="data"
      :itemHeightGetter="itemHeightGetter"
    />
  </div>
</template>

<script>
/* eslint-disable no-console */
/**
 * NormalList: 定高的普通列表
 * VirtualList: 定高的虚拟列表
 * PropHeight: 不定高、通过 Prop 传入高度的虚拟列表
 * 在此切换引入的文件查看不同列表的 demo
 */
// import List from './components/NormalList.vue'
import List from './components/VirtualList.vue'
// import List from './components/PropHeight.vue'

const data = []
for (let i = 0; i < 100000; i++) {
  data.push({
    id: Math.random().toString(36).substr(2),
    index: i,
    value: i + 1,
  })
}

export default {
  name: 'app',
  components: {
    List,
  },
  data () {
    return {
      data,
    }
  },
  methods: {
    itemHeightGetter (index) {
      return 35 + (index % 5) * (Math.random() < 0.5 ? -1 : 1)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
