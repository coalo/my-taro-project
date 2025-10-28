/**
 * 状态码和常量配置
 */

// 响应状态码
export const STATUS_CODE = {
  SUCCESS: 200, // 成功
  UNAUTHORIZED: 401, // 未授权
  FORBIDDEN: 403, // 禁止访问
  NOT_FOUND: 404, // 未找到
  SERVER_ERROR: 500, // 服务器错误
  INVALID_PARAMS: 1001, // 参数错误
  LOGIN_EXPIRED: 1002 // 登录过期
}

// 订单状态文本
export const ORDER_STATUS_TEXT = {
  0: '待支付',
  1: '已支付',
  2: '配送中',
  3: '已完成',
  4: '已取消',
  5: '退款中',
  6: '已退款'
}

// 订单状态颜色
export const ORDER_STATUS_COLOR = {
  0: '#FF6A3C',
  1: '#1677FF',
  2: '#52C41A',
  3: '#8C8C8C',
  4: '#8C8C8C',
  5: '#FAAD14',
  6: '#8C8C8C'
}

// 性别
export const GENDER = {
  UNKNOWN: 0,
  MALE: 1,
  FEMALE: 2
}

export const GENDER_TEXT = {
  0: '未知',
  1: '男',
  2: '女'
}

// 优惠券类型
export const COUPON_TYPE = {
  DISCOUNT_MONEY: 1, // 满减
  DISCOUNT_RATE: 2, // 折扣
  NO_THRESHOLD: 3 // 无门槛
}

export const COUPON_TYPE_TEXT = {
  1: '满减券',
  2: '折扣券',
  3: '通用券'
}

// 优惠券状态
export const COUPON_STATUS = {
  AVAILABLE: 0, // 可用
  USED: 1, // 已使用
  EXPIRED: 2 // 已过期
}

// 地址标签
export const ADDRESS_TAGS = ['家', '公司', '学校', '其他']

// 会员等级
export const MEMBER_LEVELS = [
  { level: 1, name: '普通会员', icon: '🥉' },
  { level: 2, name: '银卡会员', icon: '🥈' },
  { level: 3, name: '金卡会员', icon: '🥇' },
  { level: 4, name: '钻石会员', icon: '💎' }
]

// 商品标签颜色
export const TAG_COLORS = {
  '新品': '#FF6A3C',
  '推荐': '#1677FF',
  '热销': '#F5222D',
  '限时': '#FAAD14'
}

// 支付方式文本
export const PAYMENT_METHOD_TEXT = {
  1: '微信支付',
  2: '支付宝',
  3: '余额支付'
}

// 配送时间选项
export const DELIVERY_TIME_OPTIONS = [
  '尽快送达',
  '今天 12:00-13:00',
  '今天 18:00-19:00',
  '明天 09:00-10:00',
  '明天 14:00-15:00'
]
