<template>
  <swiper
    :slides-per-view="1"
    :space-between="2"
    :autoplay="true"
    loop
    class="swiper"
  >
    <swiper-slide
      v-for="(e, index) in imgurl"
      :key="index"
      class="swiperslide"
      @click="routrtdatails(e.jewelry)"
    >
      <img :src="img + '/image/' + e.carousel" />
      <div class="font1 font" v-if="index == 0">
        <div class="one">高级的皇家蓝</div>
        <div class="two">“智慧与美貌”并存</div>
      </div>
      <div class="font2 font" v-else>
        <div class="one">圣玛利亚蓝</div>
        <div class="two">像是海边寄来的明信片</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
//需要哪个导入哪个
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
//这里导入对应样式
import "swiper/components/pagination/pagination.scss";

//导入后在SwiperCore.use([])里注册
SwiperCore.use([Pagination, Autoplay]);
export default {
  components: { Swiper, SwiperSlide },
  name: "product",
  data() {
    return {
      img: this.$store.state.baseUrl,
    };
  },
  props: ["imgurl"],
  methods: {
    routrtdatails(val) {
      //  console.log(this.imgurl);
      // console.log(val)
      this.$router.push({ path: "/item", query: { id: val } });
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 360px) and (max-width: 796px) {
  .swiper {
    width: 100%;
    margin: auto;

    .swiperslide {
      width: 100%;
      margin: auto;
      height: 250px;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        right: 66px;
        height: 250px;
        top: -10px;
        transform: scale(1.4);
      }
      .font1 {
        color: #0e2c4d;
        position: absolute;
        text-align: right;
        top: 76%;
        right: 5%;
        .one {
          font-size: 12px;
          letter-spacing: 1px;
        }
        .two {
          margin-top: 2px;
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
      .font2 {
        color: #0e2c4d;
        position: absolute;
        text-align: left;
        top: 78%;
        left: 5%;
        .one {
          font-size: 12px;
          letter-spacing: 1px;
        }
        .two {
          margin-top: 2px;
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
    }
  }
}
@media screen and (min-width: 796px) {
  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    margin: auto;
    position: relative;
    .swiperslide {
      width: 100%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        // height: 100%;
      }
      .font {
        position: absolute;
        top: 43%;
        left: 13%;
        .one {
          font-size: 23px;
          letter-spacing: 1px;
        }
        .two {
          margin-top: 20px;
          font-size: 14px;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 360px) and (max-width: 796px) {
  .swiper-slide {
    height: auto;
    overflow: hidden;
  }
}
@media screen and (min-width: 796px) {
  .swiper {
    position: relative;
    .swiperslide {
      height: auto;
      .font {
        position: absolute;
        top: 43%;
        left: 13%;
        p {
          font-size: 23px;
          letter-spacing: 1px;
        }
        div {
          margin-top: 20px;
          font-size: 14px;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
