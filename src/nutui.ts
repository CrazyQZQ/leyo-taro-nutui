import '@nutui/nutui-taro/dist/style.css'
import {
    Icon,
    Button,
    Toast,
    Tabbar,
    TabbarItem,
    Category,
    CategoryPane,
    Card,
    Tag,
    Price,
    Swiper,
    SwiperItem
} from '@nutui/nutui-taro'
import { App } from 'vue'
const setNutUi = (app: App) => {
    app.use(Icon)
    app.use(Button)
    app.use(Toast)
    app.use(Tabbar)
    app.use(TabbarItem)
    app.use(Category)
    app.use(CategoryPane)
    app.use(Card)
    app.use(Tag)
    app.use(Price)
    app.use(Swiper)
    app.use(SwiperItem)
}
export default setNutUi