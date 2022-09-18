export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/mine/index'
  ],
  tabBar:{
    // 自定义 tabBar
    custom: false,
    // tab 上的文字默认颜色
    color: "#707070",
    // tab 上的文字选中时的颜色，仅支持十六进制颜色
    selectedColor: "#d81e06",
    // tab 的背景色，仅支持十六进制颜色
    // backgroundColor: "#000000",
    // tabbar 上边框的颜色， 仅支持 black / white
    // borderStyle: "",
    list:[
      {
        pagePath:"pages/index/index",
        text:"首页",
        // 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon。
        iconPath: "images/home.png",
        // 选中时的图片路径
        selectedIconPath: "images/home-a.png"
      },
      {
        pagePath:'pages/category/index',
        text:"分类",
        iconPath: "images/category.png",
        selectedIconPath: "images/category-a.png"
      },
      {
        pagePath:"pages/cart/index",
        text:"购物车",
        iconPath: "images/cart.png",
        selectedIconPath: "images/cart-a.png"
      },
      {
        pagePath:"pages/mine/index",
        text:"我的",
        iconPath: "images/mine.png",
        selectedIconPath: "images/mine-a.png"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
