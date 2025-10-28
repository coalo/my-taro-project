/**
 * 用户相关类型定义
 */

// 用户信息
export interface UserInfo {
  id: string
  phone: string
  nickname: string
  avatar: string
  points: number // 积分
  level: number // 会员等级
  gender?: number // 0-未知 1-男 2-女
  birthday?: string
  createTime: string
}

// 登录响应
export interface LoginResponse {
  token: string
  userInfo: UserInfo
}

// 收货地址
export interface Address {
  id: string
  name: string // 收货人
  phone: string
  province: string
  city: string
  district: string
  detail: string
  isDefault: boolean
  tag?: string // 标签：家/公司/学校
}

// 优惠券
export interface Coupon {
  id: string
  name: string
  type: number // 1-满减 2-折扣 3-无门槛
  amount: number // 优惠金额（分）
  minAmount: number // 最低消费金额（分）
  discount?: number // 折扣（8.5表示8.5折）
  startTime: string
  endTime: string
  status: number // 0-未使用 1-已使用 2-已过期
  scope: string // 适用范围
}

// 积分记录
export interface PointRecord {
  id: string
  type: number // 1-获得 2-消耗
  points: number
  reason: string
  createTime: string
}
