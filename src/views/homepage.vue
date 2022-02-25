<template>
  <div class="homepage">
    <el-main class="main">
      <div class="carouselimg">
        <!-- 轮播图 -->
        <div class="carouselpage">
          <Carousel :imgurl="imgurl"></Carousel>
        </div>
      </div>
      <div class="maincenterbox">
        <div class="maincenterboxtitle">珠宝类别</div>
        <div class="maincenterbox-items">
          <div class="maincenterbox-item" @click="imgbutton(1)">
            <img src="../assets/index/xianglian.png" alt="" />
            <!-- <img src="../assets/index/phone1.png"
                 alt=""
                 v-else /> -->
            <!-- <div class="itemtitle">项链</div> -->
          </div>
          <div class="maincenterbox-item" @click="imgbutton(2)">
            <img src="../assets/index/jiezhi.png" alt="" />
            <!-- <img src="../assets/index/phone2.png"
                 alt=""
                 v-else /> -->
            <!-- <div class="itemtitle">戒指</div> -->
          </div>
          <div class="maincenterbox-item" @click="imgbutton(5)">
            <img src="../assets/index/erhuan.png" alt="" />
            <!-- <img src="../assets/index/phone3.png"
                 alt=""
                 v-else /> -->
            <!-- <div class="itemtitle">耳环</div> -->
          </div>
        </div>
      </div>
      <div class="maincenter-new">
        <div class="productstitle">新品呈现</div>
        <div class="New-products">
          <div
            v-for="(item, index) in product.list"
            :key="index"
            class="productsitem"
            @click="routrtdatails(item.id)"
          >
            <div class="imgbox">
              <img :src="listfunction(item.images)" alt="" />
            </div>
            <div class="productsdate">
              <!-- <div class="productname">{{ item.number }}</div> -->
              <div class="productprice">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="Learn-more" @click="learnmore">
          <el-button class="button">了解更多</el-button>
        </div>
      </div>
      <!-- 设计师 -->
      <!-- <div class="mainbox">
        <div class="commodity"
             v-for="item in designer.stu"
             :key="item.id"
             @click="designerdetails(item)">
          <img :src="img + '/image/' + item.cover"
               style="width:100%"
               alt="" />
          <div class="morecommodity">{{ item.title }}</div>
        </div>
      </div> -->
    </el-main>
  </div>
</template>

<script lang="ts">
import Carousel from "../components/carousel.vue";
import router from "@/router";
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  onBeforeMount,
} from "vue";

