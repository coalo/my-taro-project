# RN 同步 API 问题修复说明

## 🐛 问题描述

在 React Native 端运行时出现错误：
```
ERROR  RN 端暂不支持 API getStorageSync, 请使用 getStorage
```

## 🔍 原因分析

Taro 在 React Native 端不支持同步存储 API（`getStorageSync`、`setStorageSync` 等），只支持异步 API。

### 问题代码位置

`src/store/slices/userSlice.ts` 第 18 行：
```typescript
const initialState: UserState = {
  token: storage.get(TOKEN_KEY), // ❌ 同步读取，RN 不支持
  // ...
}
```

## ✅ 解决方案

### 1. 修改初始状态

将 token 初始值改为 null：
```typescript
const initialState: UserState = {
  token: null, // ✅ RN 不支持同步读取，需要在 app 启动时异步加载
  userInfo: null,
  isLogin: false,
  addresses: [],
  coupons: [],
  loading: false
}
```

### 2. 添加异步初始化 Action

在 `userSlice.ts` 中添加：
```typescript
export const initToken = createAsyncThunk(
  'user/initToken',
  async () => {
    // 从本地存储读取 token
    const token = await storage.getAsync<string>(TOKEN_KEY)
    return token
  }
)
```

### 3. 处理初始化结果

在 extraReducers 中处理：
```typescript
extraReducers: (builder) => {
  // 初始化 token
  builder.addCase(initToken.fulfilled, (state, action) => {
    if (action.payload) {
      state.token = action.payload
      state.isLogin = true
    }
  })
  // ... 其他 reducers
}
```

### 4. 在 App 启动时调用

在 `app.tsx` 中：
```typescript
import { initToken } from './store/slices/userSlice'

class App extends Component<PropsWithChildren> {
  componentDidMount () {
    // 初始化 token（异步加载）
    store.dispatch(initToken())
  }
  // ...
}
```

## 📝 跨端适配说明

### Storage API 使用规范

| 平台 | 同步 API | 异步 API | 推荐 |
|------|---------|---------|------|
| **H5** | ✅ 支持 | ✅ 支持 | 同步/异步都可 |
| **小程序** | ✅ 支持 | ✅ 支持 | 同步/异步都可 |
| **RN** | ❌ 不支持 | ✅ 支持 | **必须使用异步** |

### 最佳实践

为了确保跨端兼容，建议：

1. **在 Redux 初始化时避免同步读取**
   ```typescript
   // ❌ 错误
   const initialState = {
     token: storage.get(TOKEN_KEY)
   }
   
   // ✅ 正确
   const initialState = {
     token: null
   }
   ```

2. **在应用启动时异步加载必要数据**
   ```typescript
   componentDidMount() {
     store.dispatch(initToken())
     store.dispatch(initUserInfo())
   }
   ```

3. **在组件中使用 Redux 状态**
   ```typescript
   const token = useAppSelector(state => state.user.token)
   ```

## 🎯 已修复的文件

- ✅ `src/store/slices/userSlice.ts` - 修改初始化逻辑
- ✅ `src/app.tsx` - 添加启动时初始化

## 🚀 验证步骤

1. 重新构建 RN 包：
   ```bash
   pnpm build:rn
   ```

2. 重启 iOS 模拟器：
   ```bash
   pnpm ios
   ```

3. 检查是否还有错误

## 💡 其他注意事项

### Storage 工具类已支持异步

`src/utils/storage.ts` 已提供完整的异步 API：
- `getAsync()` - 异步获取
- `setAsync()` - 异步存储
- `removeAsync()` - 异步删除
- `clearAsync()` - 异步清空

### 在 RN 中的使用示例

```typescript
// 读取数据
const token = await storage.getAsync(TOKEN_KEY)

// 存储数据
await storage.setAsync(TOKEN_KEY, newToken)

// 删除数据
await storage.removeAsync(TOKEN_KEY)
```

## 📊 构建结果

✅ Bundle 构建成功
✅ 无语法错误
✅ 已生成 iOS/Android bundle

---

**状态**: ✅ 已修复
**修复时间**: 2025-10-28
**影响范围**: React Native 端
