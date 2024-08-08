import myRequest from '../request'

export function getOrderList(state) {
  return myRequest.get({
    url: '/order/list',
    params: {
      type: state
    }
  })
}