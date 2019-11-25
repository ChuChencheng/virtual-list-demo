import Vue from 'vue'

/**
 * App2 为使用 this.$refs.xxx.setData 来设置数据
 * 可与通过 Prop 传入数据对比内存占用
 */
import App from './App.vue'
// import App from './App2.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
