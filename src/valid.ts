import type { DateInput } from './type'
import { calcAge } from './calc'
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

/**
 * 校验邮箱
 */
export function isEmail(str: string): boolean {
  return REGEXP_EMAIL.test(str)
}

/**
 * 校验中国大陆手机号
 */
export function isMobile(str: string): boolean {
  return REGEXP_MOBILE.test(str)
}

/**
 * 校验URL
 */
export function isUrl(str: string): boolean {
  return REGEXP_URL.test(str)
}

/**
 * 校验中国身份证号
 */
export function isIdCard(str: string): boolean {
  return REGEXP_IDCARD.test(str)
}

/**
 * 校验IPv4地址
 */
export function isIP(str: string): boolean {
  return REGEXP_IP.test(str)
}

/**
 * 校验中国邮政编码
 */
export function isPostalCode(str: string): boolean {
  return REGEXP_POSTAL_CODE.test(str)
}

/**
 * 校验是否为中文
 */
export function isChinese(str: string): boolean {
  return REGEXP_CHINESE.test(str)
}

/**
 * 校验密码（6-20位，字母、数字及常用特殊字符）
 */
export function isPassword(str: string): boolean {
  return REGEXP_PASSWORD.test(str)
}

/**
 * 判断出生日期在指定日期时是否大于指定年龄
 * @param age 年龄阈值
 * @param birthDate 出生日期
 * @param atDate 判断的参考日期
 * @returns 是否大于指定年龄
 */
export function isOlderThan(age: number, birthDate: DateInput, atDate: DateInput): boolean {
  return calcAge(birthDate, atDate) > age
}

/**
 * 判断出生日期在指定日期时是否小于指定年龄
 * @param age 年龄阈值
 * @param birthDate 出生日期
 * @param atDate 判断的参考日期
 * @returns 是否小于指定年龄
 */
export function isYoungerThan(age: number, birthDate: DateInput, atDate: DateInput): boolean {
  return calcAge(birthDate, atDate) < age
}
