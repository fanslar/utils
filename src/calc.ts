import type { DateInput } from './type'
import { ensureDateOrder } from './ensure'
import { toDate } from './to'

/**
 * 计算某一天的年龄
 * @param birthDate 出生日期，Date() 入参
 * @param atDate 相对日期 Date() 入参
 * @returns 年龄（周岁）
 */
export function calcAge(birthDate: DateInput, atDate: DateInput): number {
  return calcYearsDiff(birthDate, atDate)
}

/**
 * 计算某天是当年的第几天
 * @param date 日期，Date() 入参
 * @returns 第几天（1~366）
 */
export function calcDayOfYear(date: DateInput): number {
  const d = toDate(date)
  const startOfYear = new Date(d.getFullYear(), 0, 1)
  const diff = d.getTime() - startOfYear.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
}

/**
 * 计算某天是当年的第几周
 * @param date 日期，Date() 入参
 * @param options.firstDayOfWeek 一周的第一天（0=周日，1=周一，...，6=周六），默认1（周一）
 * @param options.firstWeekContainsDay 第1周必须包含的最小天数（如ISO 8601为4，表示第1周必须包含1月4日），默认4
 * @returns 第几周（1~53）
 */
export function calcWeekOfYear(
  date: DateInput,
  options?: { firstDayOfWeek?: number, firstWeekContainsDay?: number },
): number {
  const d = toDate(date)
  const firstDayOfWeek = options?.firstDayOfWeek ?? 1 // 默认周一
  const firstWeekContainsDay = options?.firstWeekContainsDay ?? 4 // 默认ISO 8601

  // 找到本周的“参考日”（如ISO 8601为周四，firstWeekContainsDay=4）
  const refDay = firstWeekContainsDay - 1
  const target = new Date(d.valueOf())
  // 计算本周第几天（以firstDayOfWeek为一周第一天）
  const dayNr = (d.getDay() - firstDayOfWeek + 7) % 7
  target.setDate(target.getDate() - dayNr + refDay)

  // 找到本年第一个“参考日”
  const firstRefDay = new Date(target.getFullYear(), 0, firstWeekContainsDay)
  const diff = target.getTime() - firstRefDay.getTime()
  return 1 + Math.round(diff / (1000 * 60 * 60 * 24 * 7))
}

/**
 * 计算某天是当年的第几月
 * @param date 日期，Date() 入参
 * @returns 第几月（0~11）
 */
export function calcMonthOfYear(date: DateInput): number {
  const d = toDate(date)
  return d.getMonth()
}

/**
 * 计算某天是当月的第几天
 * @param date 日期，Date() 入参
 * @returns 第几天（1~31）
 */
export function calcDayOfMonth(date: DateInput): number {
  const d = toDate(date)
  return d.getDate()
}

/**
 * 计算某天是当月的第几周
 * @param date 日期，Date() 入参
 * @param firstDayOfWeek 一周的第一天（0=周日，1=周一，...，6=周六），默认1（周一）
 * @returns 第几周（1~6）
 */
export function calcWeekOfMonth(date: DateInput, firstDayOfWeek: number = 1): number {
  const d = toDate(date)
  const firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1)
  const firstDayOfWeekOffset = (firstDayOfMonth.getDay() - firstDayOfWeek + 7) % 7

  // 计算本月第一天是星期几
  const firstWeekStart = new Date(firstDayOfMonth)
  firstWeekStart.setDate(firstWeekStart.getDate() - firstDayOfWeekOffset)

  // 计算当前日期是本月的第几周
  const weekNumber = Math.floor((d.getDate() + firstDayOfWeekOffset - 1) / 7) + 1

  return weekNumber
}

/**
 * 计算某年某月的第一天是星期几
 * @param year 年份（如2024）
 * @param month 月份（1-12）
 * @returns 星期几（0=周日，1=周一，...，6=周六）
 */
export function calcFirstDayOfMonth(year: number, month: number): number {
  const firstDay = new Date(year, month - 1, 1)
  return firstDay.getDay()
}

/**
 * 计算某年某月的最后一天是星期几
 * @param year 年份（如2024）
 * @param month 月份（1-12）
 * @returns 星期几（0=周日，1=周一，...，6=周六）
 */
export function calcLastDayOfMonth(year: number, month: number): number {
  const lastDay = new Date(year, month, 0)
  return lastDay.getDay()
}

/**
 * 计算某年某月的天数
 * @param year 年份（如2024）
 * @param month 月份（1-12）
 * @returns 该月的天数
 */
export function calcDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

/**
 * 计算两个日期之间的毫秒差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 毫秒差
 */
export function calcMillisecondsDiff(startDate: DateInput, endDate: DateInput): number {
  const [start, end] = ensureDateOrder(startDate, endDate)
  return Math.abs(end.getTime() - start.getTime())
}

/**
 * 计算两个日期之间的秒数差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 秒数差
 */
export function calcSecondsDiff(startDate: DateInput, endDate: DateInput): number {
  return Math.floor(calcMillisecondsDiff(startDate, endDate) / 1000)
}

/**
 * 计算两个日期之间的分钟差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 分钟差
 */
export function calcMinutesDiff(startDate: DateInput, endDate: DateInput): number {
  return Math.floor(calcSecondsDiff(startDate, endDate) / 60)
}

/**
 * 计算两个日期之间的小时差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 小时差
 */
export function calcHoursDiff(startDate: DateInput, endDate: DateInput): number {
  return Math.floor(calcMinutesDiff(startDate, endDate) / 60)
}

/**
 * 计算两个日期之间的天数差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 天数差
 */
export function calcDaysDiff(startDate: DateInput, endDate: DateInput): number {
  return Math.floor(calcHoursDiff(startDate, endDate) / 24)
}

/**
 * 计算两个日期之间的月数差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 月数差
 */
export function calcMonthsDiff(startDate: DateInput, endDate: DateInput): number {
  const [start, end] = ensureDateOrder(startDate, endDate)
  let monthsDiff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (end.getDate() < start.getDate()) {
    monthsDiff--
  }
  return monthsDiff
}

/**
 * 计算两个日期之间的年数差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 年数差
 */
export function calcYearsDiff(startDate: DateInput, endDate: DateInput): number {
  const [start, end] = ensureDateOrder(startDate, endDate)
  let yearsDiff = end.getFullYear() - start.getFullYear()
  if (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
    yearsDiff--
  }
  return yearsDiff
}

/**
 * 计算两个日期之间的时间差
 * @param startDate 起始日期，Date() 入参
 * @param endDate 结束日期，Date() 入参
 * @returns 时间差对象，包含年、月、日、小时、分钟、秒
 */
export function calcTimeDiff(startDate: DateInput, endDate: DateInput): {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
} {
  const [start, end] = ensureDateOrder(startDate, endDate)

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()
  let hours = end.getHours() - start.getHours()
  let minutes = end.getMinutes() - start.getMinutes()
  let seconds = end.getSeconds() - start.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes--
  }
  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }
  if (days < 0) {
    months--
    const prevMonthDays = new Date(end.getFullYear(), end.getMonth(), 0).getDate()
    days += prevMonthDays
  }
  if (months < 0) {
    months += 12
    years--
  }

  return { years, months, days, hours, minutes, seconds }
}
