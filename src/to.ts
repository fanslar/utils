import type { DateInput } from './type'
import { isDate, isString } from '@antfu/utils'

/**
 * 将输入转换为 Date 对象
 * @param {DateInput} input - 日期输入，可以是 Date、字符串或数字
 * @returns {Date} Date 对象。若输入为 undefined，则返回当前时间；若为 null，则返回无效日期对象。
 */
export function toDate(input: DateInput): Date {
  if (input === undefined)
    return new Date()
  if (input === null)
    return new Date(Number.NaN)
  if (isDate(input))
    return input as Date
  if (isString(input)) {
    return new Date(input.replace(/-/g, '/'))
  }
  return new Date(input)
}

/**
 * 将输入转换为时间戳
 * @param {DateInput} input - 日期输入，可以是 Date、字符串或数字
 * @returns {number} 时间戳（毫秒）。若输入无效，返回 NaN。
 */
export function toTimestamp(input: DateInput): number {
  return toDate(input).getTime()
}
