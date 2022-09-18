
import request from '@/utils/request'

/**
 * 删除文件
 * @param data
 * @returns
 */
export const deleteFile = (data: Array<string>) =>
  request({
    url: '/system/file/delete',
    method: 'post',
    data
  })
