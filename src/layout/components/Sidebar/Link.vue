<template>
  <component :is="type" v-bind="linkProps(to)"><!-- component :is='type'  动态组件，其中组件标签由type决定  -->
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: { // to 的值是当前路由路径 如 /book/create
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() { // 判断path是否为一个http请求
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        // 如果to是一个http请求，则为type返回一个a标签
        return 'a'
      }
      // 如果to不是http请求，则为type返回一个router-link
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
