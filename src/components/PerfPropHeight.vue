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
          height: `${item.height}px`,
        }"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
// 通过 Prop 传入列表项高度的虚拟列表实现
import BinaryIndexedTree from '@/util/BinaryIndexedTree'
export default {
  name: 'PerfPropHeight',
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

      /** 容器总高度 */
      totalHeight: 0,

      /** 已滚过的高度 */
      topHeight: 0,
    }
  },
  methods: {
    updateTotalHeight () {
      if (this.binaryIndexedTree) {
        this.totalHeight = this.binaryIndexedTree.prefixSum()
      } else {
        this.totalHeight = 0
      }

    },
    initBIT () {
      if (this.data.length > 0) {
        this.binaryIndexedTree = new BinaryIndexedTree(Array(this.data.length).fill(this.itemHeight))
      } else {
        this.binaryIndexedTree = null
      }
    },
    updateBIT (i, val) {
      if (this.binaryIndexedTree) {
        this.binaryIndexedTree.update(i, val)
      }
    },

    findStartItemIndexAndTop (scrollTop) {
      let start = 0
      /** 滚过多少高度 */
      let scrolledHeight = 0
      if (this.binaryIndexedTree) {
        start = Math.max(this.binaryIndexedTree.findGe(scrollTop) - 1, 0)
        scrolledHeight = this.binaryIndexedTree.prefixSum(start)
      }
      return {
        start,
        scrolledHeight
      }
    },
    createVisibleList (start, end) {
      let list = []
      for (let i = start; i < end; i++) {
        list.push({
          ...this.data[i],
          height: this.itemHeightRecord[i] || this.itemHeight
        })
      }
      return list
    },

    getActualHeight(index){
      let height = this.itemHeightRecord[index]
      if (!height) {
        height = this.itemHeightGetter(index)
        this.updateBIT(index + 1, height - this.itemHeight)
        this.itemHeightRecord[index] = height
      }
      return height
    },

    /** 更新可见列表 */
    updateVisibleList (scrollTop = 0) {
      console.time("updateVisibleList")
      let { start, scrolledHeight } = this.findStartItemIndexAndTop(scrollTop)
      const clientHeight = this.$el.clientHeight
      let end = start
      /** 可见列表高度，需超过 clientHeight */
      let visibleHeight = - this.getActualHeight(start)
      while (visibleHeight < clientHeight && end < this.data.length) {
        visibleHeight += this.getActualHeight(end++)
      }

      /** 赋值可见列表 */
      this.visibleList = this.createVisibleList(start, end)
      /** 更新已滚过的高度 */
      this.topHeight = scrolledHeight
      this.updateTotalHeight()
      console.timeEnd("updateVisibleList")
    },

    handleScroll () {
      this.updateVisibleList(this.$el.scrollTop)
    }
  },
  created () {
    this.itemHeightRecord = Object.create(null)
    if (this.data.length === 0) {
      return
    }
    this.totalHeight = this.data.length * this.itemHeight
    this.initBIT()
  },
  mounted () {
    // 因为要获取 scrollTop 跟 clientHeight ，所以要在 mounted 更新可见数据
    this.updateVisibleList()
  },
  watch: {
    data () {
      this.itemHeightRecord = Object.create(null)
      this.totalHeight = this.data.length * this.itemHeight
      this.initBIT()
      this.updateVisibleList()
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
