/**
 * 公共类型定义
 */

// API 响应格式
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 分页参数
export interface PageParams {
  page: number
  pageSize: number
}

// 分页响应
export interface PageResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// 轮播图
export interface Banner {
  id: string
  image: string
  title: string
  link: string
  type: number // 1-商品 2-活动 3-外链
  targetId?: string
  sort: number
}

// 平台类型
export type PlatformType = 'weapp' | 'h5' | 'rn' | 'alipay' | 'swan' | 'tt' | 'qq' | 'jd'

// 支付方式
export enum PaymentMethod {
  WECHAT = 1, // 微信支付
  ALIPAY = 2, // 支付宝
  BALANCE = 3 // 余额
}

// 支付参数
export interface PaymentParams {
  orderId: string
  method: PaymentMethod
  amount: number
}

// 文件上传响应
export interface UploadResponse {
  url: string
  path: string
  size: number
}

// 坐标位置
export interface Location {
  latitude: number
  longitude: number
  address: string
  city: string
  province: string
}
