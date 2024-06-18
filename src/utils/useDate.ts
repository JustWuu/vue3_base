import moment from 'moment-timezone'

class ConvertDate {
  constructor() {}
  /**
   * 回傳毫秒
   */
  time(): number {
    const timeZone = import.meta.env.VITE_TIME_ZONE!
    const date = moment.tz(new Date(), timeZone).valueOf()
    return date
  }
  /**
   * 回傳YYYY-MM-DD HH:mm:ss
   */
  date(): string {
    const timeZone = import.meta.env.VITE_TIME_ZONE!
    const date = moment.tz(new Date(), timeZone).format('YYYY-MM-DD HH:mm:ss')
    return date
  }
  /**
   * 把傳入的毫秒轉成年月日時
   */
  convertDate(date: any) {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
    const hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    const mm = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
    return year + '-' + month + '-' + day + ' ' + hh + ': ' + mm + ': ' + ss
  }
}

export { ConvertDate as default }
