import type { DateInput } from './type'
import { toDate, toTimestamp } from './to'

/**
 * 确保可以比较的顺序
 * @param start 开始值
 * @param end 结束值
 * @returns 返回一个包含开始和结束值的数组，确保开始值小于等于结束值
 */
export function ensureOrder<T>(start: T, end: T): [T, T] {
  return start <= end ? [start, end] : [end, start]
}

/**
 * 确保日期范围的顺序
 * @param start 开始日期
 * @param end 结束日期
 * @returns 返回一个包含开始和结束日期的数组，确保开始日期小于等于结束日期
 */
export function ensureDateOrder(start: DateInput, end: DateInput): [Date, Date] {
  return ensureOrder(toDate(start), toDate(end))
}

/**
 * 确保时间戳范围的顺序
 * @param start 开始时间戳
 * @param end 结束时间戳
 * @returns 返回一个包含开始和结束时间戳的数组，确保开始时间戳小于等于结束时间戳
 */
export function ensureTimestampOrder(start: DateInput, end: DateInput): [number, number] {
  return ensureOrder(toTimestamp(start), toTimestamp(end))
}
