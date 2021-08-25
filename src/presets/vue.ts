import { ImportsMap } from '../types'

export const CommonCompositionAPI = [
  // lifecycle
  'onActivated',
  'onBeforeMount',
  'onBeforeUnmount',
  'onBeforeUpdate',
  'onMounted',
  'onUnmounted',
  'onUpdated',

  // reactivity,
  'computed',
  'customRef',
  'isReadonly',
  'isRef',
  'markRaw',
  'reactive',
  'readonly',
  'ref',
  'shallowReactive',
  'shallowReadonly',
  'shallowRef',
  'toRaw',
  'toRef',
  'toRefs',
  'unref',
  'watch',
  'watchEffect',

  // component
  'defineComponent',
  'getCurrentInstance',
  'h',
  'inject',
  'nextTick',
  'provide',
  'useCssModule',
  'createApp',
]

export default <ImportsMap>({
  vue: [
    ...CommonCompositionAPI,

    // vue3 only
    'triggerRef',
    'defineAsyncComponent',
    'onDeactivated',
    'onServerPrefetch',
    'onErrorCaptured',
    'onRenderTracked',
    'onRenderTriggered',
  ],
})
