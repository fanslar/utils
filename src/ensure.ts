import type { DateInput } from './type'
import { toDate, toTimestamp } from './to'

/**
 * 对列表进行排序，返回新数组，不改变原数组
 * @template T
 * @param {T[]} list - 需要排序的数组
 * @param {(a: T, b: T) => number} [compareFn] - 比较函数，类似 Array.prototype.sort 的 compareFn
 * @returns {T[]} 排序后的新数组
 * @example
 * ensureOrder([3, 1, 2], (a, b) => a - b) // [1, 2, 3]
 */
export function ensureOrder<T>(list: T[], compareFn?: (a: T, b: T) => number): T[] {
  return [...list].sort(compareFn)
}

/**
 * 对日期输入数组进行排序，返回 Date 类型的新数组
 * @param {DateInput[]} list - 需要排序的日期输入数组
 * @param {(a: Date, b: Date) => number} [compareFn] - 比较函数，参数为 Date 类型
 * @returns {Date[]} 排序后的新数组
 * @example
 * ensureDateOrder(['2024-01-01', '2023-12-31'], (a, b) => a.getTime() - b.getTime())
 */
export function ensureDateOrder(
  list: DateInput[],
  compareFn?: (a: Date, b: Date) => number,
): Date[] {
  return ensureOrder(list.map(toDate), compareFn)
}

/**
 * 对日期输入数组按时间戳进行排序，返回 number 类型的新数组
 * @param {DateInput[]} list - 需要排序的日期输入数组
 * @param {(a: number, b: number) => number} [compareFn] - 比较函数，参数为时间戳（number）
 * @returns {number[]} 排序后的新数组
 * @example
 * ensureTimestampOrder(['2024-01-01', '2023-12-31'], (a, b) => a - b)
 */
export function ensureTimestampOrder(
  list: DateInput[],
  compareFn?: (a: number, b: number) => number,
): number[] {
  return ensureOrder(list.map(toTimestamp), compareFn)
}
