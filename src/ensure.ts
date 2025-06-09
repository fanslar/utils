import { toDate } from './to'

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
 * @param start 开始日期，可以为 Date 类型或可被 Date 构造的字符串/数字
 * @param end 结束日期，可以为 Date 类型或可被 Date 构造的字符串/数字
 * @returns 返回一个包含开始和结束日期的数组，确保开始日期小于等于结束日期
 */
export function ensureDateOrder(start: Date | string | number, end: Date | string | number): [Date, Date] {
  const d1 = toDate(start)
  const d2 = toDate(end)
  return ensureOrder(d1, d2)
}
