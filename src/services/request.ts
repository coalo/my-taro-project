/**
 * 请求封装
 */

import Taro from '@tarojs/taro'
import { BASE_URL, TIMEOUT, TOKEN_KEY } from '../constants/api'
import { STATUS_CODE } from '../constants/status'
import { ApiResponse } from '../types/common'
import storage from '../utils/storage'

// 请求拦截器
const requestInterceptor = (config) => {
  // 添加 token
  const token = storage.get(TOKEN_KEY)
  if (token) {
    config.header = {
      ...config.header,
      'Authorization': `Bearer ${token}`
    }
  }
  
  // 添加默认 headers
  config.header = {
    'Content-Type': 'application/json',
    ...config.header
  }
  
  return config
}

// 响应拦截器
const responseInterceptor = (response) => {
  const { statusCode, data } = response
  
  // HTTP 状态码检查
  if (statusCode !== 200) {
    Taro.showToast({
      title: `请求失败 ${statusCode}`,
      icon: 'none'
    })
    return Promise.reject(response)
  }
  
  // 业务状态码检查
  if (data.code !== STATUS_CODE.SUCCESS) {
    // 登录过期，跳转登录
    if (data.code === STATUS_CODE.LOGIN_EXPIRED) {
      storage.remove(TOKEN_KEY)
      Taro.navigateTo({ url: '/pages/login/index' })
      return Promise.reject(data)
    }
    
    // 其他错误提示
    Taro.showToast({
      title: data.message || '请求失败',
      icon: 'none'
    })
    return Promise.reject(data)
  }
  
  return data
}

/**
 * 请求方法
 */
class Request {
  /**
   * 基础请求
   */
  private async request<T = any>(options: Taro.request.Option): Promise<ApiResponse<T>> {
    try {
      // 请求拦截
      const config = requestInterceptor({
        url: `${BASE_URL}${options.url}`,
        timeout: TIMEOUT,
        ...options
      })
      
      // 发起请求
      const response = await Taro.request(config)
      
      // 响应拦截
      return responseInterceptor(response)
    } catch (error) {
      console.error('请求失败', error)
      return Promise.reject(error)
    }
  }

  /**
   * GET 请求
   */
  get<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      data,
      method: 'GET'
    })
  }

  /**
   * POST 请求
   */
  post<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      data,
      method: 'POST'
    })
  }

  /**
   * PUT 请求
   */
  put<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      data,
      method: 'PUT'
    })
  }

  /**
   * DELETE 请求
   */
  delete<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      data,
      method: 'DELETE'
    })
  }

  /**
   * 上传文件
   */
  async upload(url: string, filePath: string, name: string = 'file'): Promise<any> {
    try {
      const token = storage.get(TOKEN_KEY)
      
      const response = await Taro.uploadFile({
        url: `${BASE_URL}${url}`,
        filePath,
        name,
        header: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      const data = JSON.parse(response.data)
      if (data.code !== STATUS_CODE.SUCCESS) {
        Taro.showToast({
          title: data.message || '上传失败',
          icon: 'none'
        })
        return Promise.reject(data)
      }
      
      return data
    } catch (error) {
      console.error('上传失败', error)
      Taro.showToast({
        title: '上传失败',
        icon: 'none'
      })
      return Promise.reject(error)
    }
  }

  /**
   * 下载文件
   */
  async download(url: string): Promise<string> {
    try {
      const response = await Taro.downloadFile({
        url: `${BASE_URL}${url}`
      })
      
      if (response.statusCode === 200) {
        return response.tempFilePath
      }
      
      throw new Error('下载失败')
    } catch (error) {
      console.error('下载失败', error)
      Taro.showToast({
        title: '下载失败',
        icon: 'none'
      })
      return Promise.reject(error)
    }
  }
}

export default new Request()
