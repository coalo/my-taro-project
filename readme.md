# 奈雪点单应用 🧋

基于 Taro 框架开发的跨端点单应用，支持 iOS/Android App、微信小程序、H5 等多端运行。

## 📱 项目简介

这是一个完整的奶茶点单应用，包含商品浏览、购物车、订单管理、用户中心等核心功能。项目采用 Taro + React + TypeScript + Redux Toolkit 技术栈，实现一套代码多端运行。

### 功能特性

#### 核心功能模块

✅ **首页**
- 轮播图展示
- 推荐商品列表
- 快捷分类入口
- 营销活动展示

✅ **商品模块**
- 商品分类浏览
- 商品搜索
- 商品详情查看
- 规格选择（温度、糖度、规格）
- 加入购物车

✅ **购物车**
- 购物车商品管理
- 数量调整
- 商品删除
- 总价计算
- 全选/取消全选

✅ **订单模块**
- 订单创建
- 订单列表（全部、待支付、配送中等）
- 订单详情
- 订单取消/退款

✅ **用户中心**
- 登录/注册
- 个人信息管理
- 收货地址管理
- 优惠券查看使用
- 积分查询
- 会员等级

✅ **支付功能**
- 微信支付（小程序）
- 支付宝（H5/App）
- 余额支付

### 跨端支持

| 平台 | 功能完整度 | 说明 |
|------|-----------|------|
| **iOS/Android App** | 100% | 完整功能，最佳体验 |
| **微信小程序** | 95% | 核心功能完整，部分样式简化 |
| **H5** | 85% | 基础功能，引导下载 App |
| **支付宝小程序** | 95% | 适配支付宝生态 |

## 🏗️ 技术架构

### 技术栈

```
├── 框架：Taro 4.1.7 + React 18
├── 语言：TypeScript 5
├── 状态管理：Redux Toolkit 2.x
├── 样式：Sass + CSS Modules
├── 构建：Webpack 5
├── 包管理：pnpm
└── 代码规范：ESLint + TypeScript
```

### 项目结构

```
src/
├── pages/                    # 页面
│   ├── index/               # 首页
│   ├── category/            # 分类页
│   ├── product-detail/      # 商品详情
│   ├── cart/                # 购物车
│   ├── checkout/            # 结算页
│   ├── order-list/          # 订单列表
│   ├── order-detail/        # 订单详情
│   ├── user/                # 用户中心
│   └── login/               # 登录注册
│
├── components/               # 组件
│   ├── ProductCard/         # 商品卡片
│   ├── NavBar/              # 导航栏
│   ├── TabBar/              # 底部导航
│   └── ...
│
├── store/                    # Redux 状态
│   ├── index.ts
│   └── slices/
│       ├── userSlice.ts     # 用户状态
│       ├── cartSlice.ts     # 购物车状态
│       └── orderSlice.ts    # 订单状态
│
├── services/                 # API 服务
│   ├── request.ts           # 请求封装
│   ├── user.ts              # 用户接口
│   ├── product.ts           # 商品接口
│   └── order.ts             # 订单接口
│
├── utils/                    # 工具函数
│   ├── platform.ts          # 平台判断
│   ├── storage.ts           # 本地存储
│   └── format.ts            # 格式化
│
├── types/                    # 类型定义
│   ├── user.d.ts
│   ├── product.d.ts
│   ├── order.d.ts
│   └── common.d.ts
│
├── constants/                # 常量
│   ├── api.ts               # API 地址
│   └── status.ts            # 状态码
│
├── styles/                   # 全局样式
│   ├── variables.scss       # 变量
│   ├── mixins.scss          # 混入
│   └── common.scss          # 公共样式
│
├── app.config.ts            # 应用配置
├── app.ts                   # 应用入口
└── app.scss                 # 全局样式
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发运行

```bash
# H5
pnpm dev:h5

# 微信小程序
pnpm dev:weapp

# React Native (需要先配置原生环境)
pnpm dev:rn

# 支付宝小程序
pnpm dev:alipay
```

### 生产构建

```bash
# H5
pnpm build:h5

# 微信小程序
pnpm build:weapp

