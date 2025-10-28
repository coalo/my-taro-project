/**
 * 购物车状态管理
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, SelectedSpec } from '../../types/product'

interface CartState {
  items: CartItem[]
  totalCount: number
  totalPrice: number
  checkedAll: boolean
}

const initialState: CartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  checkedAll: false
}

// 计算总数和总价
const calculateTotal = (items: CartItem[]) => {
  const checkedItems = items.filter(item => item.checked)
  const totalCount = checkedItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = checkedItems.reduce((sum, item) => {
    const specsPrice = item.specs.reduce((s, spec) => s + spec.price, 0)
    return sum + (item.price + specsPrice) * item.quantity
  }, 0)
  return { totalCount, totalPrice }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 添加到购物车
    addToCart: (state, action: PayloadAction<{
      productId: string
      name: string
      coverImage: string
      price: number
      specs: SelectedSpec[]
    }>) => {
      const { productId, specs } = action.payload
      
      // 检查是否已存在相同商品和规格
      const existingIndex = state.items.findIndex(item => {
        if (item.productId !== productId) return false
        if (item.specs.length !== specs.length) return false
        return item.specs.every((spec, index) => 
          spec.optionId === specs[index].optionId
        )
      })
      
      if (existingIndex !== -1) {
        // 已存在，数量+1
        state.items[existingIndex].quantity += 1
      } else {
        // 不存在，添加新项
        state.items.push({
          id: `${productId}_${Date.now()}`,
          ...action.payload,
          quantity: 1,
          checked: true
        })
      }
      
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
      state.checkedAll = state.items.every(item => item.checked)
    },
    
    // 更新数量
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id)
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity)
      }
      
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
    },
    
    // 删除商品
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
      state.checkedAll = state.items.length > 0 && state.items.every(item => item.checked)
    },
    
    // 切换选中状态
    toggleChecked: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        item.checked = !item.checked
      }
      
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
      state.checkedAll = state.items.every(item => item.checked)
    },
    
    // 全选/取消全选
    toggleCheckAll: (state) => {
      state.checkedAll = !state.checkedAll
      state.items.forEach(item => {
        item.checked = state.checkedAll
      })
      
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
    },
    
    // 清空购物车
    clearCart: (state) => {
      state.items = []
      state.totalCount = 0
      state.totalPrice = 0
      state.checkedAll = false
    },
    
    // 删除已选商品
    removeCheckedItems: (state) => {
      state.items = state.items.filter(item => !item.checked)
      state.totalCount = 0
      state.totalPrice = 0
      state.checkedAll = false
    },
    
    // 设置购物车数据（从服务器同步）
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
      const { totalCount, totalPrice } = calculateTotal(state.items)
      state.totalCount = totalCount
      state.totalPrice = totalPrice
      state.checkedAll = state.items.length > 0 && state.items.every(item => item.checked)
    }
  }
})

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  toggleChecked,
  toggleCheckAll,
  clearCart,
  removeCheckedItems,
  setCartItems
} = cartSlice.actions

export default cartSlice.reducer
