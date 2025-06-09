/**
 * 匹配邮箱地址
 */
export const REGEXP_EMAIL = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

/**
 * 匹配中国大陆手机号
 */
export const REGEXP_MOBILE = /^1[3-9]\d{9}$/

/**
 * 匹配URL地址（支持http/https）
 */
export const REGEXP_URL = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-./?%&=]*)?$/i

/**
 * 匹配中国身份证号（15位或18位，18位最后一位可为X/x）
 */
export const REGEXP_IDCARD = /^\d{15}(\d{2}[0-9x])?$/i

/**
 * 匹配IPv4地址
 */
export const REGEXP_IP = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/

/**
 * 匹配中国邮政编码（6位数字）
 */
export const REGEXP_POSTAL_CODE = /^\d{6}$/

/**
 * 匹配中文字符
 */
export const REGEXP_CHINESE = /^[\u4E00-\u9FA5]+$/

/**
 * 匹配6-20位密码（字母、数字及常用特殊字符）
 */
export const REGEXP_PASSWORD = /^[\w!@#$%^&*()+\-=[\]{};':"\\|,.<>/?]{6,20}$/
