import type { DateInput } from './type'
/**
 * 将输入转换为 Date 对象
 */
export function toDate(input?: DateInput): Date {
  if (input === undefined)
    return new Date()
  if (input instanceof Date)
    return new Date(input)
  return new Date(input)
}
