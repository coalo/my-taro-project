/**
 * 首页
 * 功能：轮播图、推荐商品、分类入口
 */

import { useState, useEffect } from 'react'
import { View, Swiper, SwiperItem, Image, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useAppSelector } from '../../store'// 引入 store
import { formatMoney } from '../../utils/format'// 引入格式化工具
import './index.scss'

// Mock 数据（实际项目中从 API 获取）
const mockBanners = [
  { 
    id: '1', 
    image: 'https://via.placeholder.com/750x400/FF6A3C/FFFFFF?text=Banner+1', 
    title: '新品推荐', 
    link: '', 
    type: 1, 
    sort: 1 
  },
  { 
    id: '2', 
    image: 'https://via.placeholder.com/750x400/1677FF/FFFFFF?text=Banner+2', 
    title: '限时优惠', 
    link: '', 
    type: 2, 
    sort: 2 
  },
  { 
    id: '3', 
    image: 'https://via.placeholder.com/750x400/52C41A/FFFFFF?text=Banner+3', 
    title: '会员专享', 
    link: '', 
    type: 3, 
    sort: 3 
  }
]

const mockCategories = [
  { id: '1', name: '奶茶', icon: '🧋' },
  { id: '2', name: '咖啡', icon: '☕' },
  { id: '3', name: '果茶', icon: '🍵' },
  { id: '4', name: '甜品', icon: '🍰' },
  { id: '5', name: '面包', icon: '🍞' }
]

const mockProducts = [
  {
    id: '1',
    name: '霸气芝士草莓1',
    subtitle: '新鲜草莓+醇厚芝士',
    coverImage: 'https://via.placeholder.com/300x300/FF6A3C/FFFFFF?text=Product+1',
    images: [],
    categoryId: '1',
    categoryName: '奶茶',
    price: 2800,
    originalPrice: 3200,
    sales: 999,
    stock: 100,
    specs: [],
    description: '精选新鲜草莓，搭配醇厚芝士，口感丰富',
    tags: ['新品', '推荐'],
    status: 1
  },
  {
    id: '2',
    name: '霸气杨梅',
    subtitle: '清爽杨梅+Q弹果肉',
    coverImage: 'https://via.placeholder.com/300x300/1677FF/FFFFFF?text=Product+2',
    images: [],
    categoryId: '1',
    categoryName: '奶茶',
    price: 2600,
    originalPrice: 2600,
    sales: 888,
    stock: 100,
    specs: [],
    description: '清爽杨梅，酸甜可口',
    tags: ['热销'],
    status: 1
  },
  {
    id: '3',
    name: '生椰拿铁',
    subtitle: '椰香浓郁+咖啡醇香',
    coverImage: 'https://via.placeholder.com/300x300/52C41A/FFFFFF?text=Product+3',
    images: [],
    categoryId: '2',
    categoryName: '咖啡',
    price: 2400,
    originalPrice: 2400,
    sales: 666,
    stock: 100,
    specs: [],
    description: '椰香与咖啡的完美结合',
    tags: ['推荐'],
    status: 1
  },
  {
    id: '4',
    name: '芋泥啵啵奶茶',
    subtitle: '香浓芋泥+珍珠',
    coverImage: 'https://via.placeholder.com/300x300/FAAD14/FFFFFF?text=Product+4',
    images: [],
    categoryId: '1',
    categoryName: '奶茶',
    price: 2200,
    originalPrice: 2200,
    sales: 555,
    stock: 100,
    specs: [],
    description: '香浓芋泥，Q弹珍珠',
    tags: ['热销'],
    status: 1
  }
]

export default function Index() {
  const [banners, setBanners] = useState<any[]>([])// 轮播图
  const [categories, setCategories] = useState<any[]>([])// 分类  
  const [products, setProducts] = useState<any[]>([])// 商品
  const [loading, setLoading] = useState(false)// 加载状态
  
  const cartCount = useAppSelector(state => state.cart.totalCount)

  // 页面加载时加载数据
  useEffect(() => {
    loadData()
  }, [])

  // 加载数据// 获取轮播图数据// 获取分类数据// 获取推荐商品数据
  const loadData = async () => {
    try {
      setLoading(true)
      // TODO: 实际项目中调用 API
      // const res = await Promise.all([
      //   getBanners(),
      //   getCategories(),
      //   getRecommendedProducts()
      // ])
      
      // 模拟延迟
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setBanners(mockBanners)
      setCategories(mockCategories)
      setProducts(mockProducts)
    } catch (error) {
      Taro.showToast({
        title: '加载失败',
        icon: 'none'
      })
    } finally {
      setLoading(false)
    }
  }

  // 跳转到商品详情
  const goToProductDetail = (id: string) => {
    Taro.navigateTo({
      url: `/pages/product-detail/index?id=${id}`
    })
  }

  // 跳转到分类页
  const goToCategory = (categoryId: string) => {
    Taro.switchTab({
      url: `/pages/category/index?id=${categoryId}`
    })
  }

  // 跳转到购物车
  const goToCart = () => {
    Taro.switchTab({
      url: '/pages/cart/index'
    })
  }

  return (
    <View className='home-page'>
      <ScrollView scrollY className='home-scroll'>
        {/* 轮播图 */}
        <View className='banner-section'>
          <Swiper
            className='banner-swiper'
            indicatorDots
            autoplay
            interval={3000}
            circular
          >
            {banners.map(banner => (
              <SwiperItem key={banner.id}>
                <Image
                  src={banner.image}
                  className='banner-image'
                  mode='aspectFill'
                />
              </SwiperItem>
            ))}
          </Swiper>
        </View>

        {/* 分类入口 */}
        <View className='category-section'>
          {categories.map(category => (
            <View
              key={category.id}
              className='category-item'
              onClick={() => goToCategory(category.id)}
            >
              <View className='category-icon'>{category.icon}</View>
              <Text className='category-name'>{category.name}</Text>
            </View>
          ))}
        </View>

        {/* 推荐商品 */}
        <View className='product-section'>
          <View className='section-header'>
            <Text className='section-title'>为你推荐</Text>
          </View>
          <View className='product-list'>
            {products.map(product => (
              <View
                key={product.id}
                className='product-card'
                onClick={() => goToProductDetail(product.id)}
              >
                <Image
                  src={product.coverImage}
                  className='product-image'
                  mode='aspectFill'
                />
                {product.tags && product.tags.length > 0 && (
                  <View className='product-tags'>
                    {product.tags.map((tag: string, index: number) => (
                      <View key={index} className='product-tag'>{tag}</View>
                    ))}
                  </View>
                )}
                <View className='product-info'>
                  <Text className='product-name' numberOfLines={2}>{product.name}</Text>
                  <Text className='product-subtitle' numberOfLines={1}>{product.subtitle}</Text>
                  <View className='product-footer'>
                    <View className='product-price'>
                      <Text className='price-current'>¥{formatMoney(product.price)}</Text>
                      {product.originalPrice > product.price && (
                        <Text className='price-original'>¥{formatMoney(product.originalPrice)}</Text>
                      )}
                    </View>
                    <Text className='product-sales'>已售{product.sales}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 购物车浮动按钮 */}
      {cartCount > 0 && (
        <View className='cart-float-btn' onClick={goToCart}>
          <Text className='cart-icon'>🛒</Text>
          {cartCount > 0 && <View className='cart-badge'>{cartCount}</View>}
        </View>
      )}
    </View>
  )
}
