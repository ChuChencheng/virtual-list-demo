<template>
  <div id="app">
    <List ref="list"/>
  </div>
</template>

<script>
/* eslint-disable no-console */
// import List from './components/NormalList.vue'
import List from './components/VirtualListSetData.vue'
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
  mounted () {
    this.$refs.list.setData(data)
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
