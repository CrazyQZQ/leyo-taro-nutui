import request from '@/utils/request'
import { Product } from '@/types/product'

/**
 * 查询品类列表
 * @returns
 */
export const typeList = (params: any) =>
  request({
    url: '/product/type/list',
    method: 'get',
    params
  })

/**
 * 查询品类数
 * @returns
 */
export const typeTree = () =>
  request({
    url: '/product/type/tree',
    method: 'get'
  })

/**
 * 查询品牌列表
 * @returns
 */
export const brandList = (params: any) =>
  request({
    url: '/product/brand/list',
    method: 'get',
    params
  })

/**
 * 查询品牌数
 * @returns
 */
export const brandTree = () =>
  request({
    url: '/product/brand/tree',
    method: 'get'
  })

/**
 * 查询商品列表
 * @param params
 */
export const productList = (params: any) =>
  request({
    url: '/product/list',
    method: 'get',
    params
  })

/**
 * 查询商品详情
 * @param params
 */
export const productInfo = (params: any) =>
  request({
    url: '/product/info',
    method: 'get',
    params
  })

/**
 * 新增商品
 * @param data
 */
export const addProduct = (data: Product) =>
  request({
    url: '/product/add',
    method: 'put',
    data
  })

/**
* 修改商品
* @param data
*/
export const updateProduct = (data: Product) =>
  request({
    url: '/product/update',
    method: 'post',
    data
  })

/**
 * 查询sku列表
 * @returns
 */
export const getSkuList = (params: any) =>
  request({
    url: '/product/sku/list',
    method: 'get',
    params
  })

/**
 * 查询属性
 * @returns
 */
export const getAttributeList = () =>
  request({
    url: '/product/attribute/list',
    method: 'get'
  })
