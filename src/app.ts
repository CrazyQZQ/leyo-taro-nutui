import { createApp } from 'vue'
import setNutUi from './nutui'
import { setupStore, useSystem } from '@/store/index'
import Taro from '@tarojs/taro'
import './app.scss'
// import VConsole from 'vconsole';

// const vConsole = new VConsole();
const App = createApp({
  // 对应 onLaunch
  onLaunch(options) {
    // 将启动参数放进到全局去
    const system = useSystem()
    system.init(options)
    system.setInfo(Taro.getSystemInfoSync())
  },
  onShow (options) {},
  // 对应 onHide
  onHide() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

setNutUi(App)
setupStore(App)
export default App