# React Native
pnpm build:rn
```

### 输出目录

```
dist/
├── weapp/          # 微信小程序
├── h5/             # H5 网页
├── rn/             # React Native
├── alipay/         # 支付宝小程序
└── ...
```

## 📖 开发指南

### 已实现的基础设施

#### ✅ 类型系统
- 完整的 TypeScript 类型定义
- 用户、商品、订单等业务类型
- API 响应类型
- 公共类型工具

#### ✅ 状态管理
- Redux Toolkit 配置
- 用户状态管理（登录、个人信息、地址、优惠券）
- 购物车状态管理（商品管理、数量控制、价格计算）
- 订单状态管理（待实现）

#### ✅ 请求封装
- 统一的请求拦截器
- 自动 Token 注入
- 错误统一处理
- 登录过期自动跳转

#### ✅ 工具函数
- 平台判断工具（isWeapp、isH5、isRN 等）
- 本地存储封装
- 格式化函数（金额、日期、手机号等）
- 表单验证（待实现）

#### ✅ 样式系统
- 完整的样式变量（颜色、间距、字体等）
- 公共样式类（flex、间距、文本等）
- 响应式适配
- 主题支持

### 快速添加新页面

1. 创建页面目录
```bash
mkdir -p src/pages/my-page
```

2. 创建页面文件
```typescript
// src/pages/my-page/index.tsx
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function MyPage() {
  return (
    <View className='my-page'>
      <Text>My Page</Text>
    </View>
  )
}
```

3. 创建配置文件
```typescript
// src/pages/my-page/index.config.ts
export default definePageConfig({
  navigationBarTitleText: '我的页面'
})
```

4. 在 `app.config.ts` 中注册
```typescript
export default defineAppConfig({
  pages: [
    // ... 其他页面
    'pages/my-page/index'
  ]
})
```

### 使用状态管理

```typescript
import { useAppSelector, useAppDispatch } from '../../store'
import { addToCart } from '../../store/slices/cartSlice'

function MyComponent() {
  const dispatch = useAppDispatch()
  const cartCount = useAppSelector(state => state.cart.totalCount)
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: '1',
      name: '商品名称',
      price: 2800,
      // ...
    }))
  }
  
  return <View>购物车商品数：{cartCount}</View>
}
```

### 调用 API

```typescript
import { getProducts } from '../../services/product'

async function loadProducts() {
  try {
    const res = await getProducts({
      categoryId: '1',
      page: 1,
      pageSize: 20
    })
    console.log(res.data.list)
  } catch (error) {
    console.error('加载失败', error)
  }
}
```

### 跨端适配示例

```typescript
import { isWeapp, isH5, isRN } from '../../utils/platform'

function PaymentButton() {
  const handlePay = () => {
    if (isWeapp()) {
      // 微信小程序支付
      Taro.requestPayment({...})
    } else if (isH5()) {
      // H5 跳转支付
      window.location.href = payUrl
    } else if (isRN()) {
      // App 原生支付
      nativePayment()
    }
  }
  
  return <Button onClick={handlePay}>支付</Button>
}
```

## 📚 文档

- [项目结构说明](./PROJECT_STRUCTURE.md) - 详细的项目结构和功能模块
- [开发指南](./DEVELOPMENT_GUIDE.md) - 完整的开发指南和示例代码
- [构建输出说明](./BUILD_OUTPUT.md) - 多端构建配置说明

## 🔧 待完成功能

### 高优先级
- [ ] 商品详情页规格选择组件
- [ ] 结算页面实现
- [ ] 订单列表和详情页
- [ ] 登录注册页面
- [ ] 地址管理页面

### 中优先级
- [ ] 商品分类页
- [ ] 搜索功能
- [ ] 优惠券页面
- [ ] 积分页面
- [ ] 支付功能对接

### 低优先级
- [ ] 单元测试
- [ ] E2E 测试
- [ ] 性能优化
- [ ] 错误监控
- [ ] 埋点统计

## 🎯 开发规范

### 命名规范
- 组件文件：PascalCase（如 `ProductCard.tsx`）
- 普通文件：camelCase（如 `format.ts`）
- 样式文件：kebab-case（如 `product-card.scss`）
- 常量：UPPER_SNAKE_CASE（如 `API_BASE_URL`）

### 代码规范
- 使用 TypeScript 类型注解
- 使用函数式组件和 Hooks
- 状态管理统一使用 Redux
- API 调用统一使用封装的 request
- 错误处理使用 try-catch

### Git 提交规范
```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
test: 测试相关
chore: 构建/工具链相关
```

## 📄 License

MIT

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 项目地址：[GitHub](https://github.com/your-repo/naixue-test)
- 问题反馈：[Issues](https://github.com/your-repo/naixue-test/issues)

---

**注意**：本项目仅供学习交流使用，不得用于商业用途。
