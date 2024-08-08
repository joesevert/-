import { defineStore } from "pinia";
import { getHotSuggestCity, getCategoriesData, getHouseListData } from "@/service/modules/home";

const useHomeStore = defineStore('home',{
  state: () => ({
    hotSuggestCity:[],
    Categories:[],
    currentPage: 0,
    houselist: []
  }),
  actions: {
    async fetchHotSuggestCity() {
      const res = await getHotSuggestCity()
      // console.log(res.data)
      this.hotSuggestCity = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategoriesData()
      // console.log(res.data)
      this.Categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseListData(++this.currentPage)
      this.houselist.push(...res.data)
    }
  }

})

export default useHomeStore