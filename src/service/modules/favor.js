import myRequest from '../request'

export function getfavor(){
  return myRequest.get({
    url: 'favor/list'
  })
}

export function getHistoryList() {
  return myRequest.get({
    url:'favor/history'
  })
}