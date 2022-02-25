<template>
  <div class="swiper-container">
    <swiper
      :slides-per-view="1"
      @slideChangeTransitionEnd="handleClickSlide"
      v-if="tempimgurl.length"
      :loop="phonewidth > 796 ? false : tempimgurl.length > 1 ? true : false"
      id="viewerjs"
      :class="phonewidth > 796 ? 'swiper-no-swiping swiper' : 'swiper'"
    >
      <swiper-slide
        v-for="(e, index) in tempimgurl"
        :key="index"
        @mouseover="mouse"
        class="swiperslide"
      >
        <!-- pc -->
        <pic-zoom
          class="img"
          v-if="phonewidth > 796"
          style="top:0;"
          :scale="3"
          :url="img + '/image/' + e"
        >
        </pic-zoom>
        <!-- phone -->
        <img
          v-else
          @click="imgpre(index)"
          class="phoneimg"
          :src="img + '/image/' + e"
        />
      </swiper-slide>
    </swiper>
    <ul v-show="phonewidth < 796">
      <li
        v-for="(e, num) in tempimgurl"
        :key="num"
        :style="{ backgroundColor: num == page2 ? '#c2c1c1' : '#f1f1f1' }"
      ></li>
    </ul>
    <!-- pc端放大镜下缩略图 -->
    <div class="carousel-buttom">
      <div
        class="arrow"
        :style="{ cursor: imgurl.length > 5 ? 'pointer' : 'inherit' }"
      >
        <img
          src="../assets/index/left.png"
          alt=""
          class="left"
          @click="clickfun(1)"
        />
      </div>
      <div id="buttomitemout">
        <div class="buttomitem" id="buttomitem">
          <div class="buttom-item" v-for="(e, index) in imgurl" :key="index">
            <img
              class="img"
              :src="img + '/image/' + e"
              alt=""
              @click="showimg(e)"
            />
          </div>
        </div>
      </div>
      <div class="arrow">
        <img
          src="../assets/index/right.png"
          alt=""
          class="right"
          @click="clickfun(2)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
