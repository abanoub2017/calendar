import globalAxios from '@/services/global-axios'
class calendarManageServices {
  ////////////////////////////////////
  // Get All Data In Calendar
  static getAllCalendar() {
    return globalAxios.get('calendar')
  }

}
export default calendarManageServices
