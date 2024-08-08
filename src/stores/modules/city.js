import { defineStore } from "pinia";
import { getCityAll } from "@/service/modules/city";

const useCityStore = defineStore('city',{
  state: () => ({
    allCity: {},
    currentCity: {cityName: '广州'}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      // console.log(res)
      this.allCity = res.data
    }
  }

})

export default useCityStore