//需要哪个导入哪个
import SwiperCore, { Pagination, Autoplay, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
//这里导入对应样式
import "swiper/components/pagination/pagination.scss";
import "swiper/components/zoom/zoom.scss";
import PicZoom from "vue-piczoom";

//导入后在SwiperCore.use([])里注册
SwiperCore.use([Pagination, Autoplay, Zoom]);
export default {
  components: { Swiper, SwiperSlide, PicZoom },
  name: "product",
  data() {
    return {
      img: this.$store.state.baseUrl,
      tempimgurl: [],
      num: 1,
      pxnum: 0,
      play: true,
      phonewidth: window.innerWidth,
      page2: 0,
      bianliang: "",
      buttontf: false,
    };
  },
  props: ["imgurl"],
  mounted() {
    this.tempimgurl = this.imgurl;

    console.log("轮播图组件", this.imgurl);
    if (this.imgurl.length / 5 > 1) {
      document.getElementsByClassName("left")[0].style.cursor = "pointer";
    }
  },
  computed: {},
  methods: {
    handleClickSlide(index) {
      //移动端ul圆点样式
      console.log(index);
      if (index.activeIndex == 6) {
        this.page2 = 0;
      } else {
        this.page2 = index.activeIndex - 1;
      }
    },
    mouse() {
      //pc端放大镜效果优化
      const canv = document.getElementsByClassName("mouse-cover-canvas");
      if (window.innerWidth > 796) {
        canv.forEach((element) => {
          element.style.top = 140 + "px";
          element.style.left = 44 + "%";
          element.style.backgroundColor = "#fff";
        });
      } else {
        canv.forEach((element) => {
          element.style.display = "none";
        });
      }
      const cover = document.getElementsByClassName("mouse-cover");
      cover.forEach((element) => {
        element.style.backgroundColor = "rgba(0,0,0,0)";
      });
    },
    showimg(val) {
      //pc端点击切换显示图片
      this.tempimgurl = [];
      this.tempimgurl.push(val);
      if (this.tempimgurl.length == 1) {
        this.play = false;
      }
    },
    clickfun(val) {
      //pc端 bottom图片 左右点击按钮切换图片
      // 判断div左右移动
      const getElement = document.getElementById("buttomitem").style;
      const classleft = document.getElementsByClassName("left")[0].style;
      const classright = document.getElementsByClassName("right")[0].style;
      const count = this.imgurl.length / 5;
      if (val == 1 && count > 1 && this.num < count) {
        this.pxnum = -23.5 + this.pxnum;
        getElement.marginLeft = this.pxnum + "vw";
        this.num++;
        console.log("左", this.pxnum);
      } else if (val == 2 && count > 1 && this.num > 1) {
        console.log(this.pxnum);
        this.pxnum = 23.5 + this.pxnum;
        getElement.marginLeft = this.pxnum + "vw";
        this.num--;
        console.log("右", this.pxnum);
      }
      //左右点击事件手性判断
      if (this.num < parseInt(count)) {
        // console.log('1111111111')
        classleft.cursor = "pointer";
      }
      if (this.num > 1 && count > 1) {
        // console.log('2222222222')
        classright.cursor = "pointer";
      }
      if (this.num == 1) {
        // console.log('3333333333')
        classright.cursor = "auto";
        if (count > 1) {
          classleft.cursor = "pointer";
          // console.log('555555555')
        }
      }
      if (this.num == parseInt(count + 1)) {
        // console.log('4444444')
        classleft.cursor = "auto";
      }
    },
    imgpre(num) {
      //移动端 触发图片预览组件
      if (window.innerWidth < 796) {
        this.buttontf = true; //预览组件关闭按钮

        this.bianliang = new Viewer(document.getElementById("viewerjs"), {
          navbar: true,
          title: false,
          loop: false,
          movable: true,
          button: this.buttontf,
          // transition:true,
          toolbar: {
            prev: true,
            next: true,
          },
          viewed: function(e) {
            this.buttontf = false;
            console.log("prev", e);
          },
        });
        console.log("变量", this.bianliang);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 360px) and (max-width: 796px) {
  .swiper {
    width: 100vw;
    height: 100vw;
    margin: 10px auto;
    // overflow: hidden;
    .swiperslide {
      width: 100vw;
      height: 100vw;
      margin: auto;
      // overflow: hidden;
      .img {
        width: 100vw;
        height: 100%;
        object-fit: contain;
      }
      .phoneimg {
        width: 100vw;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  ul {
    width: 100%;
    height: 6px;
    bottom: 38px;
    position: absolute;
    list-style: none;
    // display: none;
    display: flex;
    justify-content: center;
    z-index: 99;
    li {
      background-color: #c2c1c1;
      width: 6px;
      border-radius: 50%;
      margin-left: 3px;
    }
  }

  .previewindex {
    z-index: 2001;
    width: 100vw;
    position: fixed;
    bottom: 100px;
    color: #fff;
    text-align: center;
  }
  .clickimg {
    display: none;
  }
  .carousel-buttom {
    display: none;
  }
  #viewerjs {
    img {
      width: 100vw;
    }
  }
}
@media screen and (min-width: 796px) {
  .swiper {
    width: 26.52vw;
    height: 26.52vw;
    cursor: pointer;
    margin: auto;
    .swiperslide {
      margin: auto;
      .img {
        height: 26.52vw;
        width: 26.52vw;
        object-fit: contain;
      }
    }
  }
  .clickimg {
    width: 26.52vw;
    height: 26.52vw;
    img {
      object-fit: contain;
      width: 26.52vw;
      height: 26.52vw;
    }
  }
  .carousel-buttom {
    padding: 10px 0 48px;
    height: 4vw;
    margin: 0 auto;
    width: 26.52vw;
    display: flex;
    justify-content: center;
    position: relative;
    .arrow {
      img {
        width: 8px;
        height: 3.96vw;
        object-fit: contain;
      }
      .left {
        position: absolute;
        left: 0;
        padding-right: 20px;
      }
      .right {
        position: absolute;
        right: 0;
        padding-left: 20px;
      }
    }
    #buttomitemout {
      overflow-x: scroll;
      overflow-y: hidden;
      height: 5.5vw;
      width: 23.5vw;
      margin: 0 auto;
      padding-bottom: 1.04vw;
      .buttomitem {
        // height: 3.96vw;
        // width: 446px;
        display: flex;
        flex-wrap: nowrap;
        .buttom-item {
          width: 3.96vw;
          margin: auto 0;
          height: 3.96vw;
          border: 1px solid #ddd;
          img {
            object-fit: contain;
            height: 3.96vw;
            width: 3.96vw;
            cursor: pointer;
          }
        }
        .buttom-item:not(:last-child) {
          margin-right: 0.7295vw;
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 796px) {
  .swiper {
    .swiper-slide {
      margin: auto;
    }
  }
}
.viewer-canvas {
  background-color: #000;
}
</style>
