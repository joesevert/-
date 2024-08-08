export const getAssetURL = (image) => {
  // 返回完整的url 如下
  // http://localhost:5174/src/assets/img/tabbar/tab_home_active.png
  // console.log(import.meta.url)
  // const path = `../assets/img/${image}`
  // return new URL(path,import.meta.url).href
  // const path = ``
  return new URL(`../assets/img/${image}`,import.meta.url).href
  // console.log(`@/assets/img/${image}`)
  // return `@/assets/img/${image}`
}