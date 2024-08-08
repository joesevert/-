import { defineStore } from "pinia";

const startDay = new Date()
const endDay = new Date()
endDay.setDate(startDay.getDate() + 1)
const useMainStore = defineStore('main', {
  state: () =>({
    startDay: startDay,
    endDay: endDay
  }),

})

export default useMainStore