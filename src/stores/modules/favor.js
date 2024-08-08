import { defineStore } from "pinia";
import { getfavor, getHistoryList } from "@/service/modules/favor";

const useFavorStore = defineStore('favor', {
  state: () => ({
    favorlist: {},
    historylist: {},
    index: 0
  }),
  actions: {
    async fetchFavorList() {
      const res = await getfavor()
      // console.log(res.data.data)
      this.favorlist = res.data.data
    },
    async fetchHistoryList() {
      const res = await getHistoryList()
      console.log(res.data)
      this.historylist = res.data.data
    }
  }
})

export default useFavorStore

