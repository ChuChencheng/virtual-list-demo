<template>
  <!-- 用户可见的容器高度可能只有 300px -->
  <div
    class="container"
    style="width: 200px; height: 300px;"
  >
    <div
      v-for="item in data"
      :key="item.id"
      class="list-item"
      :style="{
        height: `${itemHeight}px`,
      }"
    >{{ item.value }}</div>
  </div>
</template>

<script>
// 普通列表

export default {
  name: 'NormalList',
  props: {
    /** 数据 */
    data: {
      type: Array,
      default: () => [],
    },

    /** 限制每个列表项高度为 30 */
    itemHeight: {
      type: Number,
      default: 30,
    },
  },
}
</script>

<style scoped>
.container {
  border: 1px solid red;
  margin: 0 auto;
  overflow-y: auto;
  position: relative;
}

.list-item {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid blue;
  padding: 10px;
}
</style>
