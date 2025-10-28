/**
 * 用户状态管理
 */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo, Address, Coupon } from '../../types/user'
import storage from '../../utils/storage'
import { TOKEN_KEY } from '../../constants/api'

interface UserState {
  token: string | null
  userInfo: UserInfo | null
  isLogin: boolean
  addresses: Address[]
  coupons: Coupon[]
  loading: boolean
}

const initialState: UserState = {
  token: null, // RN 不支持同步读取，需要在 app 启动时异步加载
  userInfo: null,
  isLogin: false,
  addresses: [],
  coupons: [],
  loading: false
}

// 异步 actions
export const login = createAsyncThunk(
  'user/login',
  async (params: { phone: string; code: string }) => {
    // TODO: 调用登录 API
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(params)
    })
    return response.json()
  }
)

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async () => {
    // TODO: 调用获取用户信息 API
    const response = await fetch('/api/user/info')
    return response.json()
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 设置 token
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isLogin = !!action.payload
      storage.set(TOKEN_KEY, action.payload)
    },
    
    // 设置用户信息
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload
    },
    
    // 退出登录
    logout: (state) => {
      state.token = null
      state.userInfo = null
      state.isLogin = false
      state.addresses = []
      state.coupons = []
      storage.remove(TOKEN_KEY)
    },
    
    // 设置地址列表
    setAddresses: (state, action: PayloadAction<Address[]>) => {
      state.addresses = action.payload
    },
    
    // 添加地址
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload)
    },
    
    // 更新地址
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(addr => addr.id === action.payload.id)
      if (index !== -1) {
        state.addresses[index] = action.payload
      }
    },
    
    // 删除地址
    deleteAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload)
    },
    
    // 设置默认地址
    setDefaultAddress: (state, action: PayloadAction<string>) => {
      state.addresses.forEach(addr => {
        addr.isDefault = addr.id === action.payload
      })
    },
    
    // 设置优惠券列表
    setCoupons: (state, action: PayloadAction<Coupon[]>) => {
      state.coupons = action.payload
    },
    
    // 更新用户积分
    updatePoints: (state, action: PayloadAction<number>) => {
      if (state.userInfo) {
        state.userInfo.points = action.payload
      }
    }
  },
  
  extraReducers: (builder) => {
    // 登录
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.userInfo = action.payload.userInfo
      state.isLogin = true
      storage.set(TOKEN_KEY, action.payload.token)
    })
    builder.addCase(login.rejected, (state) => {
      state.loading = false
    })
    
    // 获取用户信息
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    })
    builder.addCase(getUserInfo.rejected, (state) => {
      state.loading = false
    })
  }
})

export const {
  setToken,
  setUserInfo,
  logout,
  setAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  setCoupons,
  updatePoints
} = userSlice.actions

export default userSlice.reducer
