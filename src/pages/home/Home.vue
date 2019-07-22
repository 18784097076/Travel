<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    Icons
  }
}
</script>

<style>

</style>
