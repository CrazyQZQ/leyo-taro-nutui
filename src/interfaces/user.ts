// 角色
export interface Role {
    roleId: number;
    roleName: string;
    roleKey: string;
    roleSort: number;
    dataScope: string;
    menuCheckStrictly: number;
    status: string;
    delFlag: string;
    createBy: string;
    createTime: string;
    updateBy: string;
    updateTime: string;
    remark: string;
}

// 用户
export interface User {
    userId: number;
    userName: string;
    nickName: string;
    email: string;
    phoneNumber: string;
    sex: string;
    avatar: string;
}

// 用户
export interface Token {
    access_token?: string;
    expires_in?: number;
    refresh_token?: string;
}

// 用户地址
export interface UserAddress {
    id?: number;
    userId: number;
    receiverName: string;
    receiverTel: string;
    defaultStatus: number;
    postCode: string;
    province: string;
    city: string;
    region: string;
    areaCode: string;
    detailAddress: string;
    fullAddress: string;
    updateBy?: string;
    updateTime?: string;
    createBy?: string;
    createTime?: string;
}

// 账户信息
export interface SysAccount {
    accountId: number;
    userId: number;
    accountCode: string;
    accountName: string;
    amount: number;
    updateBy?: string;
    updateTime?: string;
    createBy?: string;
    createTime?: string;
}