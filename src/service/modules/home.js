import myRequest from '../request'

export function getHotSuggestCity() {
  return myRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getCategoriesData() {
  return myRequest.get({
    url: '/home/categories'
  })
}

export function getHouseListData(currentPage) {
  return myRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}