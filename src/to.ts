/**
 * 将输入转换为 Date 对象
 */
export function toDate(date: Date | string | number): Date {
  return date instanceof Date ? date : new Date(date)
}
