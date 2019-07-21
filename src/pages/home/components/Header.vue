<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主体</div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'
}
</script>

<style lang="scss" scoped>
.header{
  line-height: .86rem;    
  background-color:$bgColor;
  display: flex;
  color:#fff;
  .header-left{
    width: .64rem;
    float: left;
    text-align: center;
    .back-icon{
      font-size: .4rem;
    }
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon{
      font-size: .24rem;
      margin-left:-0.04rem;
    }
  }
  .header-input{
    flex:1;    
    background-color: #fff;
    border-radius: .1rem;
    line-height: .62rem;
    height: .62rem;
    padding-left:.2rem;
    margin-top:.12rem;
    margin-left: .2rem;
    color:#ccc;
  }
}
</style>

