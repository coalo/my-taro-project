import { Component, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'
import { store } from './store'
import { setToken } from './store/slices/userSlice'
import { TOKEN_KEY } from './constants/api'
import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    // 初始化 token
    this.initToken()
  }

  // 异步加载 token（兼容小程序和 RN）
  async initToken() {
    try {
      // 小程序和 RN 都支持 getStorage 异步 API
      const res = await Taro.getStorage({ key: TOKEN_KEY })
      if (res.data) {
        const token = typeof res.data === 'string' ? res.data : JSON.parse(res.data)
        if (token) {
          store.dispatch(setToken(token))
        }
      }
    } catch (error) {
      // token 不存在或读取失败，忽略
      console.log('Token 初始化：未找到本地 token')
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
