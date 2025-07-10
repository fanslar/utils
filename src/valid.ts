import type { DateInput } from './type'
import { calcAge } from './calc'
import { ensureOrder } from './ensure'
import {
  REGEXP_CHINESE,
  REGEXP_EMAIL,
  REGEXP_IDCARD,
  REGEXP_IP,
  REGEXP_MOBILE,
  REGEXP_PASSWORD,
  REGEXP_POSTAL_CODE,
  REGEXP_URL,
} from './regexp'
import { toTimestamp } from './to'

/**
 * 校验邮箱
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法邮箱
 */
export function isEmail(str: string): boolean {
  return REGEXP_EMAIL.test(str)
}

/**
 * 校验中国大陆手机号
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法手机号
 */
export function isMobile(str: string): boolean {
  return REGEXP_MOBILE.test(str)
}

/**
 * 校验URL
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法 URL
 */
export function isUrl(str: string): boolean {
  return REGEXP_URL.test(str)
}

/**
 * 校验中国身份证号
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法身份证号
 */
export function isIdCard(str: string): boolean {
  return REGEXP_IDCARD.test(str)
}

/**
 * 校验IPv4地址
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法 IPv4 地址
 */
export function isIP(str: string): boolean {
  return REGEXP_IP.test(str)
}

/**
 * 校验中国邮政编码
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法邮政编码
 */
export function isPostalCode(str: string): boolean {
  return REGEXP_POSTAL_CODE.test(str)
}

/**
 * 校验是否为中文
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为中文
 */
export function isChinese(str: string): boolean {
  return REGEXP_CHINESE.test(str)
}

/**
 * 校验密码（6-20位，字母、数字及常用特殊字符）
 * @param {string} str - 待校验字符串
 * @returns {boolean} 是否为合法密码
 */
export function isPassword(str: string): boolean {
  return REGEXP_PASSWORD.test(str)
}

/**
 * 判断出生日期在指定日期时是否大于指定年龄
 * @param {number} age - 年龄阈值
 * @param {DateInput} birthDate - 出生日期
 * @param {DateInput} atDate - 判断的参考日期
 * @returns {boolean} 是否大于指定年龄
 */
export function isOlderThan(
  age: number,
  birthDate: DateInput,
  atDate: DateInput,
): boolean {
  return calcAge(birthDate, atDate) > age
}

/**
 * 判断出生日期在指定日期时是否小于指定年龄
 * @param {number} age - 年龄阈值
 * @param {DateInput} birthDate - 出生日期
 * @param {DateInput} atDate - 判断的参考日期
 * @returns {boolean} 是否小于指定年龄
 */
export function isYoungerThan(
  age: number,
  birthDate: DateInput,
  atDate: DateInput,
): boolean {
  return calcAge(birthDate, atDate) < age
}

/**
 * 判断一个数值是否在指定范围内
 * @param {number} value - 要判断的数值
 * @param {[number, number]} range - 数值范围，必须为长度为2的元组
 * @returns {boolean} 是否在范围内
 * @throws {Error} 当 range 长度不为2时抛出
 */
export function isInRange(value: number, range: [number, number]): boolean {
  if (range.length !== 2)
    throw new Error('range 必须为长度为2的元组')
  const [min, max] = ensureOrder(range)
  return value >= min && value <= max
}

/**
 * isInRange 别名，判断一个数值是否在指定范围内
 */
export const isBetween = isInRange

/**
 * 判断时间是否在指定时间范围内
 * @param {DateInput} time - 要判断的时间
 * @param {[DateInput, DateInput]} range - 时间范围，必须为长度为2的元组
 * @returns {boolean} 是否在范围内
 * @throws {Error} 当 range 长度不为2时抛出
 */
export function isTimeInRange(
  time: DateInput,
  range: [DateInput, DateInput],
): boolean {
  if (range.length !== 2)
    throw new Error('range 必须为长度为2的元组')
  // 保证类型安全，明确转换为元组
  const tsRange: [number, number] = [
    toTimestamp(range[0]),
    toTimestamp(range[1]),
  ]
  return isInRange(toTimestamp(time), tsRange)
}

/**
 * isTimeInRange 别名，判断日期是否在指定范围内
 */
export const isDateInRange = isTimeInRange
export const isDateTimeInRange = isTimeInRange
export const isTimestampInRange = isTimeInRange
export const isTimeBetween = isTimeInRange
export const isDateBetween = isTimeInRange
export const isDateTimeBetween = isTimeInRange
export const isTimestampBetween = isTimeInRange
