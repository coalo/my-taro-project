/**
 * 格式化工具函数
 */

/**
 * 格式化金额（分转元，保留两位小数）
 */
export const formatMoney = (amount: number): string => {
  return (amount / 100).toFixed(2)
}

/**
 * 格式化金额（元，添加千分位）
 */
export const formatMoneyWithComma = (amount: number): string => {
  const yuan = formatMoney(amount)
  const parts = yuan.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * 格式化日期时间
 */
export const formatDateTime = (date: string | Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hour = String(d.getHours()).padStart(2, '0')
  const minute = String(d.getMinutes()).padStart(2, '0')
  const second = String(d.getSeconds()).padStart(2, '0')
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second)
}

/**
 * 格式化日期（YYYY-MM-DD）
 */
export const formatDate = (date: string | Date): string => {
  return formatDateTime(date, 'YYYY-MM-DD')
}

/**
 * 格式化时间（HH:mm:ss）
 */
export const formatTime = (date: string | Date): string => {
  return formatDateTime(date, 'HH:mm:ss')
}

/**
 * 格式化相对时间
 */
export const formatRelativeTime = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 12 * month
  
  if (diff < minute) return '刚刚'
  if (diff < hour) return `${Math.floor(diff / minute)}分钟前`
  if (diff < day) return `${Math.floor(diff / hour)}小时前`
  if (diff < day * 2) return '昨天'
  if (diff < day * 3) return '前天'
  if (diff < month) return `${Math.floor(diff / day)}天前`
  if (diff < year) return `${Math.floor(diff / month)}个月前`
  return `${Math.floor(diff / year)}年前`
}

/**
 * 格式化手机号（隐藏中间4位）
 */
export const formatPhone = (phone: string): string => {
  if (!phone || phone.length !== 11) return phone
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 格式化地址
 */
export const formatAddress = (
  province: string,
  city: string,
  district: string,
  detail: string
): string => {
  return `${province}${city}${district}${detail}`
}

/**
 * 格式化数字（添加千分位）
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化文件大小
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * 格式化百分比
 */
export const formatPercent = (value: number, total: number, decimals: number = 2): string => {
  if (total === 0) return '0%'
  return ((value / total) * 100).toFixed(decimals) + '%'
}

/**
 * 截断文本
 */
export const truncate = (text: string, length: number, suffix: string = '...'): string => {
  if (text.length <= length) return text
  return text.substring(0, length) + suffix
}

/**
 * 格式化订单号（添加空格）
 */
export const formatOrderNo = (orderNo: string): string => {
  return orderNo.replace(/(.{4})/g, '$1 ').trim()
}

/**
 * 脱敏身份证号
 */
export const formatIdCard = (idCard: string): string => {
  if (!idCard || idCard.length < 18) return idCard
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2')
}

/**
 * 格式化银行卡号
 */
export const formatBankCard = (cardNo: string): string => {
  if (!cardNo) return cardNo
  // 每4位添加一个空格
  return cardNo.replace(/(.{4})/g, '$1 ').trim()
}

/**
 * 隐藏银行卡号中间部分
 */
export const hideBankCard = (cardNo: string): string => {
  if (!cardNo || cardNo.length < 16) return cardNo
  return cardNo.replace(/(\d{4})\d+(\d{4})/, '$1 **** **** $2')
}
