/**
 * 订单相关类型定义
 */

import { Address } from './user'
import { SelectedSpec } from './product'

// 订单状态
export enum OrderStatus {
  UNPAID = 0, // 待支付
  PAID = 1, // 已支付
  DELIVERING = 2, // 配送中
  COMPLETED = 3, // 已完成
  CANCELLED = 4, // 已取消
  REFUNDING = 5, // 退款中
  REFUNDED = 6 // 已退款
}

// 订单商品项
export interface OrderProduct {
  id: string
  productId: string
  name: string
  coverImage: string
  price: number // 单价（分）
  quantity: number
  specs: SelectedSpec[]
  subtotal: number // 小计（分）
}

// 订单信息
export interface Order {
  id: string
  orderNo: string
  status: OrderStatus
  userId: string
  products: OrderProduct[]
  totalAmount: number // 商品总额（分）
  discountAmount: number // 优惠金额（分）
  deliveryFee: number // 配送费（分）
  payAmount: number // 实付金额（分）
  address: Address
  remark: string // 备注
  couponId?: string
  deliveryTime?: string // 期望送达时间
  payTime?: string
  cancelTime?: string
  completeTime?: string
  createTime: string
  updateTime: string
}

// 订单列表项（简化版）
export interface OrderListItem {
  id: string
  orderNo: string
  status: OrderStatus
  products: OrderProduct[]
  payAmount: number
  createTime: string
}

// 创建订单参数
export interface CreateOrderParams {
  products: {
    productId: string
    quantity: number
    specs: SelectedSpec[]
  }[]
  addressId: string
  couponId?: string
  deliveryTime?: string
  remark?: string
}

// 订单统计
export interface OrderStats {
  unpaidCount: number
  deliveringCount: number
  refundingCount: number
}
