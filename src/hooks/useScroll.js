import { throttle } from "underscore";
import { onMounted, ref, onUnmounted } from "vue";

export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHight = ref(0)
  const scrollTop = ref(0)

  // 防抖节流
  const scrollListener = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollHight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    if(clientHeight.value + scrollTop.value+1 >= scrollHight.value) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    console.log('onMountes')
    window.addEventListener('scroll', scrollListener)
  })
  onUnmounted(() => {
    console.log('onUnmounted')
    window.removeEventListener("scroll", scrollListener)  
  })

  return {isReachBottom, clientHeight, scrollHight, scrollTop}
}