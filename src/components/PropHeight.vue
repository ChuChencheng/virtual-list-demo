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
          height: `${itemHeightRecord[item.index] || itemHeight}px`,
        }"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
// 通过 Prop 传入列表项高度的虚拟列表实现

export default {
  name: 'PropHeight',
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

    /** 根据 index 获取列表项的高度 */
    itemHeightGetter: {
      type: Function,
      default: () => 30,
    },
  },
  data () {
    return {
      /** 可见的列表 */
      visibleList: [],

      /** 每个列表项高度记录 */
      itemHeightRecord: [],

      /** 容器总高度 */
      totalHeight: 0,

      /** 已滚过的高度 */
      topHeight: 0,
    }
  },
  methods: {
    updateTotalHeight () {
      let height = 0
      const length = this.data.length
      for (let i = 0; i < length; i++) {
        height += (this.itemHeightRecord[i] || this.itemHeight)
      }
      this.totalHeight = height
    },

    /** 更新可见列表 */
    updateVisibleList () {
      const scrollTop = this.$el.scrollTop
      let start = 0
      /** 滚过多少高度 */
      let scrolledHeight = 0
      while (scrolledHeight < scrollTop) {
        if (scrolledHeight + (this.itemHeightRecord[start] || this.itemHeight) >= scrollTop) break
        scrolledHeight += this.itemHeightRecord[start] || this.itemHeight
        start++
      }
      const clientHeight = this.$el.clientHeight
      let end = start
      /** 可见列表高度，需超过 clientHeight */
      let visibleHeight = 0
      const first = this.itemHeightRecord[start] || (this.itemHeightRecord[start] = this.itemHeightGetter(start))
      while (visibleHeight - first < clientHeight && end < this.data.length) {
        const currentHeight = this.itemHeightRecord[end] || this.itemHeightGetter(end)
        // 更新记录
        this.$set(this.itemHeightRecord, end, currentHeight)
        visibleHeight += currentHeight
        end++
      }
      /** 赋值可见列表 */
      this.visibleList = this.data.slice(start, end)
      /** 更新已滚过的高度 */
      this.topHeight = scrolledHeight

      this.updateTotalHeight()
    },

    handleScroll () {
      this.updateVisibleList()
    }
  },
  mounted () {
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
