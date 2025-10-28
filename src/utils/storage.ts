/**
 * 本地存储工具
 */

import Taro from '@tarojs/taro'

class Storage {
  /**
   * 存储数据
   */
  set(key: string, data: any): void {
    try {
      const value = JSON.stringify(data)
      Taro.setStorageSync(key, value)
    } catch (error) {
      console.error('存储数据失败', key, error)
    }
  }

  /**
   * 获取数据
   */
  get<T = any>(key: string): T | null {
    try {
      const value = Taro.getStorageSync(key)
      return value ? JSON.parse(value) : null
    } catch (error) {
      console.error('获取数据失败', key, error)
      return null
    }
  }

  /**
   * 删除数据
   */
  remove(key: string): void {
    try {
      Taro.removeStorageSync(key)
    } catch (error) {
      console.error('删除数据失败', key, error)
    }
  }

  /**
   * 清空所有数据
   */
  clear(): void {
    try {
      Taro.clearStorageSync()
    } catch (error) {
      console.error('清空存储失败', error)
    }
  }

  /**
   * 异步存储数据
   */
  async setAsync(key: string, data: any): Promise<void> {
    try {
      const value = JSON.stringify(data)
      await Taro.setStorage({ key, data: value })
    } catch (error) {
      console.error('异步存储数据失败', key, error)
    }
  }

  /**
   * 异步获取数据
   */
  async getAsync<T = any>(key: string): Promise<T | null> {
    try {
      const res = await Taro.getStorage({ key })
      return res.data ? JSON.parse(res.data) : null
    } catch (error) {
      return null
    }
  }

  /**
   * 异步删除数据
   */
  async removeAsync(key: string): Promise<void> {
    try {
      await Taro.removeStorage({ key })
    } catch (error) {
      console.error('异步删除数据失败', key, error)
    }
  }

  /**
   * 异步清空所有数据
   */
  async clearAsync(): Promise<void> {
    try {
      await Taro.clearStorage()
    } catch (error) {
      console.error('异步清空存储失败', error)
    }
  }

  /**
   * 获取所有 key
   */
  getKeys(): string[] {
    try {
      const res = Taro.getStorageInfoSync()
      return res.keys || []
    } catch (error) {
      console.error('获取keys失败', error)
      return []
    }
  }

  /**
   * 获取存储信息
   */
  getInfo() {
    try {
      return Taro.getStorageInfoSync()
    } catch (error) {
      console.error('获取存储信息失败', error)
      return null
    }
  }
}

export default new Storage()
