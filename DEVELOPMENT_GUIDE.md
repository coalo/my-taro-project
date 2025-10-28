# 奈雪点单应用 - 完整开发指南

## 📚 目录

1. [项目概述](#项目概述)
2. [已完成的基础架构](#已完成的基础架构)
3. [页面开发指南](#页面开发指南)
4. [组件开发指南](#组件开发指南)
5. [API 服务层开发](#api-服务层开发)
6. [跨端适配策略](#跨端适配策略)
7. [完整示例代码](#完整示例代码)

---

## 项目概述

### 技术栈
- **框架**: Taro 4.1.7 + React 18
- **语言**: TypeScript
- **状态管理**: Redux Toolkit
- **样式**: Sass + CSS Modules
- **构建工具**: Webpack 5

### 支持平台
- ✅ iOS/Android App (React Native)
- ✅ 微信小程序
- ✅ H5
- ✅ 支付宝/百度/字节等小程序

---

## 已完成的基础架构

### 1. 类型定义 (`src/types/`)
- ✅ `user.d.ts` - 用户、地址、优惠券类型
- ✅ `product.d.ts` - 商品、分类、购物车类型
- ✅ `order.d.ts` - 订单相关类型
- ✅ `common.d.ts` - 公共类型、API 响应格式

### 2. 常量配置 (`src/constants/`)
- ✅ `api.ts` - API 地址配置
- ✅ `status.ts` - 状态码、常量定义

### 3. 工具函数 (`src/utils/`)
- ✅ `platform.ts` - 平台判断工具
- ✅ `storage.ts` - 本地存储封装
- ✅ `format.ts` - 格式化函数（金额、日期、手机号等）

### 4. 服务层 (`src/services/`)
- ✅ `request.ts` - 请求封装（拦截器、错误处理）

### 5. 状态管理 (`src/store/`)
- ✅ `index.ts` - Store 配置
- ✅ `slices/userSlice.ts` - 用户状态
- ✅ `slices/cartSlice.ts` - 购物车状态

### 6. 全局样式 (`src/styles/`)
- ✅ `variables.scss` - 样式变量
- ✅ `common.scss` - 公共样式类

---

## 页面开发指南

### 首页 (`src/pages/index/index.tsx`)

```typescript
/**
 * 首页
 * 功能：轮播图、推荐商品、分类入口
 */

import { useState, useEffect } from 'react'
import { View, Swiper, SwiperItem, Image, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useAppSelector } from '../../store'
import './index.scss'

export default function Index() {
  const [banners, setBanners] = useState([])
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    // TODO: 调用 API 获取数据
    // const banners = await getBanners()
    // const products = await getRecommendedProducts()
  }

  const goToProductDetail = (id: string) => {
    Taro.navigateTo({
      url: `/pages/product-detail/index?id=${id}`
    })
  }

  return (
    <View className='home-page'>
      <ScrollView scrollY>
        {/* 轮播图 */}
        <Swiper className='banner-swiper' indicatorDots autoplay>
          {banners.map(banner => (
            <SwiperItem key={banner.id}>
              <Image src={banner.image} mode='aspectFill' />
            </SwiperItem>
          ))}
        </Swiper>

        {/* 推荐商品 */}
        <View className='product-list'>
          {products.map(product => (
            <View 
              key={product.id}
              className='product-card'
              onClick={() => goToProductDetail(product.id)}
            >
              <Image src={product.coverImage} />
              <Text>{product.name}</Text>
              <Text className='price'>¥{(product.price / 100).toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
```

**样式文件 (`index.scss`)**:

```scss
@import '../../styles/variables.scss';

.home-page {
  height: 100vh;
  background: $bg-color-page;

  .banner-swiper {
    height: 400px;
    
    image {
      width: 100%;
      height: 100%;
    }
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    padding: $spacing-md;
    gap: $spacing-md;

    .product-card {
      width: calc(50% - #{$spacing-md} / 2);
      background: $bg-color-container;
      border-radius: $border-radius-md;
      overflow: hidden;

      image {
        width: 100%;
        height: 300px;
      }

      .price {
        color: $error-color;
        font-weight: bold;
      }
    }
  }
}
```

**路由配置 (`index.config.ts`)**:

```typescript
export default definePageConfig({
  navigationBarTitleText: '首页',
  navigationBarBackgroundColor: '#FF6A3C',
  navigationBarTextStyle: 'white'
})
```

---

### 商品详情页 (`src/pages/product-detail/index.tsx`)

```typescript
import { useState, useEffect } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useAppDispatch } from '../../store'
import { addToCart } from '../../store/slices/cartSlice'
import './index.scss'

export default function ProductDetail() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState(null)
  const [selectedSpecs, setSelectedSpecs] = useState([])

  useEffect(() => {
    const { id } = router.params
    loadProductDetail(id)
  }, [])

  const loadProductDetail = async (id: string) => {
    // TODO: 调用 API
  }

  const handleAddToCart = () => {
    if (!product) return

    dispatch(addToCart({
      productId: product.id,
      name: product.name,
      coverImage: product.coverImage,
      price: product.price,
      specs: selectedSpecs
    }))

    Taro.showToast({
      title: '已加入购物车',
      icon: 'success'
    })
  }

  return (
    <View className='product-detail'>
      {/* 商品图片 */}
      <Image src={product?.coverImage} mode='aspectFill' />
      
      {/* 商品信息 */}
      <View className='product-info'>
        <Text className='name'>{product?.name}</Text>
        <Text className='subtitle'>{product?.subtitle}</Text>
        <Text className='price'>¥{(product?.price / 100).toFixed(2)}</Text>
      </View>

      {/* 规格选择 */}
      <View className='specs-section'>
        {product?.specs.map(spec => (
          <View key={spec.id} className='spec-group'>
            <Text className='spec-title'>{spec.name}</Text>
            <View className='spec-options'>
              {spec.options.map(option => (
                <View key={option.id} className='spec-option'>
                  {option.name}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* 加入购物车按钮 */}
      <View className='footer-bar'>
        <Button className='add-to-cart-btn' onClick={handleAddToCart}>
          加入购物车
        </Button>
      </View>
    </View>
  )
}
```

---

### 购物车页 (`src/pages/cart/index.tsx`)

```typescript
import { View, Text, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useAppSelector, useAppDispatch } from '../../store'
import {
  updateQuantity,
  removeFromCart,
  toggleChecked,
  toggleCheckAll
} from '../../store/slices/cartSlice'
import { formatMoney } from '../../utils/format'
import './index.scss'

export default function Cart() {
  const dispatch = useAppDispatch()
  const { items, totalPrice, totalCount, checkedAll } = useAppSelector(state => state.cart)

  const handleCheckout = () => {
    if (totalCount === 0) {
      Taro.showToast({
        title: '请选择商品',
        icon: 'none'
      })
      return
    }

    Taro.navigateTo({
      url: '/pages/checkout/index'
    })
  }

  return (
    <View className='cart-page'>
      {items.length === 0 ? (
        <View className='empty-cart'>
          <Text>购物车是空的</Text>
        </View>
      ) : (
        <>
          {/* 商品列表 */}
          <View className='cart-list'>
            {items.map(item => (
              <View key={item.id} className='cart-item'>
                <View 
                  className={`checkbox ${item.checked ? 'checked' : ''}`}
                  onClick={() => dispatch(toggleChecked(item.id))}
                />
                <Image src={item.coverImage} className='product-image' />
                <View className='product-info'>
                  <Text className='name'>{item.name}</Text>
                  <Text className='specs'>
                    {item.specs.map(s => s.optionName).join(' / ')}
                  </Text>
                  <View className='price-quantity'>
                    <Text className='price'>¥{formatMoney(item.price)}</Text>
                    <View className='quantity-control'>
                      <Button 
                        size='mini'
                        onClick={() => dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1
                        }))}
                      >-</Button>
                      <Text>{item.quantity}</Text>
                      <Button 
                        size='mini'
                        onClick={() => dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1
                        }))}
                      >+</Button>
                    </View>
                  </View>
                </View>
                <View 
                  className='delete-btn'
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  删除
                </View>
              </View>
            ))}
          </View>

          {/* 底部结算栏 */}
          <View className='cart-footer'>
            <View 
              className={`checkbox ${checkedAll ? 'checked' : ''}`}
              onClick={() => dispatch(toggleCheckAll())}
            >
              全选
            </View>
            <View className='total-info'>
              <Text>合计：</Text>
              <Text className='total-price'>¥{formatMoney(totalPrice)}</Text>
            </View>
            <Button className='checkout-btn' onClick={handleCheckout}>
              结算({totalCount})
            </Button>
          </View>
        </>
      )}
    </View>
  )
}
```

---

### 用户中心 (`src/pages/user/index.tsx`)

```typescript
import { View, Text, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useAppSelector, useAppDispatch } from '../../store'
import { logout } from '../../store/slices/userSlice'
import './index.scss'

export default function User() {
  const dispatch = useAppDispatch()
  const { isLogin, userInfo } = useAppSelector(state => state.user)

  const menuItems = [
    { id: '1', title: '我的订单', icon: '📦', url: '/pages/order-list/index' },
    { id: '2', title: '收货地址', icon: '📍', url: '/pages/address-list/index' },
    { id: '3', title: '我的优惠券', icon: '🎫', url: '/pages/coupon-list/index' },
    { id: '4', title: '我的积分', icon: '⭐', url: '/pages/points/index' },
    { id: '5', title: '设置', icon: '⚙️', url: '/pages/settings/index' }
  ]

  const handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }

  const handleLogout = () => {
    Taro.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          dispatch(logout())
          Taro.showToast({
            title: '已退出登录',
            icon: 'success'
          })
        }
      }
    })
  }

  const navigateTo = (url: string) => {
    if (!isLogin && url !== '/pages/login/index') {
      handleLogin()
      return
    }
    Taro.navigateTo({ url })
  }

  return (
    <View className='user-page'>
      {/* 用户信息头部 */}
      <View className='user-header'>
        {isLogin ? (
          <View className='user-info'>
            <Image src={userInfo?.avatar} className='avatar' />
            <View className='info'>
              <Text className='nickname'>{userInfo?.nickname}</Text>
              <Text className='phone'>{userInfo?.phone}</Text>
            </View>
            <View className='points'>
              <Text className='points-value'>{userInfo?.points}</Text>
              <Text className='points-label'>积分</Text>
            </View>
          </View>
        ) : (
          <View className='login-prompt' onClick={handleLogin}>
            <Text>点击登录</Text>
          </View>
        )}
      </View>

      {/* 菜单列表 */}
      <View className='menu-list'>
        {menuItems.map(item => (
          <View
            key={item.id}
            className='menu-item'
            onClick={() => navigateTo(item.url)}
          >
            <View className='menu-left'>
              <Text className='menu-icon'>{item.icon}</Text>
              <Text className='menu-title'>{item.title}</Text>
            </View>
            <Text className='menu-arrow'>›</Text>
          </View>
        ))}
      </View>

      {/* 退出登录按钮 */}
      {isLogin && (
        <Button className='logout-btn' onClick={handleLogout}>
          退出登录
        </Button>
      )}
    </View>
  )
}
```

---

## 组件开发指南

### 商品卡片组件 (`src/components/ProductCard/index.tsx`)

```typescript
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Product } from '../../types/product'
import { formatMoney } from '../../utils/format'
import './index.scss'

interface ProductCardProps {
  product: Product
  onClick?: (product: Product) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const handleClick = () => {
    onClick?.(product) || Taro.navigateTo({
      url: `/pages/product-detail/index?id=${product.id}`
    })
  }

  return (
    <View className='product-card' onClick={handleClick}>
      <Image 
        src={product.coverImage} 
        className='product-image'
        mode='aspectFill'
      />
      
      {/* 标签 */}
      {product.tags && product.tags.length > 0 && (
        <View className='product-tags'>
          {product.tags.map((tag, index) => (
            <View key={index} className='tag'>{tag}</View>
          ))}
        </View>
      )}

      <View className='product-info'>
        <Text className='name ellipsis-2'>{product.name}</Text>
        <Text className='subtitle ellipsis'>{product.subtitle}</Text>
        
        <View className='footer'>
          <View className='price-box'>
            <Text className='price'>¥{formatMoney(product.price)}</Text>
            {product.originalPrice > product.price && (
              <Text className='original-price'>
                ¥{formatMoney(product.originalPrice)}
              </Text>
            )}
          </View>
          <Text className='sales'>已售{product.sales}</Text>
        </View>
      </View>
    </View>
  )
}
```

**样式文件**:

```scss
@import '../../styles/variables.scss';

.product-card {
  position: relative;
  background: $bg-color-container;
  border-radius: $border-radius-md;
  overflow: hidden;

  .product-image {
    width: 100%;
    height: 300px;
  }

  .product-tags {
    position: absolute;
    top: $spacing-sm;
    left: $spacing-sm;
    display: flex;
    gap: $spacing-xs;

    .tag {
      padding: 4px 8px;
      background: $primary-color;
      color: $text-color-white;
      font-size: $font-size-xs;
      border-radius: $border-radius-xs;
    }
  }

  .product-info {
    padding: $spacing-md;

    .name {
      font-size: $font-size-lg;
      font-weight: $font-weight-medium;
      color: $text-color-primary;
      margin-bottom: $spacing-xs;
    }

    .subtitle {
      font-size: $font-size-sm;
      color: $text-color-secondary;
      margin-bottom: $spacing-md;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price-box {
        display: flex;
        align-items: baseline;
        gap: $spacing-xs;

        .price {
          font-size: $font-size-xl;
          font-weight: $font-weight-bold;
          color: $error-color;
        }

        .original-price {
          font-size: $font-size-sm;
          color: $text-color-tertiary;
          text-decoration: line-through;
        }
      }

      .sales {
        font-size: $font-size-sm;
        color: $text-color-tertiary;
      }
    }
  }
}
```

---

## API 服务层开发

### 用户服务 (`src/services/user.ts`)

```typescript
import request from './request'
import { API } from '../constants/api'
import { LoginResponse, UserInfo, Address, Coupon } from '../types/user'

// 登录
export const login = (phone: string, code: string) => {
  return request.post<LoginResponse>(API.LOGIN, { phone, code })
}

// 获取用户信息
export const getUserInfo = () => {
  return request.get<UserInfo>(API.GET_USER_INFO)
}

// 更新用户信息
export const updateUserInfo = (data: Partial<UserInfo>) => {
  return request.post<UserInfo>(API.UPDATE_USER_INFO, data)
}

// 获取地址列表
export const getAddresses = () => {
  return request.get<Address[]>(API.GET_ADDRESSES)
}

// 添加地址
export const addAddress = (data: Omit<Address, 'id'>) => {
  return request.post<Address>(API.ADD_ADDRESS, data)
}

// 更新地址
export const updateAddress = (id: string, data: Partial<Address>) => {
  return request.post<Address>(API.UPDATE_ADDRESS, { id, ...data })
}

// 删除地址
export const deleteAddress = (id: string) => {
  return request.post(API.DELETE_ADDRESS, { id })
}

// 获取优惠券列表
export const getCoupons = () => {
  return request.get<Coupon[]>(API.GET_COUPONS)
}
```

### 商品服务 (`src/services/product.ts`)

```typescript
import request from './request'
import { API } from '../constants/api'
import { Banner, Category, Product, ProductDetail, PageResponse } from '../types'

// 获取轮播图
export const getBanners = () => {
  return request.get<Banner[]>(API.GET_BANNERS)
}

// 获取分类列表
export const getCategories = () => {
  return request.get<Category[]>(API.GET_CATEGORIES)
}

// 获取商品列表
export const getProducts = (params: {
  categoryId?: string
  page: number
  pageSize: number
}) => {
  return request.get<PageResponse<Product>>(API.GET_PRODUCTS, params)
}

// 获取商品详情
export const getProductDetail = (id: string) => {
  return request.get<ProductDetail>(`${API.GET_PRODUCT_DETAIL}/${id}`)
}

// 搜索商品
export const searchProducts = (keyword: string, page: number = 1) => {
  return request.get<PageResponse<Product>>(API.SEARCH_PRODUCTS, {
    keyword,
    page,
    pageSize: 20
  })
}

// 获取推荐商品
export const getRecommendedProducts = () => {
  return request.get<Product[]>(API.GET_RECOMMENDED)
}
```

---

## 跨端适配策略

### 1. 平台判断使用示例

```typescript
import { isWeapp, isH5, isRN, supportPayment } from '../utils/platform'

// 在组件中使用
function PaymentButton() {
  const handlePay = () => {
    if (isWeapp()) {
      // 微信小程序支付
      Taro.requestPayment({...})
    } else if (isH5()) {
      // H5 跳转第三方支付
      window.location.href = payUrl
    } else if (isRN()) {
      // App 原生支付
      nativePayment()
    }
  }

  // 检查是否支持支付
  if (!supportPayment()) {
    return <Text>当前平台不支持支付</Text>
  }

  return <Button onClick={handlePay}>支付</Button>
}
```

### 2. 样式降级

```scss
// 使用 CSS 变量实现主题
.product-card {
  background: var(--bg-color, #FFFFFF);
  
  // H5 特殊样式
  @media (min-width: 768px) {
    width: 300px;
  }
  
  // 小程序特殊样式（通过类名控制）
  &.weapp {
    border-radius: 16px;
  }
}
```

### 3. 功能降级配置

```typescript
// config/platform.ts
export const PLATFORM_FEATURES = {
  weapp: {
    payment: true,
    location: true,
    scanCode: true,
    camera: true
  },
  h5: {
    payment: true, // 跳转第三方
    location: true,
    scanCode: false,
    camera: true
  },
  rn: {
    payment: true,
    location: true,
    scanCode: true,
    camera: true
  }
}
```

---

## App 配置

### `src/app.config.ts`

```typescript
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/user/index',
    'pages/product-detail/index',
    'pages/checkout/index',
    'pages/order-list/index',
    'pages/order-detail/index',
    'pages/login/index'
  ],
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FF6A3C',
    navigationBarTitleText: '奈雪的茶',
    navigationBarTextStyle: 'white',
    backgroundColor: '#F7F8FA'
  },
  
  tabBar: {
    color: '#999999',
    selectedColor: '#FF6A3C',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-active.png'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: 'assets/icons/category.png',
        selectedIconPath: 'assets/icons/category-active.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'assets/icons/cart.png',
        selectedIconPath: 'assets/icons/cart-active.png'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/icons/user.png',
        selectedIconPath: 'assets/icons/user-active.png'
      }
    ]
  }
})
```

### `src/app.ts`

```typescript
import { Component, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import './app.scss'

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    // 应用初始化
    console.log('App mounted')
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
```

---

## 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发
```bash
# H5
pnpm dev:h5

# 微信小程序
pnpm dev:weapp

# React Native
pnpm dev:rn
```

### 3. 构建生产
```bash
# H5
pnpm build:h5

# 微信小程序
pnpm build:weapp

# React Native
pnpm build:rn
```

---

## 注意事项

1. **状态管理**: 所有全局状态必须通过 Redux 管理
2. **类型安全**: 所有 API 调用必须定义类型
3. **跨端兼容**: 使用平台判断工具处理差异
4. **样式复用**: 优先使用全局样式类
5. **错误处理**: 所有异步操作必须 try-catch

---

## 下一步

1. 根据本指南逐个实现页面
2. 补充缺失的 API 服务
3. 完善组件库
4. 添加单元测试
5. 优化性能和用户体验

---

## 技术支持

如有问题，请参考：
- [Taro 官方文档](https://taro-docs.jd.com/)
- [Redux Toolkit 文档](https://redux-toolkit.js.org/)
- [React 官方文档](https://react.dev/)
