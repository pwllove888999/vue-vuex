
// 这里定义 store 中的 mutations 属性的类型名

export const INCREMENT = 'INCREMENT' // state.count自增+1的方法
export const INCREMENT_STRING_COUNT = 'INCREMENT_STRING_COUNT' // state.stringCount自增+2的方法
export const INCREMENTASYNC_STRING_COUNT = 'INCREMENTASYNC_STRING_COUNT' // state.stringCount自增+2的方法,异步执行
export const INCREMENTASYNC_DOUBLE_COUNT = 'INCREMENTASYNC_DOUBLE_COUNT' // 在stringCount状态变化之后去改变Count的状态，实现自增,异步执行
