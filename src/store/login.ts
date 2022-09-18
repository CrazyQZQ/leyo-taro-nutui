import { defineStore } from 'pinia'
import { User,Token } from '@/interfaces/user'

/**
 * 用户信息
 */
export interface IAuthState {
    userInfo: User
    token: Token
    isAuth: boolean
    selectedUserAddressId: Number
}

const useLogin = defineStore({
    /** 区分不通状态的唯一标识 */
    id: 'login',
    /** 状态 */
    state: () => ({
        authState: {
            userInfo: {
                userId: 0,
                userName: '',
                nickName: '',
                email: '',
                phoneNumber: '',
                sex: '',
                avatar: ''
            },
            token: {},
            isAuth: false,
            selectedUserAddressId: -1
        } as IAuthState
    }),
    actions: {
        login(authState: IAuthState) {
            this.authState = authState
        },
        logout(info: Taro.getSystemInfoSync.Result) {
            this.authState.userInfo = {
                userId: 0,
                userName: '',
                nickName: '',
                email: '',
                phoneNumber: '',
                sex: '',
                avatar: ''
            }
            this.authState.token = {}
            this.authState.isAuth = false
        },
    },
})
export { useLogin }