export default defineComponent({
  name: "Home",
  components: { Carousel },
  setup() {
    const screenWidth = window.innerWidth;
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;
    const formatNumberRgx = getCurrentInstance()?.appContext.config
      .globalProperties.formatNumberRgx;
    const img = store.state.baseUrl;
    const imgurl = ref();
    const designer = reactive({ stu: [] });
    const product = reactive({ list: [] });
    onBeforeMount(() => {
      axios.get(store.state.baseUrl).then((response: any) => {
        console.log(response);
        if (response.data.code < 500) {
          //获取首页信息，轮播、设计师
          imgurl.value = response.data.data.carouselList;
          designer.stu = response.data.data.designerList;
        }
        console.log("4444", imgurl.value);
      });

      axios
        .get(store.state.baseUrl + "/jewelryList", {
          params: {
            pageNumber: 1,
            pageSize: 10,
            search: "",
          },
        })
        .then((res) => {
          res.data.data.list.forEach((element, index) => {
            if (index < 4) {
              product.list.push(element);
            }
          });
          console.log(product.list);
        });
    });
    // function designerdetails(params: any) {  //设计师接口
    //   console.log(params)
    //   router.push({
    //     path: '/designerdetails',
    //     query: { id: params.id, cover: params.cover },
    //   })
    // }

    function listfunction(params: string) {
      // 多张图片中取第一张
      const imgname = ref("");
      if (params !== undefined) {
        if (params.indexOf("|") == -1) {
          imgname.value = params;
        } else {
          imgname.value = params.split("|")[0];
        }
      }
      return img + "/image/" + imgname.value;
    }
    function imgbutton(params: number) {
      router.push({
        path: "/list",
        query: { mainStone: -1, stone: -1, type: params },
      });
    }
    function learnmore() {
      sessionStorage.setItem("pageitem", "1");
      router.push({
        path: "/list",
        query: { mainStone: -1, stone: -1, type: -1 },
      });
    }
    function routrtdatails(id) {
      router.push({ path: "/item", query: { id: id } });
    }
    return {
      img,
      imgurl,
      designer,
      // designerdetails,
      product,
      listfunction,
      learnmore,
      formatNumberRgx,
      imgbutton,
      routrtdatails,
      screenWidth,
    };
  },
});
</script>
<style scoped lang="scss">
.Learn-more {
  margin-bottom: 20px;
  .button:hover {
    border: 1px solid #0e2c4d;
    background-color: #fafafa;
  }
}
@media screen and (min-width: 360px) and (max-width: 768px) {
  .homepage {
    width: 100%;
    position: relative;
    .main {
      width: 100%;
      margin: auto;
      background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.1)
      );
      .carouselimg {
        width: 100%;
        margin: auto;
        ul {
          display: none;
        }
        .carouselpage {
          width: 100%;
        }
      }
      .mainbox {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 2vh auto 0;

        .commodity {
          width: 48%;
          height: 32vh;
          background-color: #fff;
          padding: 0 0 1.5vh 1.5vw;
          img {
            width: 100%;
            height: 86%;
          }
          .commoditybox {
            display: none;
          }
        }
        .commodity:last-of-type {
          display: none;
        }
      }
      .maincenterbox {
        width: 100%;
        margin: auto;
        text-align: center;
        color: #0e2c4d;
        .maincenterboxtitle {
          font-family: "微软雅黑";
          font-size: 16px;
          padding: 26px 0 18px;
        }
        .maincenterbox-items {
          width: 100%;

          .maincenterbox-item {
            // width: 480px;
            // height: 268px;
            margin: 0 20px 16px;
            position: relative;
            cursor: pointer;
            img {
              width: 100%;
            }
            .itemtitle {
              font-family: "微软细体";
              font-size: 23px;
              letter-spacing: 8px;
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 99;
            }
          }
        }
      }
      .maincenter-new {
        text-align: center;
        .productstitle {
          color: #0e2c4d;
          font-size: 16px;
          padding: 20px 0 18px;
        }
        .New-products {
          width: 100%;
          .productsitem {
            margin: auto;
            cursor: pointer;
            margin: 0 20px;
            position: relative;
            margin-bottom: 10px;

            .imgbox {
              width: 100%;
              background-color: #fff;
              // height: 400px;
              //  border: 1px solid #f6f6f6;
              box-shadow: -2px 0px 7px 0px #f1f1f1, 0px 0px 6px #f1f1f1;
              // border: 1px solid #000;
              img {
                border-radius: 6px;
                // height: 380px;
                height: 335px;
                object-fit: contain;
                width: 71%;
              }
            }

            .productsdate {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              font-size: 14px;
              padding: 14px 0 36px;
              .productname {
                padding-bottom: 5px;
              }
              .productprice {
                font-size: 15px;
                color: #0e2c4d;
                // font-weight: 550;
              }
            }
          }
        }
        .Learn-more {
          .button {
            padding: 10px 20px;
            color: #0e2c4d;
            border: 1px solid #0e2c4d;
            border-radius: 0px;
            font-size: 13px;
            margin: 20px 0 0;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1199px) {
  .homepage {
    width: 100%;
    position: relative;
    .main {
      margin: auto;
      padding: 0;
      .carouselimg {
        width: 100%;
        margin: auto;
        position: relative;
        ul {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          opacity: 50%;
          width: 16%;
          float: left;
          background: #919090;
          z-index: 99;
          margin: 0;
          list-style: none;
          padding: 0;
          .uldiv {
            margin: 50% auto 0;
            li {
              padding: 10px;
              cursor: pointer;
            }
            li:hover {
              box-shadow: inset -1px -2px 5px 0px rgb(247, 245, 245),
                inset 6px 5px 3px rgba(0, 0, 0, 0.2);
            }
          }
          div:hover {
            .hoverbox {
              display: inline-flex;
            }
          }
          .hoverbox {
            position: absolute;
            display: none;
            background: #000;
            top: 0;
            left: 100%;
            height: 100%;
            width: 100%;
            flex-wrap: wrap;
            flex-direction: column;
            .hoverdiv {
              height: 20%;
              cursor: pointer;
            }
          }
        }
        .carouselpage {
          width: 100%;
          height: 320px;
        }
      }
      .mainbox {
        width: 82%;
        // height: 500px;
        display: flex;
        flex-wrap: wrap;
        margin: 30px auto 0;
        justify-content: space-between;
        .commodity {
          width: 32%;
          overflow: hidden;
          cursor: pointer;
          // height: 300px;
          background-color: #fff;
          box-shadow: -3px -4px 5px 0px #f7f5f5, 6px 5px 3px rgb(0 0 0 / 20%);
          img {
            width: 100%;
          }
          img:hover {
            transform: scale(1.25);
            transition: all 0.5s;
          }
          .morecommodity {
            display: none;
          }
        }
      }
      .maincenterbox {
        width: 100%;
        margin: auto;
        text-align: center;
        .maincenterboxtitle {
          font-family: "微软雅黑";
          font-size: 18px;
          padding: 4vw 0 2.5vw;
        }
        .maincenterbox-items {
          // padding-bottom: 8.337vw;
          width: 80%;
          margin: auto;
          display: flex;
          .maincenterbox-item {
            // width: 480px;
            // height: 268px;
            width: 33.5%;
            cursor: pointer;
            // height: 13.966vw;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .itemtitle {
              font-family: "微软细体";
              font-size: 36px;
              letter-spacing: 8px;
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 99;
            }
          }
          .maincenterbox-item:nth-child(2n) {
            margin: 0 0.69%;
          }
        }
      }

      .maincenter-new {
        width: 80%;
        margin: auto;
        text-align: center;
        .productstitle {
          color: #0e2c4d;
          font-size: 18px;
          padding: 4vw 0 2.5vw;
        }
        .New-products {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .productsitem {
            cursor: pointer;
            width: 24.3%;
            position: relative;
            .imgbox {
              width: 100%;
              background-color: #fff;
              height: 20.94vw;
              // border: 1px solid #000;
              img {
                height: 100%;
                object-fit: contain;
                width: 100%;
              }
            }

            .productsdate {
              position: absolute;
              width: 100%;
              text-align: center;
              bottom: 0;
              left: 0;
              padding: 1.35vw 0 1.04vw;
              .productname {
                font-size: 14px;
                padding-bottom: 1.04vw;
              }
              .productprice {
                font-size: 15px;
                color: #0e2c4d;
              }
            }
          }
          .productsitem:not(:last-of-type) {
            margin-right: 0.69%;
          }
        }

        .Learn-more {
          padding: 1.563vw 0 0.52vw;

          .button {
            padding: 10px 20px;
            color: #000;
            border: 1px solid #000;
            border-radius: 0px;
            background-color: #fafafa;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
@media screen and (min-width: 1200px) {
  .homepage {
    width: 100%;
    position: relative;
    .main {
      margin: auto;
      padding: 0;
      background-color: #fafafa;
      .carouselimg {
        width: 100%;
        margin: auto;
        position: relative;
        ul {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          opacity: 50%;
          width: 16%;
          float: left;
          background: #919090;
          z-index: 99;
          margin: 0;
          list-style: none;
          padding: 0;
          .uldiv {
            margin: 50% auto 0;
            li {
              padding: 10px;
              cursor: pointer;
            }
            li:hover {
              box-shadow: inset -1px -2px 5px 0px rgb(247, 245, 245),
                inset 6px 5px 3px rgba(0, 0, 0, 0.2);
            }
          }
          div:hover {
            .hoverbox {
              display: inline-flex;
            }
          }
          .hoverbox {
            position: absolute;
            display: none;
            background: #000;
            top: 0;
            left: 100%;
            height: 100%;
            width: 100%;
            flex-wrap: wrap;
            flex-direction: column;
            .hoverdiv {
              height: 20%;
              cursor: pointer;
            }
          }
        }
        .carouselpage {
          width: 100%;
          height: 50vh;
        }
      }
      .mainbox {
        width: 82%;
        // height: 500px;
        display: flex;
        flex-wrap: wrap;
        margin: 30px auto 0;
        justify-content: space-between;
        .commodity {
          width: 32%;
          overflow: hidden;
          cursor: pointer;
          // height: 300px;
          background-color: #fff;
          box-shadow: -3px -4px 5px 0px #f7f5f5, 6px 5px 3px rgb(0 0 0 / 20%);
          img {
            width: 100%;
          }
          img:hover {
            transform: scale(1.25);
            transition: all 0.5s;
          }
          .morecommodity {
            display: none;
          }
        }
      }
      .maincenterbox {
        width: 100%;
        margin: auto;
        text-align: center;
        .maincenterboxtitle {
          font-family: "微软雅黑";
          font-size: 24px;
          padding: 4.17vw 0 2.61vw;
          color: #0e2c4d;
        }
        .maincenterbox-items {
          // padding-bottom: 8.337vw;
          width: 75.6%;
          margin: auto;
          display: flex;
          .maincenterbox-item {
            // width: 480px;
            // height: 268px;
            cursor: pointer;
            // width: 31.5%;
            // height: 13.966vw;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .itemtitle {
              font-family: "微软细体";
              font-size: 36px;
              letter-spacing: 8px;
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 99;
            }
          }
          .maincenterbox-item:nth-child(2n) {
            margin: 0 10px;
          }
        }
      }
      .maincenter-new {
        text-align: center;
        width: 75.6%;
        margin: auto;
        .productstitle {
          color: #0e2c4d;
          font-family: "微软雅黑";
          font-size: 24px;
          padding: 4.17vw 0 2.61vw;
        }
        .New-products {
          display: flex;
          justify-content: center;
          .productsitem {
            cursor: pointer;
            position: relative;
            width: 24.4%;
            .imgbox {
              width: 100%;
              background-color: #fff;
              // border: 1px solid #000;
              height: 100%;
              // padding-bottom: 114%;
              img {
                height: 100%;
                object-fit: contain;
                width: 100%;
              }
            }

            .productsdate {
              // padding: 1.35vw 0 1.04vw;
              padding: 1.36vw 0;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              color: #0e2c4d;
              // .productname {
              //   font-size: 14px;
              //   padding-bottom: 1.04vw;
              // }
              .productprice {
                font-size: 15px;
                color: #0e2c4d;
              }
            }
          }
          .productsitem:not(:last-of-type) {
            margin-right: 10px;
          }
        }
        .Learn-more {
          padding: 1.563vw 0 0.52vw;

          .button {
            width: 10.4229vw;
            height: 2.6vw;
            padding: 0;
            color: #000;
            // border: 1px solid #000;
            border-radius: 0px;
            background-color: #fafafa;
            border: 1px solid #0e2c4d;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 360px) and (max-width: 796px) {
  .homepage {
    .el-main {
      padding: 0;
    }
  }
}
@media screen and (min-width: 796px) {
}
</style>
