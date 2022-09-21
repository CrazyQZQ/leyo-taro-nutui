import axios, { AxiosRequestConfig, AxiosResponse } from 'taro-axios'
import Taro from '@tarojs/taro'
import { useLogin } from "@/store/index";
import { baseUrl } from '@/api/url'

// import { useRouter } from 'vue-router'
// 根据自身规范修改![](https://tva1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg)

const instance = axios.create({
    // 超时时间 1 分钟
    timeout: 30 * 1000,
    baseURL: baseUrl,
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const login = useLogin();
        if (login.authState.token.access_token) {
            config.headers.Authorization = `Bearer ${login.authState.token.access_token}`
        }
        return config
    }
)

const showToast = (title: string) => {
    Taro.showToast({
        title,
        icon: 'none',
        duration: 3000,
    })
}
// const showMessage = (title: unknown) => {
//     const message = JSON.stringify(title).replace(/"/g, '')
//     // TODO Request failed with status code 500 优化展示逻辑
//     if (message.indexOf('Network') > -1) {
//         showToast('请求失败，请联系客服')
//     } else if (message.indexOf('timeout') > -1) {
//         showToast('请求超时')
//     } else {
//         showToast(message)
//     }
// }
interface ApiResult<T> {
    code: number
    msg: string
    result: T
}
// Taro.showToast 和loading 是单例 所以只有成功时候hideLoading 其他情况showToast
export default function request<T>(options: AxiosRequestConfig = {}) {
    Taro.showLoading({
        title: '加载中...',
    })
    Taro.showNavigationBarLoading()
    return new Promise<T>((resolve, reject) => {
        instance(options)
            .then((response: AxiosResponse<ApiResult<T>>) => {
                if (response?.status === 200 && response?.data?.code === 200) {
                    resolve(response.data.data)
                    Taro.hideLoading()
                } else {
                    throw response
                }
            })
            .catch((result) => {
                // code == 200: success
                // code == 1000：业务异常
                // code == 1001：客户端认证失败
                // code == 1002：用户名或密码错误
                // code == 1003：不支持的认证模式
                // code == 1004: token失效、过期
                // code == 1005：无权限访问
                if (result?.status === 200) {
                    if(result?.data?.code === 1004){
                        showToast('登录过期')
                    }else{
                        showToast(result?.data?.msg || '系统繁忙，请稍后重试')
                    }
                } else {
                    // 其他情况 code 非 0 情况 有 message 就显示
                    showMessage('系统繁忙，请稍后重试')
                }
                reject(result)
            })
            .finally(() => {
                Taro.hideNavigationBarLoading()
            })
    })
}
