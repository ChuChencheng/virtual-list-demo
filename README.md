# virtual-list-demo

虚拟列表 demo

[在线 demo](https://chuchencheng.com/virtual-list-demo/)

## Demo 查看说明

- 切换 tab 以查看普通列表、虚拟列表之间的差异
- 切换 tab 以查看通过 Prop 与调用方法设置数据时内存占用的差异（也就是 Vue 监听大量数据与没有监听的差异）
- 使用了 Prop 传入数据后，再切换为调用方法，貌似有点内存泄露？先观察最后一个 tab ，再观察通过 Prop 传入，效果更好
- 记得全程打开 Chrome 的 Performance monitor ，并配合 Performance 面板的 `Collect garbage`

## 分享记录

1. 虚拟列表概念

虚拟列表要解决的问题：长列表问题（较多数据，无法用分页或分次加载来解决的列表）

概念：在渲染列表时只渲染可见部分的列表

2. 应用场景

长列表问题，比如下拉数据，表格数据等

3. 原理与实现

原理：在初始化与滚动时，根据容器 scrollTop 计算当前可见的列表项并渲染

实现：见代码

4. 优化方案

高度不固定方案：采用传入 Prop 的方式，或在 mounted 之后计算每个列表项的实际高度（参考 vue-virtual-scroller）

5. 树组件实现方案

递归组件：https://cn.vuejs.org/v2/examples/tree-view.html

虚拟列表 -> 引入新的问题（父子层级信息丢失，展开收起节点逻辑变复杂） -> 解决新问题（使用冗余 level 字段，遍历设置每个节点是否可见）

6. 优缺点

优点：缓解渲染卡顿，减少内存占用

缺点：滚动时 CPU 占用高，Firefox 浏览器下滚动时会出现白屏([scroll-linked](https://developer.mozilla.org/zh-CN/docs/Mozilla/Performance/Scroll-linked_effects))

7. 什么时候该用

根据具体业务需求决定，数据不多没必要用，能分页就分页，数据量实在大且无法分页再使用，内存占用与 CPU 占用的权衡，最终目的都是不卡顿。

8. 开源虚拟列表项目

[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)

[react-virtualized](https://github.com/bvaughn/react-virtualized)
