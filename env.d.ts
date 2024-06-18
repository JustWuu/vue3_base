/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module 'lodash-es'

// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent>
//   export default component
// }
// https://juejin.cn/post/6985363584804978719
