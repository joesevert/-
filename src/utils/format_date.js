import formatDate from 'dayjs'

export function formatMonthDay(date, formatStr='MM月DD日') {
  return formatDate(date).format(formatStr)
}

export function formatWeekDay(date, formatStr='ddd') {
  let week = formatDate(date).format(formatStr)
  switch(week) {
    case 'Mon' :
      return '周一';
    case 'Tue' :
      return '周二';
    case 'Wed':
      return '周三';
    case 'Thu':
      return '周四';
    case 'Fri':
      return '周五';
    case 'Sat':
      return '周六';
    case 'Sun':
      return '周日';
      break
  }
  
}