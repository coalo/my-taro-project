# Taro 项目多端输出目录配置说明

## 📁 输出目录结构

项目已配置为各端生成独立的输出目录，所有构建产物统一输出到 `dist` 目录下的对应子目录：

```
dist/
├── weapp/          # 微信小程序
├── h5/             # H5 网页应用
├── rn/             # React Native
├── alipay/         # 支付宝小程序
├── swan/           # 百度智能小程序
├── tt/             # 字节跳动小程序
├── qq/             # QQ 小程序
├── jd/             # 京东小程序
└── quickapp/       # 快应用
```

## 🚀 使用方法

### 开发模式（带热更新）

```bash
# 微信小程序
npm run dev:weapp

# H5
npm run dev:h5

# React Native
npm run dev:rn

# 其他平台
npm run dev:alipay    # 支付宝
npm run dev:swan      # 百度
npm run dev:tt        # 字节跳动
npm run dev:qq        # QQ
npm run dev:jd        # 京东
npm run dev:quickapp  # 快应用
```

### 生产构建

```bash
# 微信小程序
npm run build:weapp

# H5
npm run build:h5

# React Native
npm run build:rn

# 其他平台
npm run build:alipay
npm run build:swan
npm run build:tt
npm run build:qq
npm run build:jd
npm run build:quickapp
```

## ⚙️ 配置原理

配置文件 `config/index.ts` 通过读取环境变量 `TARO_ENV` 来动态设置输出目录：

```typescript
const platform = process.env.TARO_ENV || 'h5'
const outputMap: Record<string, string> = {
  weapp: 'dist/weapp',
  h5: 'dist/h5',
  rn: 'dist/rn',
  // ... 其他平台
}
const outputRoot = outputMap[platform] || 'dist'
```

Taro CLI 在执行 `taro build --type <platform>` 时会自动设置 `TARO_ENV` 环境变量，因此无需手动配置。

## 📝 注意事项

1. **首次构建**：首次运行某个平台时，会自动创建对应的输出目录
2. **清理构建**：如需清理某个平台的构建产物，直接删除对应的 `dist/<platform>` 目录即可
3. **并行构建**：可以同时为不同平台构建，互不影响
4. **React Native 特殊说明**：RN 平台的 bundle 文件仍会输出到 `ios/` 和 `android/` 目录，`dist/rn/` 主要存放中间产物

## 🔧 自定义输出目录

如需修改某个平台的输出目录，在 `config/index.ts` 中修改 `outputMap` 对应的值：

```typescript
const outputMap: Record<string, string> = {
  weapp: 'dist/weapp',        // 改为你想要的路径
  h5: 'dist/h5',
  // ...
}
```

## 📦 部署说明

### 微信小程序
使用微信开发者工具打开 `dist/weapp` 目录进行预览和上传

### H5
将 `dist/h5` 目录下的所有文件部署到 Web 服务器

### React Native
执行以下命令运行原生应用：
```bash
npm run android  # Android
npm run ios      # iOS
```

---

**技术栈**：Taro 4.1.7 + React + TypeScript + Sass
