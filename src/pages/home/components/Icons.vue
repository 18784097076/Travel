<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl" alt="">
          <p class="icon-desc ellipsis">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //指示器
        loop: true //循环轮播
        //autoplay:3000
      },
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png",
          desc: "暑期夜场"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "成都必游"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "川剧变脸"
        },
        {
          id: "0005",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: "自然风光"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: "碧峰峡"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
          desc: "熊猫基地"
        },
        {
          id: "0009",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/57489034f410bdc823e7fa1b9e82dfd4.png",
          desc: "清凉一夏"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="scss" scoped>
// 宽高比2:1
.icons {
  height: 3.7rem;
  margin-top: 0.1rem;
  .icon {
    float: left;
    width: 25%;
    height: 1.6rem;
    text-align: center;
    padding-top: 0.1rem;
    box-sizing: border-box;
    .icon-img {
      width: 1.1rem;
    }
    .icon-desc {
      margin-top: 0.1rem;
      color: $darkTextColor;
    }
  }
  /deep/ .swiper-container {
    overflow: visible;
  }
  /deep/ .swiper-pagination {
    position: absolute;
    bottom: -0.30rem;
  }
}
</style>
