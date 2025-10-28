/**
 * API 地址配置
 */

// API 基础地址
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.naixue.com'
  : 'https://api-dev.naixue.com'

// API 端点
export const API = {
  // 用户相关
  LOGIN: '/api/user/login', // 登录
  REGISTER: '/api/user/register', // 注册
  GET_USER_INFO: '/api/user/info', // 获取用户信息
  UPDATE_USER_INFO: '/api/user/update', // 更新用户信息
  GET_ADDRESSES: '/api/user/addresses', // 获取地址列表
  ADD_ADDRESS: '/api/user/address/add', // 添加地址
  UPDATE_ADDRESS: '/api/user/address/update', // 更新地址
  DELETE_ADDRESS: '/api/user/address/delete', // 删除地址
  GET_COUPONS: '/api/user/coupons', // 获取优惠券列表
  GET_POINTS: '/api/user/points', // 获取积分记录

  // 商品相关
  GET_BANNERS: '/api/product/banners', // 获取轮播图
  GET_CATEGORIES: '/api/product/categories', // 获取分类列表
  GET_PRODUCTS: '/api/product/list', // 获取商品列表
  GET_PRODUCT_DETAIL: '/api/product/detail', // 获取商品详情
  SEARCH_PRODUCTS: '/api/product/search', // 搜索商品
  GET_RECOMMENDED: '/api/product/recommended', // 获取推荐商品

  // 购物车相关
  GET_CART: '/api/cart/list', // 获取购物车
  ADD_TO_CART: '/api/cart/add', // 加入购物车
  UPDATE_CART: '/api/cart/update', // 更新购物车
  DELETE_CART: '/api/cart/delete', // 删除购物车商品
  CLEAR_CART: '/api/cart/clear', // 清空购物车

  // 订单相关
  CREATE_ORDER: '/api/order/create', // 创建订单
  GET_ORDERS: '/api/order/list', // 获取订单列表
  GET_ORDER_DETAIL: '/api/order/detail', // 获取订单详情
  CANCEL_ORDER: '/api/order/cancel', // 取消订单
  GET_ORDER_STATS: '/api/order/stats', // 获取订单统计

  // 支付相关
  CREATE_PAYMENT: '/api/payment/create', // 创建支付
  QUERY_PAYMENT: '/api/payment/query', // 查询支付状态

  // 文件上传
  UPLOAD: '/api/upload'
}

// 请求超时时间（毫秒）
export const TIMEOUT = 10000

// TOKEN 存储 key
export const TOKEN_KEY = 'naixue_token'

// 分页默认配置
export const PAGE_SIZE = 20
