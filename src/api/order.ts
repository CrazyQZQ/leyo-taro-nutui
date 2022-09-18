import request from '@/utils/request'

/**
 * 获取订单列表
 * @param params
 */
export const getOrderList = (params: object) =>
  request({
    url: '/order/list',
    method: 'get',
    params: params
  })

/**
 * 保存订单
 * @param params
 */
export const saveOrder = (data: object) =>
  request({
    url: '/order/saveOrder',
    method: 'post',
    data
  })

/**
 * 获取购物车列表
 * @returns
 */
export const getShopingCartItems = (params: object) =>
  request({
    url: '/order/cart/list',
    method: 'get',
    params: params
  })

/**
 * 添加购物车
 * @param params
 */
export const addCartItem = (data: object) =>
  request({
    url: '/order/cart/add',
    method: 'post',
    data
  })

/**
 * 修改购物车商品数量
 * @param params
 */
export const updateCartItemNum = (params: object) =>
  request({
    url: '/order/cart/update',
    method: 'post',
    params
  })

/**
 * 删除购物车商品
 * @param params
 */
export const deleteCartItem = (params: object) =>
  request({
    url: '/order/cart/delete',
    method: 'delete',
    params
  })

/**
 * 查询热卖商品
 */
export const hotSales = () =>
  request({
    url: '/order/hotSales',
    method: 'get'
  })

/**
 * 查询订单各种状态数量
 */
export const getStatusCount = (params: object) =>
  request({
    url: '/order/getStatusCount',
    method: 'get',
    params
  })
