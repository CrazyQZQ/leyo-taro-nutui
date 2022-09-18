import request from '@/utils/request'

/**
 * 查询banners
 * @returns
 */
export const getBanners = () =>
  request({
    url: '/system/home/banners',
    method: 'get'
  })

/**
 * 获取公告
 * @returns
 */
export const getAnnouncement = () =>
  request({
    url: '/system/home/announcement',
    method: 'get'
  })
