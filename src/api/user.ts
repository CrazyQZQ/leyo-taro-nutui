import request from '@/utils/request'

export const login = async (data: any) =>
    await request<any>({
        url: '/system/client_login',
        method: 'post',
        data
    })

