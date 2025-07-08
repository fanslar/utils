import type { DateInput } from './type'
import { isDate, isString } from '@antfu/utils'

/**
 * 将输入转换为 Date 对象
 * @param input 日期输入，可以是 Date、字符串或数字
 * @returns Date 对象
 */
export function toDate(input: DateInput): Date {
  if (input === undefined)
    return new Date()
  else if (isDate(input))
    return input
  else if (isString(input))
    return new Date(input.replace(/-/g, '/'))
  else
    return new Date(input)
}

/**
 * 将输入转换为时间戳
 * @param input 日期输入，可以是 Date、字符串或数字
 * @returns 时间戳（毫秒）
 */
export function toTimestamp(input: DateInput): number {
  return toDate(input).getTime()
}
