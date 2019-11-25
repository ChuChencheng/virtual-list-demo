<template>
  <!-- 用户可见的容器高度可能只有 300px -->
  <div
    class="container"
    style="width: 200px; height: 300px;"
    @scroll.passive="handleScroll"
  >
    <!-- 总的列表 div ，用于撑起列表的高度 -->
    <div
      class="total-list"
      :style="{
        // height: `${itemHeight * data.length}px`,
        height: `${totalHeight}px`,
      }"
    ></div>

    <!-- 此处只需渲染可见列表即可，无需渲染全部数据 -->
    <div
      class="visible-list"
      :style="{
        transform: `translateY(${topHeight}px)`,
      }"
    >
      <div
        v-for="item in visibleList"
        :key="item.id"
        class="visible-list-item"
        :style="{
          height: `${itemHeight}px`,
        }"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
// 简单虚拟列表实现

export default {
  name: 'VirtualList',
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
  data () {
    return {
      /** 可见的列表 */
      visibleList: [],

      totalHeight: 0,

      /** 已滚过的高度 */
      topHeight: 0,
    }
  },
  methods: {
    setData (data) {
      this.nonReactiveData = data
      this.totalHeight = this.itemHeight * data.length
      this.updateVisibleList()
    },

    /** 更新可见列表 */
    updateVisibleList () {
      const scrollTop = this.$el.scrollTop
      /** 可见列表项个数 = 可见容器高度 / 每个列表项高度 ，记得向上取整 */
      const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight) + 1
      /** 已滚过的列表项个数，这边要向下取整 */
      const start = Math.floor(scrollTop / this.itemHeight)
      /** 赋值可见列表 */
      this.visibleList = this.nonReactiveData.slice(start, start + visibleCount)
      /** 更新已滚过的高度 */
      this.topHeight = start * this.itemHeight
    },

    handleScroll () {
      this.updateVisibleList()
    }
  },
  mounted () {
    this.nonReactiveData = []
    // 因为要获取 scrollTop 跟 clientHeight ，所以要在 mounted 更新可见数据
    this.updateVisibleList()
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

.total-list {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid green;
}

.visible-list {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 0;
}

.visible-list-item {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid blue;
  padding: 10px;
}
</style>
