// global.ts
export const vueRouters = function () {
  let routerList = [];
  const modules = import.meta.glob('../views/*/*.vue')
  console.log(modules)
  Object.keys(modules).forEach(key => {
    const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
    console.log(nameMatch)
    if(!nameMatch) return
    const indexMatch = nameMatch[1].match(/\/(.*)/i)
    console.log(indexMatch)
    let name = indexMatch ? indexMatch[1] : nameMatch[1];
    // console.log(name)
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    routerList.push({
      path: `/${name}`,
      name: `${name}`,
      component: modules[key]
    });
  })
  console.log(routerList)
  return routerList

};





