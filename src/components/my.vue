<template>
  <div class="mymessage">
    <div class="collection-title">
      用户信息 <el-button @click="outlogin">退出登录</el-button>
    </div>
    <div class="collection-box">
      <div class="collection-box-top">
        <div
          class="Subhead"
          v-show="topshow == 1"
          @click="clicktop(1)"
          :style="{
            fontWeight: topshow == 1 ? 'bold' : 'normal',
            borderBottom: topshow == 1 ? '1px solid #000' : 'none',
          }"
        >
          用户信息
        </div>
        <div
          class="Subhead"
          @click="clicktop(2)"
          :style="{
            fontWeight: topshow == 2 ? 'bold' : 'normal',
            borderBottom: topshow == 2 ? '1px solid #000' : 'none',
          }"
        >
          收藏列表
        </div>
        <div
          class="Subhead"
          @click="clicktop(3)"
          :style="{
            fontWeight: topshow == 3 ? 'bold' : 'normal',
            borderBottom: topshow == 3 ? '1px solid #000' : 'none',
          }"
        >
          购买记录
        </div>
      </div>
      <div class="collection-box-content" v-if="topshow == 4">
        <div class="content">
          <div>手机号：</div>
          <input type="text" />
        </div>
        <div class="content">
          <div>用户名：</div>
          <input type="text" />
        </div>
        <div class="content">
          <div>出生日期：</div>
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </div>
        <div class="content">
          <div>您的性别：</div>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <div class="collection-box-bottom">
          <el-button>修改</el-button>
        </div>
      </div>
      <div class="collection-box-content2" v-if="topshow == 2">
        <transition name="fade">
          <loading v-if="isLoading"></loading>
        </transition>
        <div class="collectionbox" v-if="collectlist.list.length > 0">
          <!-- <collection  :message="msg"></collection> -->
          <div class="collectionlist">
            <div
              class="collectionimgbox"
              v-for="(item, index) in collectlist.list"
              :key="index"
            >
              <img
                class="iimg"
                src="../assets/index/solid2.png"
                alt=""
                @click="deletcollect(item.id)"
              />
              <div class="imgdiv">
                <div class="imgbox" @click="templateac(item.id)">
                  <img :src="listfunction(item.images)" alt="" />
                </div>
              </div>
              <div class="collection-info">
                <!-- <div class="collectionnumber">{{ item.number }}</div> -->
                <div class="collectionname">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else style="padding: 20px 0;text-align:center;">
          暂无收藏
        </div>
      </div>
      <div class="collection-box-content3" v-if="topshow == 3">
        <el-table :data="tableData" border class="eltable" style="width: 100%">
          <el-table-column label="商品">
            <template #default="scope">
              <div style="cursor: pointer;">
                <div @click="templateac(scope.row.jewelryId)">
                  {{ scope.row.jewelryName }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格(￥)"> </el-table-column>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <!-- <el-table-column label="详情">
            <template #default="scope">
              <div style="cursor: pointer;">
                <i class="el-icon-edit"></i>
                <el-button @click="templateac(scope.row.jewelryId)">查看</el-button>
              </div>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import loading from "@/login/loding.vue";
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";

export default defineComponent({
  name: "my",
  components: { loading },
  setup() {
    const radio = ref("1");
    const topshow = ref(2);
    const isLoading = ref(true);
    if (
      getCurrentInstance()?.appContext.config.globalProperties.$route.query
        .topshow == 2
    ) {
      topshow.value = 2;
    }
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;
    const img = store.state.baseUrl;
    const message = getCurrentInstance()?.appContext.config.globalProperties
      .$message;
    const msg = ref(22);
    const collect = reactive({ list: [] });
    const collectlist = reactive({ list: [] });
    const tableData = reactive([]);

    function clicktop(params: number) {
      //顶部点击切换页面事件
      topshow.value = params;
      tableData.length = 0;
      if (params == 3) {
        //购买记录
        axios.get(img + "/user/receiptList").then((res) => {
          if (res.data.data != undefined) {
            res.data.data.forEach((element) => {
              tableData.push(element);
            });
          }
        });
        console.log("tableData", tableData);
      }
    }
    function outlogin() {
      //退出登录
      localStorage.removeItem("token");
      router.push("/login");
    }
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
    function start() {
      collectlist.list = [];
      axios.get(store.state.baseUrl + "/user/favoriteList").then((res) => {
        isLoading.value = false;
        collect.list = res.data.data;
        if (collect.list != undefined) {
          for (let i = 0; i < collect.list.length; i++) {
            axios
              .get(store.state.baseUrl + "/jewelry/" + collect.list[i])
              .then((res) => {
                console.log("展示收藏", res.data.data);
                collectlist.list.push(res.data.data);
              });
          }
        }
      });
      return { collectlist };
    }
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
      // console.log(img + '/image/' + imgname.value)
      return img + "/image/" + imgname.value;
    }
    function deletcollect(params) {
      axios
        .post(store.state.baseUrl + "/user/favoriteUpdate", {
          jewelry: params,
          status: 1,
        })
        .then((res) => {
          console.log("收藏列表", res);

          message.success({
            message: "取消收藏",
            showClose: true,
            duration: 2000,
          });
          isLoading.value = true;
          start();
        });
      console.log("删除商品");
    }
    start();
    goTop();
    function templateac(params) {
      //跳转详情
      router.push({ path: "/item", query: { id: params } });
    }
    return {
      topshow,
      clicktop,
      isLoading,
      goTop,
      outlogin,
      radio,
      msg,
      deletcollect,
      // start,
      img,
      collectlist,
      listfunction,
      tableData,
      templateac,
      message,
    };
  },
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .mymessage {
    width: 92%;
    background-color: #fafafa;
  }
  .collection-title {
    font-size: 20px;
    .el-button {
      font-size: 12px;
      padding: 0;
    }
  }
  // .collection-box-content3 {
  //   .el-button {
  //     padding: 4px 8px;
  //   }
  // }
  .collectionbox {
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 20px;
      .collectionimgbox {
        width: 48%;
        margin-top: 10px;
        // box-sizing: border-box;
        position: relative;
        background-color: #fff;
        .iimg {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 16px;
          z-index: 9999;
        }
        .imgdiv {
          width: 100%;
          position: relative;
          margin: 0 auto;
          overflow: hidden;
          padding-bottom: 100%;
          // border: 1px solid #000;
          box-sizing: border-box;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 86%;
            height: 86%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 10px 0;
          // background-color: #f6f6f6;
          // margin-bottom: 5px;
          // height: 60px;
          text-align: center;
          // display: flex;
          // flex-direction: column;
          justify-content: center;
          .collectionname {
            font-weight: 500;
            font-size: 14px;
          }
          .collectionnumber {
            margin-top: 10px;
            font-size: 12px;
            color: #555;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1199px) {
  .mymessage {
    width: 80%;
    background-color: #fafafa;
  }
  // .collection-box-content3 {
  //   .el-button {
  //     padding: 6px 12px;
  //   }
  // }
  .collectionbox {
    margin: 20px auto;
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      .collectionimgbox {
        position: relative;
        width: 31%;
        margin-right: 0.69%;
        margin-top: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .iimg {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 16px;
          height: 16px;
          z-index: 9999;
          cursor: pointer;
        }
        .imgdiv {
          width: 100%;
          // height: 257px;
          margin: 0 auto;
          position: relative;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          height: 0;
          padding-bottom: 100%;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 86%;
            height: 86%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.36vw 0;
          color: #0e2c4d;
          .collectionnumber {
            margin-top: 10px;
            // font-size: 13px;
            color: #555;
          }
          .collectionname {
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .mymessage {
    width: 75%;
    background-color: #fafafa;
  }
  // .collection-box-content3 {
  //   .el-button {
  //     padding: 8px 16px;
  //   }
  // }
  .collectionbox {
    margin: 20px auto;
    // width: 99%;
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      .collectionimgbox {
        position: relative;
        width: 32%;
        margin-right: 0.69%;
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .iimg {
          position: absolute;
          top: 12px;
          right: 14px;
          width: 18px;
          z-index: 9999;
          cursor: pointer;
        }
        .imgdiv {
          width: 100%;
          // height: 257px;
          margin: 0 auto;
          position: relative;
          height: 0;
          padding-bottom: 100%;
          // border: 1px solid #000;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 86%;
            height: 86%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.36vw 0;
          // height: 83px;
          // margin: 0 auto;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          text-align: center;
          font-size: 15px;
          .collectionnumber {
            margin-top: 10px;
            font-size: 14px;
            color: #555;
          }
          .collectionname {
            font-weight: bold;
          }
        }
      }
      .collectionimgbox:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
}
@media screen and (min-width: 1401px) and (max-width: 1600px) {
  .mymessage {
    width: 75%;
    background-color: #fafafa;
  }
  // .collection-box-content3 {
  //   .el-button {
  //     padding: 10px 20px;
  //   }
  // }
  .collectionbox {
    margin: 20px auto;
    width: 99%;
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      .collectionimgbox {
        position: relative;
        width: 24.4%;
        margin-right: 0.69%;
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .iimg {
          position: absolute;
          top: 12px;
          right: 14px;
          width: 19px;
          z-index: 9999;
          cursor: pointer;
        }
        .imgdiv {
          width: 100%;
          // height: 257px;
          margin: 0 auto;
          position: relative;
          height: 0;
          padding-bottom: 100%;
          // border: 1px solid #000;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 86%;
            height: 86%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.36vw 0;
          // height: 83px;
          // margin: 0 auto;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // background-color: #f6f6f6;
          text-align: center;
          .collectionnumber {
            margin-top: 10px;
            color: #555;
          }
          .collectionname {
            font-weight: bold;
            font-size: 15px;
          }
        }
      }
      .collectionimgbox:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}
@media screen and (min-width: 1601px) and (max-width: 1700px) {
  .mymessage {
    width: 75.4%;
    background-color: #fafafa;
  }
  .collectionbox {
    margin: 20px auto;
    width: 100%;
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      .collectionimgbox {
        position: relative;
        width: 24.4%;
        // height: 350px;
        margin-right: 0.69%;
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .iimg {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 21px;
          z-index: 9999;
          cursor: pointer;
        }
        .imgdiv {
          width: 100%;
          // height: 257px;
          margin: 0 auto;
          position: relative;
          height: 0;
          padding-bottom: 100%;
          // border: 1px solid #000;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 260px;
            height: 260px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.36vw 0;
          color: #0e2c4d;
          // height: 83px;
          // margin: 0 auto;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // background-color: #f6f6f6;
          border-radius: 5px;
          text-align: center;
          .collectionnumber {
            margin-top: 10px;
            color: #555;
          }
          .collectionname {
            font-weight: bold;
            font-size: 15px;
          }
        }
      }
      .collectionimgbox:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}
@media screen and (min-width: 1701px) {
  .mymessage {
    width: 75.4%;
    background-color: #fafafa;
  }
  .collectionbox {
    margin: 20px auto;
    width: 98%;
    .collectionlist {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      .collectionimgbox {
        position: relative;
        width: 24.4%;
        // height: 350px;
        margin-right: 0.69%;
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .iimg {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 23px;
          // height: 16px;
          z-index: 9999;
          cursor: pointer;
        }
        .imgdiv {
          width: 100%;
          margin: 0 auto;
          position: relative;
          height: 0;
          padding-bottom: 100%;
          // border: 1px solid #000;
          .imgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 260px;
            height: 260px;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .collection-info {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.36vw 0;
          // height: 83px;
          // margin: 0 auto;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // border-radius: 5px;
          text-align: center;
          .collectionname {
            margin-top: 10px;
            color: #000;
            font-weight: bold;
            font-size: 16px;
          }
          .collectionnumber {
            font-size: 15px;
            color: #555;
            font-weight: 400;
          }
        }
      }
      .collectionimgbox:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}

.mymessage {
  margin: auto;
  font-family: "微软雅黑";
  .collection-title {
    padding: 1.04vw 0 0.523vw 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-button {
      border: none;
      background-color: #fafafa;
    }
  }
  .collection-box {
    .collection-box-top {
      display: flex;
      font-size: 12px;
      border-bottom: 1px solid #767676;
      .Subhead {
        margin-right: 20px;
        padding: 15px 0;
        cursor: pointer;
        background-image: linear-gradient(#919090, #000);
        background-position: bottom left;
        background-size: 0% 2px;
        background-repeat: no-repeat;
        // background-color: #fff;
        transition: background-size 0.5s, background-position 0s 0.51s; /*don't animate position and add a delay */
      }
      .Subhead:hover {
        font-weight: 600;
        background-position: bottom left;
        background-size: 100% 2px;
      }
    }
    .collection-box-content {
      .content {
        padding: 15px 0 0;
        font-size: 14px;
        input {
          margin: 10px;
          height: 38px;
        }
      }
      .collection-box-bottom {
        text-align: center;
        margin: 20px auto;
      }
    }

    .collection-box-content3 {
      margin: 20px auto;
    }
  }
}
</style>
<style>
.el-table th > .cell {
  text-align: center;
}
.el-table td {
  text-align: center;
}
/* .el-table tr td:first-of-type{
cursor: pointer;
} */
</style>
