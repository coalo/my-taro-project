/**
 * 平台判断工具
 */

import Taro from '@tarojs/taro'
import { PlatformType } from '../types/common'

/**
 * 获取当前平台
 */
export const getPlatform = (): PlatformType => {
  return process.env.TARO_ENV as PlatformType
}

/**
 * 是否为微信小程序
 */
export const isWeapp = (): boolean => {
  return process.env.TARO_ENV === 'weapp'
}

/**
 * 是否为H5
 */
export const isH5 = (): boolean => {
  return process.env.TARO_ENV === 'h5'
}

/**
 * 是否为React Native（App）
 */
export const isRN = (): boolean => {
  return process.env.TARO_ENV === 'rn'
}

/**
 * 是否为支付宝小程序
 */
export const isAlipay = (): boolean => {
  return process.env.TARO_ENV === 'alipay'
}

/**
 * 是否为小程序环境（所有小程序平台）
 */
export const isMiniProgram = (): boolean => {
  const miniProgramPlatforms = ['weapp', 'alipay', 'swan', 'tt', 'qq', 'jd']
  return miniProgramPlatforms.includes(process.env.TARO_ENV)
}

/**
 * 获取系统信息
 */
export const getSystemInfo = () => {
  try {
    return Taro.getSystemInfoSync()
  } catch (error) {
    console.error('获取系统信息失败', error)
    return null
  }
}

/**
 * 判断是否支持某个 API
 */
export const canIUse = (api: string): boolean => {
  try {
    return Taro.canIUse(api)
  } catch (error) {
    return false
  }
}

/**
 * 获取状态栏高度（用于适配刘海屏）
 */
export const getStatusBarHeight = (): number => {
  const systemInfo = getSystemInfo()
  return systemInfo?.statusBarHeight || 0
}

/**
 * 获取胶囊按钮位置信息（仅小程序）
 */
export const getMenuButtonBoundingClientRect = () => {
  if (isMiniProgram() && canIUse('getMenuButtonBoundingClientRect')) {
    try {
      return Taro.getMenuButtonBoundingClientRect()
    } catch (error) {
      return null
    }
  }
  return null
}

/**
 * 计算导航栏高度
 */
export const getNavigationBarHeight = (): number => {
  const statusBarHeight = getStatusBarHeight()
  const menuButton = getMenuButtonBoundingClientRect()
  
  if (menuButton) {
    // 小程序：胶囊高度 + (胶囊top - 状态栏高度) * 2
    return menuButton.height + (menuButton.top - statusBarHeight) * 2 + statusBarHeight
  }
  
  // 默认高度
  return statusBarHeight + 44
}

/**
 * 是否支持支付功能
 */
export const supportPayment = (): boolean => {
  if (isWeapp()) return canIUse('requestPayment')
  if (isAlipay()) return canIUse('tradePay')
  if (isRN()) return true // App 支持所有支付
  if (isH5()) return true // H5 通过跳转第三方支付
  return false
}

/**
 * 是否支持定位
 */
export const supportLocation = (): boolean => {
  return canIUse('getLocation')
}

/**
 * 是否支持扫码
 */
export const supportScanCode = (): boolean => {
  return canIUse('scanCode')
}

/**
 * 是否支持相机
 */
export const supportCamera = (): boolean => {
  if (isRN()) return true
  return canIUse('chooseImage') || canIUse('chooseMedia')
}

/**
 * 平台特性配置
 */
export const getPlatformFeatures = () => {
  return {
    platform: getPlatform(),
    isApp: isRN(),
    isMiniProgram: isMiniProgram(),
    isH5: isH5(),
    features: {
      payment: supportPayment(),
      location: supportLocation(),
      scanCode: supportScanCode(),
      camera: supportCamera()
    }
  }
}
