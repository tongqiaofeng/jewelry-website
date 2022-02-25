<template>
  <div class="details">
    <div class="detailsnav" style="display:none">
      <div class="navbar-main">
        <router-link to="/" style="color: #000;font-weight: bold;"
          >首页</router-link
        >
        <div style="display: flex;">
          <div
            style="margin: 0 6px;"
            v-if="
              carousellist.item.type !== -1 &&
                carousellist.item.type !== undefined
            "
          >
            /
          </div>
          <span>{{
            carousellist.item.type == 0
              ? "裸石"
              : carousellist.item.type == 1
              ? "项链"
              : carousellist.item.type == 2
              ? "戒指"
              : carousellist.item.type == 3
              ? "手链"
              : carousellist.item.type == 4
              ? "胸针"
              : carousellist.item.type == 5
              ? "耳环"
              : ""
          }}</span>
        </div>
        <div style="margin: 0 6px;">/</div>
        <div style="color: #777;">{{ carousellist.item.name }}</div>
      </div>
    </div>

    <div class="detailsbox">
      <div class="img-item">
        <transition name="fade">
          <loading v-if="isLoading"></loading>
        </transition>
        <Carouselcopy :imgurl="imgurllist.stu"></Carouselcopy>
      </div>
      <div class="text-item">
        <span class="ename">
          {{
            carousellist.item.seriesName != undefined
              ? carousellist.item.seriesName + "/"
              : ""
          }}{{ carousellist.item.name
          }}{{
            carousellist.item.number != undefined
              ? "/" + carousellist.item.number
              : ""
          }}
        </span>
        <div class="price">
          <span class="fuhao">￥</span
          ><span class="number">
            {{ formatNumberRgx(carousellist.item.price) }}</span
          >
        </div>
        <div class="item-button">
          <button class="el-button" onclick="Chatra('openChat',true)">
            咨询客服
          </button>
          <div class="addcar">
            <img
              v-show="favorite.list.indexOf(carousellist.item.id) == -1"
              class="phoneaddimg"
              @click="addcar(carousellist.item.id, 0)"
              src="../assets/index/hollow2.png"
            />
            <img
              v-show="favorite.list.indexOf(carousellist.item.id) !== -1"
              class="phoneaddimg"
              @click="addcar(carousellist.item.id, 1)"
              src="../assets/index/solid2.png"
            />
            <!-- <img v-show="favorite.list.indexOf(carousellist.item.id) == -1"
                 class="phoneaddimg2"
                 @click="addcar(carousellist.item.id,0)"
                 src="../assets/index/hollow2.png" />
            <img v-show="favorite.list.indexOf(carousellist.item.id) !== -1"
                 src="../assets/index/solid2.png"
                 @click="addcar(carousellist.item.id,1)"
                 class="phoneaddimg2" /> -->
          </div>
        </div>
        <div class="bigboxborder" style="display:inline-block">
          <div
            class="box"
            v-show="carousellist.item.stone != undefined || '' || null"
          >
            <span>宝石类型</span
            ><span
              v-for="(item, index) in GemcategoryList"
              :key="index"
              v-show="carousellist.item.stone == item.id"
              >{{ item.gem }}</span
            >
          </div>
          <div
            class="box"
            v-show="carousellist.item.opt != undefined || '' || null"
          >
            <span>净度优化</span><span>{{ carousellist.item.opt }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.heat != undefined || '' || null"
          >
            <span>热处理</span><span>{{ carousellist.item.heat }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.certificate != undefined || '' || null"
          >
            <span>证书类型</span
            ><span>{{ carousellist.item.certificate }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.clarity != undefined || '' || null"
          >
            <span>宝石净度</span><span>{{ carousellist.item.clarity }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.color != undefined || '' || null"
          >
            <span>宝石颜色</span><span>{{ carousellist.item.color }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.cut != undefined || '' || null"
          >
            <span>宝石切工</span><span>{{ carousellist.item.cut }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.fluorescence != undefined || '' || null"
          >
            <span>荧光程度</span
            ><span>{{ carousellist.item.fluorescence }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.measurements != undefined || '' || null"
          >
            <span>宝石尺寸</span
            ><span>{{ carousellist.item.measurements }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.place != undefined || '' || null"
          >
            <span>宝石产地</span><span>{{ carousellist.item.place }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.polish != undefined || '' || null"
          >
            <span>抛光程度</span><span>{{ carousellist.item.polish }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.shape != undefined || '' || null"
          >
            <span>切割形状</span><span>{{ carousellist.item.shape }}</span>
          </div>
          <div
            class="box"
            v-show="carousellist.item.weight != undefined || '' || null"
          >
            <span>宝石重量</span><span>{{ carousellist.item.weight }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dailstext">
      <div class="and">详情及描述</div>
      <div class="content" v-html="carousellist.item.content"></div>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import Carouselcopy from "./carousel-details.vue";
import loading from "@/login/loding.vue";
import {
  defineComponent,
  ref,
  getCurrentInstance,
  reactive,
  onUpdated,
} from "vue";
import { onBeforeRouteLeave } from "vue-router";
export default defineComponent({
  components: { Carouselcopy, loading },
  setup() {
    const formatNumberRgx = getCurrentInstance()?.appContext.config
      .globalProperties.formatNumberRgx;

    onUpdated(() => {
      const main: any = document
        .getElementsByClassName("content")[0]
        .getElementsByTagName("img");
      main.forEach((item) => {
        item.style.maxWidth = "100%";
        item.style.height = "auto";
      });
    });
    function goTop() {
      let currentPosition;
      const timer = ref();
      timer.value = setInterval(function() {
        currentPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 30;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer.value);
        }
      }, 1);
    }
    goTop();
    const GemcategoryList = reactive([
      { id: 0, gem: "钻石" },
      { id: 1, gem: "海蓝宝" },
      { id: 2, gem: "红宝石" },
      { id: 3, gem: "蓝宝石" },
      { id: 4, gem: "坦桑石" },
      { id: 5, gem: "祖母绿" },
      { id: 6, gem: "碧玺" },
      { id: 7, gem: "尖晶" },
      { id: 8, gem: "南洋珍珠" },
      { id: 9, gem: "大溪地珍珠" },
      { id: 10, gem: "紫珍珠" },
    ]);
    const isLoading = ref(true);
    const carouselid = getCurrentInstance()?.appContext.config.globalProperties
      .$route.query.id;
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;
    const message = getCurrentInstance()?.appContext.config.globalProperties
      .$message;
    const img = store.state.baseUrl;
    const imgurllist = reactive({ stu: [] });
    const carousellist = reactive({
      item: {
        certificate: "",
        color: "",
        content: "",
        cut: "",
        id: null,
        images: "",
        measurements: "",
        name: "",
        number: "",
        price: "",
        shape: "",
        stone: 1,
        type: 2,
        weight: "",
        opt: "",
        heat: "",
        seriesName: "",
        clarity: "",
        fluorescence: "",
        place: "",
        polish: "",
      },
    });
    const temp = ref([]);
    function jewelry() {
      axios
        .get(store.state.baseUrl + "/jewelry/" + carouselid)
        .then((response: any) => {
          console.log("详情");
          console.log(response);
          if (response.data.code < 500) {
            isLoading.value = false;
            document.documentElement.scrollTop = 0;
            carousellist.item = response.data.data;
            let dtitle = ""; //网站title
            if (response.data.data.seriesName != undefined) {
              dtitle = response.data.data.seriesName;
            }
            if (response.data.data.name != undefined) {
              dtitle += response.data.data.name;
            }
            if (response.data.data.number != undefined) {
              dtitle += "/" + response.data.data.number;
            }
            document.title = dtitle + " | 宝莉安娜珠宝 | PΛULIΛNΛ";
            // console.log(document.title)

            if (response.data.data.images != undefined) {
              temp.value.push(response.data.data.images.split("|"));
              // console.log(temp.value)
            }
            if (temp.value.length > 0) {
              temp.value.forEach((element: any) => {
                if (element.length > 0) {
                  element.forEach((e: any) => {
                    imgurllist.stu.push(e); //图片列表
                  });
                }
              });
              console.log("1111", imgurllist.stu);
            }
          }
        });
    }

    //   onBeforeRouteLeave((to,from,next)=>{
    //     console.log('onBeforeRouteLeave',to);
    //   if (to.path === '/list') {  //
    //     to.meta.keepAlive = true
    //     next()
    //   } else {
    //     next()
    //   }
    // })
    function start() {
      const favorite = reactive({ list: [] });
      jewelry();

      if (
        localStorage.getItem("token") == "" ||
        localStorage.getItem("token") == null ||
        localStorage.getItem("token") == "undefined" ||
        localStorage.getItem("token") == undefined
      ) {
        favorite.list = [];
        console.log("未登录状态");
      } else {
        axios.get(store.state.baseUrl + "/user/favoriteList").then((res) => {
          if (res.data.data == undefined) {
            favorite.list = [];
          } else {
            favorite.list = res.data.data;
          }
          console.log("favoriteList", res.data.data);
        });
      }

      return {
        favorite,
      };
    }
    const { favorite } = start();
    function likeitem(params: number) {
      router.push({ path: "/item", query: { id: params } });
    }
    function addcar(id: number, statu: number) {
      console.log(localStorage.getItem("token"));

      // if (
      //   localStorage.getItem('token') == '' ||
      //   localStorage.getItem('token') == null ||
      //   localStorage.getItem('token') == 'undefined' ||
      //   localStorage.getItem('token') == undefined
      // ) {
      //   message.warning({
      //     message: '登录后即可查看收藏列表',
      //   })
      //   // router.push('/login')
      // } else {
      axios
        .post(store.state.baseUrl + "/user/favoriteUpdate", {
          jewelry: id,
          status: statu,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code < 500) {
            axios
              .get(store.state.baseUrl + "/user/favoriteList")
              .then((res) => {
                if (statu == 0) {
                  message.success({
                    message: "收藏成功",
                    showClose: true,
                    duration: 2000,
                  });
                } else {
                  message.success({
                    message: "取消收藏",
                    showClose: true,
                    duration: 2000,
                  });
                }
                if (res.data.data != undefined) {
                  favorite.list = res.data.data;
                } else {
                  favorite.list = [];
                }
                console.log("favoriteList", res.data.data);
              });
          }
        });
      // }
    }
    function question() {
      console.log("kefu");
    }
    function returnfun() {
      router.go(-1);
    }
    return {
      axios,
      isLoading,
      GemcategoryList,
      store,
      img,
      carouselid,
      carousellist,
      imgurllist,
      returnfun,
      likeitem,
      addcar,
      favorite,
      question,
      message,
      formatNumberRgx,
    };
  },
});
</script>
<style lang="scss" scoped>
.details {
  background-color: #fff;
}
@media screen and (min-width: 360px) and (max-width: 796px) {
  .details {
    width: 100%;
    border-radius: 10px;
    margin: 0 auto;
    .return {
      display: none;
    }
    .detailsnav {
      height: 0px;
      line-height: 0px;
      .navbar-main {
        display: none;
      }
    }
    .detailsbox {
      width: 100%;
      .img-item {
        width: 100%;
      }
      .text-item {
        width: 89%;
        margin: 17px auto;
        text-align: left;
        position: relative;
        font-family: "微软雅黑";
        .ename {
          font-size: 18px;
          // height: 36px;
          line-height: 36px;
          word-break: break-all;
        }
        .price {
          color: #000;
          display: flex;
          height: 30px;
          line-height: 30px;
          font-size: 24px;
          flex-wrap: nowrap;
          margin-bottom: 20px;
        }
        .item-button {
          position: absolute;
          top: 36px;
          right: 0;
          display: flex;
          color: #fff;
          .el-button {
            display: none;
          }
          .addcar {
            border: none;
            display: flex;
            justify-self: center;
            align-content: center;
            align-items: center;
            cursor: pointer;
            width: 30px;
            height: 30px;

            img {
              width: 18px;
            }
          }
        }
        .bigboxborder {
          width: 100%;
          border-top: 1px solid #eee;
          .box {
            font-size: 15px;
            color: #000;
            line-height: 0.7;
            letter-spacing: 0;
            padding: 19px 0;
            border-bottom: 1px solid #eee;
            font-family: Santral W01;
            font-weight: 400;
            font-style: normal;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .dailstext {
      padding-bottom: 16px;
      width: 89%;
      margin: auto;
      margin-top: 18px;
      // border: 1px solid #eee;

      .and {
        font-size: 15px;
        color: #000;
        line-height: 1.71;
        letter-spacing: 0;
        font-family: Santral W01;
        // font-weight: 600;
        font-style: normal;
        padding-bottom: 8px;
        text-align: left;
        padding: 8px 0;
      }
      .content {
        font-size: 14px;
        margin-bottom: 16px;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
}
@media screen and (min-width: 796px) {
  .details {
    width: 100%;
    padding-top: 20px;
    .detailsbox {
      width: 67.16%;
      margin: 3.2vh auto;
      display: flex;
      .img-item {
        width: 40.22%;
        height: 38.68vw;
      }
      .text-item {
        width: 56%;
        padding-left: 3.126vw;
        .ename {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 1.25vw;
          word-break: break-all;
        }
        .price {
          color: #000;
          font-size: 1.87vw;
          font-family: Santral W01;
          font-weight: 400;
          padding: 4.26vh 0;
          .fuhao {
            font-size: 30px;
          }
          .number {
            font-size: 36px;
          }
        }
        .item-button {
          display: flex;
          .el-button {
            width: 11.04vw;
            height: 2.61vw;
            color: #000;
            padding: 0;
            margin: 0 1.04vw 1.04vw 0;
            border: 1px solid #000;
            cursor: pointer;
            border-radius: 0px;
          }
          .addcar {
            width: 2.61vw;
            height: 2.61vw;
            // background-color: #f1e1e6;
            border: 1px solid #000;
            position: relative;
            cursor: pointer;
            // .phoneaddimg {
            //   display: none;
            // }
            img {
              width: 50%;
              // height: 100%;
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              left: 50%;
            }
          }
        }
        .bigboxborder {
          border-top: 1px solid #eeeeee;
          width: 100%;
          .box {
            font-size: 14px;
            color: #aeaeae;
            letter-spacing: 0;
            padding: 20px 0;
            border-bottom: 1px solid #eeeeee;
            font-family: Santral W01;
            font-weight: 400;
            font-style: normal;
            span:first-of-type {
              margin-right: 40px;
            }
          }
        }
      }
    }
    .dailstext {
      padding-bottom: 16px;
      width: 67.16%;
      margin: auto;
      margin-top: 60px;
      border: 1px solid #eee;
      .and {
        font-size: 16px;
        color: #000;
        line-height: 1.71;
        letter-spacing: 0;
        font-family: Santral W01;
        font-weight: 600;
        font-style: normal;
        padding: 16px 0;
        text-align: left;
        width: 96%;
        margin: auto;
      }
      .content {
        width: 96%;
        margin: auto;
        margin-bottom: 16px;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
}
.detailsnav {
  background-color: #f1e1e6;
  width: 100%;
  height: 3.543vw;
  line-height: 3.543vw;
  .navbar-main {
    width: 70%;
    margin: auto;
    display: flex;
    font-size: 15px;
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 360px) and (max-width: 796px) {
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
