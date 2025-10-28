/**
 * 商品相关类型定义
 */

// 商品分类
export interface Category {
  id: string
  name: string
  icon: string
  sort: number
  parentId?: string
}

// 商品规格
export interface ProductSpec {
  id: string
  name: string // 规格名称：温度/糖度/规格
  options: SpecOption[]
}

export interface SpecOption {
  id: string
  name: string // 热/冷/温、标准糖/少糖/无糖、大杯/中杯
  price: number // 额外价格（分）
  stock: number
}

// 商品信息
export interface Product {
  id: string
  name: string
  subtitle: string
  coverImage: string
  images: string[]
  categoryId: string
  categoryName: string
  price: number // 基础价格（分）
  originalPrice: number // 原价（分）
  sales: number // 销量
  stock: number
  specs: ProductSpec[] // 规格选项
  description: string
  tags: string[] // 标签：新品/推荐/热销
  status: number // 1-上架 0-下架
}

// 商品详情
export type ProductDetail = Product

// 购物车商品项
export interface CartItem {
  id: string
  productId: string
  name: string
  coverImage: string
  price: number // 单价（分）
  quantity: number
  specs: SelectedSpec[] // 已选规格
  checked: boolean
}

// 已选规格
export interface SelectedSpec {
  specId: string
  specName: string
  optionId: string
  optionName: string
  price: number
}
