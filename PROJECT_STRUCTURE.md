# 奈雪点单应用 - 项目结构

## 📁 目录结构

```
src/
├── pages/                    # 页面
│   ├── index/               # 首页（轮播图、推荐商品）
│   ├── category/            # 分类页（商品分类、搜索）
│   ├── product-detail/      # 商品详情（规格选择）
│   ├── cart/                # 购物车
│   ├── checkout/            # 结算页
│   ├── order-list/          # 订单列表
│   ├── order-detail/        # 订单详情
│   ├── user/                # 用户中心
│   └── login/               # 登录注册
│
├── components/               # 跨端可复用组件
│   ├── ProductCard/         # 商品卡片
│   ├── NavBar/              # 导航栏
│   ├── TabBar/              # 底部导航
│   ├── Swiper/              # 轮播图
│   ├── SpecSelector/        # 规格选择器
│   ├── AddressCard/         # 地址卡片
│   ├── OrderCard/           # 订单卡片
│   └── CouponCard/          # 优惠券卡片
│
├── store/                    # Redux 状态管理
│   ├── index.ts             # Store 配置
│   ├── slices/
│   │   ├── userSlice.ts     # 用户状态
│   │   ├── cartSlice.ts     # 购物车状态
│   │   ├── orderSlice.ts    # 订单状态
│   │   └── productSlice.ts  # 商品状态
│
├── services/                 # API 服务层
│   ├── request.ts           # 请求封装
│   ├── user.ts              # 用户相关接口
│   ├── product.ts           # 商品相关接口
│   ├── order.ts             # 订单相关接口
│   └── payment.ts           # 支付相关接口
│
├── utils/                    # 工具函数
│   ├── platform.ts          # 平台判断
│   ├── storage.ts           # 本地存储
│   ├── format.ts            # 格式化函数
│   └── validate.ts          # 表单验证
│
├── constants/                # 常量配置
│   ├── api.ts               # API 地址
│   ├── status.ts            # 状态码
│   └── config.ts            # 配置常量
│
├── types/                    # TypeScript 类型定义
│   ├── user.d.ts
│   ├── product.d.ts
│   ├── order.d.ts
│   └── common.d.ts
│
├── styles/                   # 全局样式
│   ├── variables.scss       # 变量
│   ├── mixins.scss          # 混入
│   └── common.scss          # 公共样式
│
├── app.config.ts            # 应用配置
├── app.ts                   # 应用入口
└── index.html               # H5 入口

```

## 🎯 功能模块说明

### 1. 首页（index）
- 轮播图展示
- 推荐商品列表
- 分类入口
- 营销活动

### 2. 分类页（category）
- 左侧分类导航
- 商品列表
- 搜索功能

### 3. 商品详情（product-detail）
- 商品图片轮播
- 商品信息展示
- 规格选择（温度、糖度、规格等）
- 加入购物车

### 4. 购物车（cart）
- 商品列表
- 数量调整
- 删除商品
- 总价计算

### 5. 结算页（checkout）
- 收货地址选择
- 配送时间
- 优惠券使用
- 支付方式

### 6. 订单管理（order-list/order-detail）
- 订单列表（全部、待付款、待收货等）
- 订单详情
- 订单状态跟踪

### 7. 用户中心（user）
- 个人信息
- 积分显示
- 优惠券管理
- 收货地址
- 设置

### 8. 登录注册（login）
- 手机号登录
- 验证码登录
- 第三方登录（App）

## 🔄 跨端策略

### App（完整版）
- 所有功能完整实现
- 原生支付
- 定位服务
- 推送通知

### 小程序（功能完整，样式简化）
- 微信支付
- 位置选择
- 模板消息

### H5（功能降级）
- 基础浏览功能
- 第三方支付
- 部分功能引导下载 App

## 📊 状态管理

使用 Redux Toolkit 管理全局状态：
- userSlice：用户信息、登录状态
- cartSlice：购物车商品、数量
- orderSlice：订单列表、订单详情
- productSlice：商品列表、分类
