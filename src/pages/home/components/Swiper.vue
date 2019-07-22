<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
           <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',   //指示器
        loop:true,           //循环轮播
        autoplay:3000
      },
      swiperList:[
        {id:'0001',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/9dd72b331a3cbdfc904f26f0050ce15b.jpg_750x200_98e33b22.jpg'},
        {id:'0002',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/483ad58e4319885ebc95bd3b2a0a8fbd.jpg_750x200_850ef75d.jpg'}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper{    //注意这个细节
  overflow: hidden;
  width:100%;
  height: 0;          //这里写31.25%是相对于父级的height
  padding-bottom: 26.7%;   //padding %是相对于元素的width
  background-color: #eee;  //图片未加载完
  .swiper-img {
    width: 100%;
  }
  /deep/ .swiper-pagination-bullet-active{  //样式穿透，修改指示器激活的样式
    background-color: #fff;
  }
}
</style>
