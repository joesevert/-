import { defineStore } from "pinia";
import { getOrderList } from "@/service/modules/order";

export const useOrderList = defineStore('order', {
  state: () => ({
    orderlist: { },
    state: 'all'
  }),
  actions: {
    async fetchGetOrderList(state) {
      const res = await getOrderList(state)
      this.orderlist = res.data
      console.log(res.data)
    }
  }
})