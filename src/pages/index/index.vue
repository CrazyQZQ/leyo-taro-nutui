<template>
  <view class="index">
    <view>
      <nut-swiper init-page="1" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <view class="btn">

    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = () => {
      Taro.navigateTo({
        url: `/pages/mine/index`
      });
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
