<template>
  <div class="Secondarydirectory" id="details">
    <div class="Secondarydirectory-navbar" style="display:none">
      <div class="navbar-main">
        <router-link to="/" style="color: #000;">首页</router-link>
        <div style="display: flex;">
          <div
            style="margin: 0 6px;"
            v-if="
              selectMainStone != -1 &&
                selectMainStone !== '' &&
                selectMainStone !== undefined
            "
          >
            /
          </div>
          <span style="color: #777;">{{
            selectMainStone == 99
              ? "彩宝"
              : selectMainStone == 97
              ? "钻石"
              : selectMainStone == 100
              ? "珍珠"
              : selectMainStone == 98
              ? "裸石"
              : selectMainStone == 101
              ? "联系我们"
              : ""
          }}</span>
        </div>
      </div>
    </div>
    <div class="Secondarydirectory-input" style="display:none">
      <input
        type="text"
        class="details-input"
        placeholder="搜索"
        v-model="searchValue"
      />
      <span class="details-input-img" @click="keywordCheck"
        ><img src="../assets/index/check.png"
      /></span>
    </div>
    <div class="pc-select" v-if="selectRadioNum == 0">
      <div class="Secondarydirectory-select one">
        <div class="select-left">
          <span>主石</span>
        </div>
        <div class="select-right">
          <div class="right-top" id="main-stone">
            <el-radio-group v-model="selectMainStone">
              <el-radio-button
                @click.stop.prevent="onRadioChange(99)"
                :label="99"
                >彩宝</el-radio-button
              >
              <el-radio-button
                @click.stop.prevent="onRadioChange(97)"
                :label="97"
                >钻石</el-radio-button
              >
              <el-radio-button
                @click.stop.prevent="onRadioChange(100)"
                :label="100"
                >珍珠</el-radio-button
              >
              <el-radio-button
                @click.stop.prevent="onRadioChange(98)"
                :label="98"
                >裸石</el-radio-button
              >
            </el-radio-group>
          </div>
          <div class="right-bottom" id="stone">
            <el-radio-group
              v-model="selectStone"
              v-if="
                selectMainStone == 99 ||
                  selectMainStone == '' ||
                  selectMainStone == 98 ||
                  selectMainStone == undefined ||
                  selectMainStone == -1
              "
            >
              <el-radio-button
                :label="1"
                @click.stop.prevent="onRadioChange2(1)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone5.png" class="stone-img" />
                </div>
                <span class="stone-font">海蓝宝</span>
              </el-radio-button>
              <el-radio-button
                :label="2"
                @click.stop.prevent="onRadioChange2(2)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone1.png" class="stone-img" />
                </div>
                <span class="stone-font">红宝石</span>
              </el-radio-button>
              <el-radio-button
                :label="3"
                @click.stop.prevent="onRadioChange2(3)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone2.png" class="stone-img" />
                </div>
                <span class="stone-font">蓝宝石</span>
              </el-radio-button>
              <el-radio-button
                :label="4"
                @click.stop.prevent="onRadioChange2(4)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone3.png" class="stone-img" />
                </div>
                <span class="stone-font">坦桑石</span>
              </el-radio-button>
              <el-radio-button
                :label="5"
                @click.stop.prevent="onRadioChange2(5)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone4.png" class="stone-img" />
                </div>
                <span class="stone-font">祖母绿</span>
              </el-radio-button>
              <el-radio-button
                :label="6"
                @click.stop.prevent="onRadioChange2(6)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone7.png" class="stone-img" />
                </div>
                <span class="stone-font">碧玺</span>
              </el-radio-button>
              <el-radio-button
                :label="7"
                @click.stop.prevent="onRadioChange2(7)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone6.png" class="stone-img" />
                </div>
                <span class="stone-font">尖晶石</span>
              </el-radio-button>
            </el-radio-group>
            <el-radio-group v-model="selectStone" v-if="selectMainStone == 100">
              <el-radio-button
                :label="8"
                @click.stop.prevent="onRadioChange3(8)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone5.png" class="stone-img" />
                </div>
                <span class="stone-font">南洋珍珠</span>
              </el-radio-button>
              <el-radio-button
                :label="9"
                @click.stop.prevent="onRadioChange3(9)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone1.png" class="stone-img" />
                </div>
                <span class="stone-font">大溪地</span>
              </el-radio-button>
              <el-radio-button
                :label="10"
                @click.stop.prevent="onRadioChange3(10)"
              >
                <div class="stone-img-div">
                  <img src="../assets/details/stone2.png" class="stone-img" />
                </div>
                <span class="stone-font">紫珍珠</span>
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="Secondarydirectory-select">
        <div class="select-left">
          <span>款式</span>
        </div>
        <div class="select-right">
          <div class="right-main" id="main-type">
            <el-radio-group v-model="selectType">
              <el-radio-button
                :label="1"
                @click.stop.prevent="radioTypeChange(1)"
              >
                <div class="stone-img-div">
                  <img src="../assets/index/xiang.png" class="stone-img" />
                </div>
                <span class="stone-font">项链</span>
              </el-radio-button>
              <el-radio-button
                :label="2"
                @click.stop.prevent="radioTypeChange(2)"
              >
                <div class="stone-img-div">
                  <img src="../assets/index/jie.png" class="stone-img" />
                </div>
                <span class="stone-font">戒指</span>
              </el-radio-button>
              <el-radio-button
                :label="3"
                @click.stop.prevent="radioTypeChange(3)"
              >
                <div class="stone-img-div">
                  <img src="../assets/index/shou.png" class="stone-img" />
                </div>
                <span class="stone-font">手链</span>
              </el-radio-button>
              <el-radio-button
                :label="4"
                @click.stop.prevent="radioTypeChange(4)"
              >
                <div class="stone-img-div">
                  <img src="../assets/index/xiong.png" class="stone-img" />
                </div>
                <span class="stone-font">胸针</span>
              </el-radio-button>
              <el-radio-button
                :label="5"
                @click.stop.prevent="radioTypeChange(5)"
              >
                <div class="stone-img-div">
                  <img src="../assets/index/er.png" class="stone-img" />
                </div>
                <span class="stone-font">耳环</span>
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
    <div class="total-font">
      <p class="font">总共查找到 {{ totalCount }} 个产品</p>
      <div
        style="display: flex;"
        v-if="selectRadioNum == 1"
        @click="blockOrHodden"
      >
        <span class="shai">筛选</span>
        <div class="xuan">
          <p class="searchButton"></p>
        </div>
      </div>
      <el-dialog
        title="筛选"
        v-model="dialogSearchVisible"
        width="100%"
        :lock-scroll="true"
      >
        <div>
          <div class="Secondarydirectory-select one">
            <div class="select-left">
              <span>主石</span>
            </div>
            <div class="select-right">
              <div class="right-top" id="main-stone">
                <el-radio-group v-model="selectMainStone">
                  <el-radio-button
                    @click.stop.prevent="onRadioChange(99)"
                    :label="99"
                    >彩宝</el-radio-button
                  >
                  <el-radio-button
                    @click.stop.prevent="onRadioChange(97)"
                    :label="97"
                    >钻石</el-radio-button
                  >
                  <el-radio-button
                    @click.stop.prevent="onRadioChange(100)"
                    :label="100"
                    >珍珠</el-radio-button
                  >
                  <el-radio-button
                    @click.stop.prevent="onRadioChange(98)"
                    :label="98"
                    >裸石</el-radio-button
                  >
                </el-radio-group>
              </div>
              <div class="right-bottom" id="stone">
                <el-radio-group
                  v-model="selectStone"
                  v-if="
                    selectMainStone == 99 ||
                      selectMainStone == '' ||
                      selectMainStone == 98 ||
                      selectMainStone == undefined ||
                      selectMainStone == -1
                  "
                >
                  <el-radio-button
                    :label="1"
                    @click.stop.prevent="onRadioChange2(1)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone5.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">海蓝宝</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="2"
                    @click.stop.prevent="onRadioChange2(2)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone1.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">红宝石</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="3"
                    @click.stop.prevent="onRadioChange2(3)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone2.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">蓝宝石</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="4"
                    @click.stop.prevent="onRadioChange2(4)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone3.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">坦桑石</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="5"
                    @click.stop.prevent="onRadioChange2(5)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone4.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">祖母绿</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="6"
                    @click.stop.prevent="onRadioChange2(6)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone7.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">碧玺</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="7"
                    @click.stop.prevent="onRadioChange2(7)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone6.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">尖晶石</span>
                  </el-radio-button>
                </el-radio-group>
                <el-radio-group
                  v-model="selectStone"
                  v-if="selectMainStone == 100"
                >
                  <el-radio-button
                    :label="8"
                    @click.stop.prevent="onRadioChange3(8)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone5.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">南洋珍珠</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="9"
                    @click.stop.prevent="onRadioChange3(9)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone1.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">大溪地</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="10"
                    @click.stop.prevent="onRadioChange3(10)"
                  >
                    <div class="stone-img-div">
                      <img
                        src="../assets/details/stone2.png"
                        class="stone-img"
                      />
                    </div>
                    <span class="stone-font">紫珍珠</span>
                  </el-radio-button>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="Secondarydirectory-select">
            <div class="select-left">
              <span>款式</span>
            </div>
            <div class="select-right">
              <div class="right-main" id="main-type">
                <el-radio-group v-model="selectType">
                  <el-radio-button
                    :label="1"
                    @click.stop.prevent="radioTypeChange(1)"
                  >
                    <div class="stone-img-div">
                      <img src="../assets/index/xiang.png" class="stone-img" />
                    </div>
                    <span class="stone-font">项链</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="2"
                    @click.stop.prevent="radioTypeChange(2)"
                  >
                    <div class="stone-img-div">
                      <img src="../assets/index/jie.png" class="stone-img" />
                    </div>
                    <span class="stone-font">戒指</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="3"
                    @click.stop.prevent="radioTypeChange(3)"
                  >
                    <div class="stone-img-div">
                      <img src="../assets/index/xiong.png" class="stone-img" />
                    </div>
                    <span class="stone-font">手链</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="4"
                    @click.stop.prevent="radioTypeChange(4)"
                  >
                    <div class="stone-img-div">
                      <img src="../assets/index/xiong.png" class="stone-img" />
                    </div>
                    <span class="stone-font">胸针</span>
                  </el-radio-button>
                  <el-radio-button
                    :label="5"
                    @click.stop.prevent="radioTypeChange(5)"
                  >
                    <div class="stone-img-div">
                      <img src="../assets/index/er.png" class="stone-img" />
                    </div>
                    <span class="stone-font">耳环</span>
                  </el-radio-button>
                </el-radio-group>
              </div>
            </div>
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogSearchVisible = false">取 消</el-button>
            <el-button type="primary" @click="checkProduct">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>

    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>

    <div>
      <div
        v-if="jewelryList.list.length == 0"
        style="margin: 30px 0;text-align: center;"
      >
        <p>{{ listMsg }}</p>
      </div>
      <div v-else style="text-align: center;">
        <div class="row">
          <div
            class="row-col"
            v-for="(item, index) in jewelryList.list"
            :key="index"
          >
            <div class="item">
              <div class="product_item">
                <div
                  class="product_img"
                  @mouseover="mouseoverimg(index)"
                  @mouseleave="mouseleaveimg"
                >
                  <div @click="routerdatails(item.id)" class="productimg">
                    <img
                      v-if="index !== hoverimg"
                      :src="listfunction(item.images, 1)"
                    />
                    <img
                      v-if="index == hoverimg"
                      :src="
                        item.images.length > 38
                          ? listfunction(item.images, 2)
                          : listfunction(item.images, 1)
                      "
                    />
                  </div>
                  <div class="clearfix">
                    <img
                      style="cursor: pointer;"
                      v-if="favorite.list.indexOf(item.id) == -1"
                      src="../assets/index/hollow2.png"
                      @click="addcollection(item.id, 0, index)"
                    />
                    <img
                      style="cursor: pointer;"
                      v-if="favorite.list.indexOf(item.id) != -1"
                      src="../assets/index/solid2.png"
                      @click="addcollection(item.id, 1, index)"
                    />
                  </div>
                </div>
                <div class="product_info">
                  <!-- <p class="product_price">{{ item.number }}</p> -->
                  <p class="product_seri">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-button @click="Browsemore" class="Browse" v-if="nomore == true"
          >浏览更多</el-button
        >
        <el-button style="border:none" class="Browse" v-else
          >到底啦~~相关产品已全部展示</el-button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import loading from "@/login/loding.vue";
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";

export default defineComponent({
  name: "list",
  components: { loading },

  setup() {
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;

    const isLoading = ref(true);
    const img = store.state.baseUrl;
    const hoverimg = ref(-1);
    const itemimages = ref("");

    const searchValue = ref("");
    searchValue.value = getCurrentInstance()?.appContext.config.globalProperties.$route.query.search;
    // console.log('关键字')
    // console.log(searchValue.value)

    const selectMainStone = ref();
    selectMainStone.value = getCurrentInstance()?.appContext.config.globalProperties.$route.query.mainStone;
    // console.log('参数1')
    // console.log(selectMainStone)

    const selectStone = ref();
    selectStone.value = getCurrentInstance()?.appContext.config.globalProperties.$route.query.stone;

    // console.log('参数2')
    // console.log(selectStone)

    const selectType = ref();
    selectType.value = getCurrentInstance()?.appContext.config.globalProperties.$route.query.type;
    // console.log('参数3')
    // console.log(selectType)

    const selectRadioNum = ref(0);

    const cliWidth = document.documentElement.clientWidth;
    if (cliWidth < 768) {
      selectRadioNum.value = 1;
    } else {
      selectRadioNum.value = 0;
    }

    const dialogSearchVisible = ref(false);
    function blockOrHodden() {
      if (selectRadioNum.value == 1) {
        dialogSearchVisible.value = true;
      }
      console.log("选择");
      console.log(selectRadioNum.value);
    }

    if (
      selectType.value == 0 ||
      selectType.value == -1 ||
      selectType.value == undefined ||
      selectType.value == -2
    ) {
      selectType.value = "";
    }

    if (
      selectMainStone.value != -1 &&
      selectMainStone.value !== undefined &&
      selectStone.value != -1 &&
      selectStone.value !== undefined &&
      selectType.value != -1 &&
      selectType.value == -2 &&
      selectType.value !== undefined
    ) {
      searchValue.value = "";
    }
    // const fromrouter = ref(true)
    const jewelryList = reactive({ list: [] });
    const favorite = reactive({ list: [] });
    const listMsg = ref("数据加载中");
    const searchStoneList = ref("");
    const searchTypeList = ref("");

    const nomore = ref(true);
    const message = getCurrentInstance()?.appContext.config.globalProperties
      .$message;
    function radioChangeNumber() {
      // location.reload()
      console.log("选择");
      console.log(selectMainStone.value);
      searchTypeList.value = selectType.value;
      if (selectStone.value == -1) {
        searchStoneList.value = "";
      }
      if (selectType.value == -1 || selectType.value == -2) {
        searchTypeList.value = "";
      }
      if (selectMainStone.value == "" || selectMainStone.value == -1) {
        if (selectStone.value == -1 || selectStone.value == "") {
          searchStoneList.value = "";
        } else {
          searchStoneList.value = selectStone.value;
        }

        if (
          selectType.value == -1 ||
          selectType.value == "" ||
          selectType.value == -2
        ) {
          searchTypeList.value = "";
        }
      } else if (selectMainStone.value == 99) {
        // 彩宝
        if (selectStone.value == -1 || selectStone.value == "") {
          searchStoneList.value = "1,2,3,4,5,6,7";
        } else {
          searchStoneList.value = selectStone.value;
        }
      } else if (selectMainStone.value == 100) {
        // 珍珠
        if (selectStone.value == -1 || selectStone.value == "") {
          searchStoneList.value = "8,9,10";
        } else {
          searchStoneList.value = selectStone.value;
        }
      } else if (selectMainStone.value == 97) {
        console.log("9999999-------");
        // 钻石
        if (selectStone.value == -1 || selectStone.value == "") {
          searchStoneList.value = "0";
          console.log("此******-1、“’");
        } else {
          searchStoneList.value = 0 + "," + selectStone.value;
          console.log("cishigy7t7yt77", selectStone.value);
        }
      } else if (selectMainStone.value == 98) {
        searchTypeList.value = 0 + "," + selectType.value;
        // 裸石
        if (selectStone.value == -1 || selectStone.value == "") {
          searchStoneList.value = "1,2,3,4,5,6,7";
        } else {
          searchStoneList.value = selectStone.value;
        }
      }

      router.push({
        //同一页面请求参数改变，url改变
        path: "/list",
        query: {
          mainStone: selectMainStone.value,
          stone: selectStone.value,
          type: selectType.value,
        },
      });
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
    const page = ref(1);

    router.beforeEach((to, from, next) => {
      if (from.path == "/") {
        goTop(); //‘/’页面跳转时屏幕滚动到顶部
      }
      next();
    });

    const totalCount = ref(0);
    let temp = [];
    // 获取珠宝列表
    function checkProduct() {
      listMsg.value = "数据加载中";
      isLoading.value = true;
      radioChangeNumber();

      favorite.list = [];

      dialogSearchVisible.value = false;

      axios
        .get(store.state.baseUrl + "/jewelryList", {
          params: {
            pageNumber: page.value,
            pageSize: 12,
            search: searchValue.value,
            searchStoneList: searchStoneList.value,
            searchTypeList: searchTypeList.value,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code < 500) {
            isLoading.value = false; //关闭加载动画
            let aa = [];
            if (res.data.data.list) {
              nomore.value = true;
              if (temp.length == 0) {
                temp = res.data.data.list;
                jewelryList.list = temp;
              } else {
                aa = temp.concat(res.data.data.list);
                temp = aa;
                jewelryList.list = aa; //实现“查看更多”功能
              }
              // console.log(aa)

              totalCount.value = res.data.data.totalCount;

              if (
                localStorage.getItem("token") == "" ||
                localStorage.getItem("token") == null ||
                localStorage.getItem("token") == "undefined" ||
                localStorage.getItem("token") == undefined
              ) {
                favorite.list = [];
              } else {
                axios
                  .get(store.state.baseUrl + "/user/favoriteList")
                  .then((res) => {
                    if (res.data.data == undefined) {
                      favorite.list = [];
                    } else {
                      favorite.list = res.data.data;
                    }
                    // console.log('favoriteList', res.data.data)
                  });
              }
            } else {
              nomore.value = false;
            }
          }
          if (jewelryList.list.length == 0) {
            listMsg.value = "没有查询到商品，请修改查询条件";
          }
          // location.reload()
        });
      // console.log('session111111: ' + localStorage.getItem('token'))
    }

    checkProduct();

    function Browsemore() {
      page.value += 1;
      const pa = page.value;
      sessionStorage.setItem("pageitem", String(pa));
      checkProduct(); //查看更多
    }

    function onRadioChange(e) {
      console.log(e);
      e == selectMainStone.value
        ? (selectMainStone.value = "")
        : (selectMainStone.value = e);
      console.log("主石变化", e);
      console.log(selectMainStone.value);
      selectStone.value = "";
      selectType.value = "";
      searchTypeList.value = "";
      page.value = 1;
      searchValue.value = "";
      jewelryList.list = [];
      temp = [];
      if (dialogSearchVisible.value == false) {
        checkProduct();
      }
    }

    function onRadioChange2(e) {
      console.log(e);
      e == selectStone.value
        ? (selectStone.value = "")
        : (selectStone.value = e);
      console.log("次石变化");
      console.log(selectStone.value);
      selectType.value = "";
      searchTypeList.value = "";
      page.value = 1;
      searchValue.value = "";
      jewelryList.list = [];
      temp = [];
      if (dialogSearchVisible.value == false) {
        checkProduct();
      }
    }

    function onRadioChange3(e) {
      console.log(e);
      e == selectStone.value
        ? (selectStone.value = "")
        : (selectStone.value = e);
      console.log("次石变化");
      console.log(selectStone.value);
      selectType.value = "";
      searchTypeList.value = "";
      page.value = 1;
      searchValue.value = "";
      jewelryList.list = [];
      temp = [];
      if (dialogSearchVisible.value == false) {
        checkProduct();
      }
    }

    function radioTypeChange(e) {
      console.log(e);
      e == selectType.value ? (selectType.value = "") : (selectType.value = e);
      console.log("款式变化");
      console.log(selectType.value);
      page.value = 1;
      searchValue.value = "";
      jewelryList.list = [];
      temp = [];
      if (dialogSearchVisible.value == false) {
        checkProduct();
      }
    }

    function keywordCheck() {
      selectMainStone.value = "";
      selectStone.value = "";
      selectType.value = "";
      searchStoneList.value = "";
      searchTypeList.value = "";
      page.value = 1;
      jewelryList.list = [];
      temp = [];
      checkProduct();
    }

    function listfunction(params: string, index: number) {
      // 多张图片中取第一张
      const imgname = ref("");
      if (params !== undefined && index == 1) {
        //展示第一张图片
        if (params.indexOf("|") == -1) {
          imgname.value = params;
        } else {
          imgname.value = params.split("|")[0];
        }
      } else if (params !== undefined && index == 2) {
        //展示第二张图片
        if (params.indexOf("|") == -1) {
          imgname.value = params;
        } else {
          imgname.value = params.split("|")[1];
        }
      }
      return img + "/image/" + imgname.value;
    }

    function mouseoverimg(id) {
      hoverimg.value = id; //控制鼠标悬停时展示图片的变化
    }

    function mouseleaveimg() {
      hoverimg.value = -1;
    }

    function addcollection(id: number, val: number, index: number) {
      console.log("收藏与否", id, val);
      favorite.list = [];
      let msg = "";
      axios
        .post(store.state.baseUrl + "/user/favoriteUpdate", {
          jewelry: id,
          status: val,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code < 500) {
            axios
              .get(store.state.baseUrl + "/user/favoriteList")
              .then((res) => {
                if (res.data.code < 500) {
                  if (res.data.data == undefined) {
                    favorite.list = [];
                  } else {
                    favorite.list = res.data.data;
                  }
                  if (val == 0) {
                    msg = "收藏成功";
                  } else if (val == 1) {
                    msg = "取消收藏";
                  }
                  message.success({
                    message: msg,
                    showClose: true,
                    duration: 2000,
                  });
                  // console.log(res.data.data)
                }
              });
          }
        });
    }

    function routerdatails(params: any) {
      console.log("珠宝id", params);
      router.push({ path: "/item", query: { id: params } });
    }

    return {
      img,
      isLoading,
      hoverimg,
      mouseoverimg,
      mouseleaveimg,
      addcollection,
      routerdatails,
      jewelryList,
      totalCount,
      nomore,
      favorite,
      itemimages,
      listfunction,
      checkProduct,
      selectMainStone,
      selectStone,
      selectType,
      listMsg,
      keywordCheck,
      radioTypeChange,
      searchValue,
      page,
      Browsemore,
      onRadioChange,
      onRadioChange2,
      onRadioChange3,
      selectRadioNum,
      blockOrHodden,
      dialogSearchVisible,
      message,
    };
  },
});
</script>
<style lang="scss" scoped>
.Secondarydirectory-navbar {
  width: 100%;
  background-color: #f1e1e6;

  .navbar-main {
    margin: 0 auto;
    display: flex;
    font-weight: 600;
  }
}
.Secondarydirectory-input {
  margin: 0 auto;
  display: flex;

  .details-input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    -webkit-appearance: none;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 14px;
    outline: 0;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .details-input-img {
    display: inline-block;
    margin-left: -30px;
    display: flex;
    align-items: center;
    // margin-top: 11px;
    cursor: pointer;
  }

  .details-input:hover {
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .details-input:focus {
    border: 1px solid #0aa1ed;
  }

  input::-webkit-input-placeholder {
    color: #c0c4cc;
  }
  input::-moz-input-placeholder {
    color: #c0c4cc;
  }
  input::-ms-input-placeholder {
    color: #c0c4cc;
  }
}

.total-font {
  display: flex;
  justify-content: space-between;
}

.Secondarydirectory-select {
  margin: 0 auto;
  display: flex;

  .select-left {
    line-height: 46px;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
  }

  .select-right {
    .right-bottom {
      .stone-img-div {
        display: flex;
        align-items: center;

        .stone-img {
          width: 21px;
          height: 28px;
        }
      }
    }

    .right-main {
      // margin-top: 20px;

      .stone-img-div {
        display: flex;
        align-items: center;

        .stone-img {
          width: 18px;
          height: 20px;
        }
      }

      .stone-font {
        display: block;
        margin-left: 8px;
      }
    }
  }
}

.product_img {
  // border: 1px solid #000;
  box-sizing: border-box;
  img {
    object-fit: contain;
    // object-fit: cover;
    cursor: pointer;
  }
}

@media screen and (min-width: 1701px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-input,
    .Secondarydirectory-select,
    .total-font {
      width: 75.4%;
    }

    .Secondarydirectory-navbar {
      height: 68px;
      line-height: 68px;

      .navbar-main {
        font-size: 15px;
      }
    }

    .Secondarydirectory-input {
      margin-top: 20px;
    }

    .total-font {
      margin: 40px auto 30px;

      .font {
        font-size: 16px;
        color: #000;
      }
    }

    .stone-font {
      display: block;
      margin-left: 10px;
    }

    .one {
      margin-top: 20px;
    }

    .select-left {
      width: 100px;
      span {
        display: inline-block;
        width: 100px;
      }
    }

    .row {
      width: 75.4%;
      margin: 0 auto;
      display: flex;
      justify-content: end;
      flex-wrap: wrap;

      .row-col {
        // width: 50%;
        width: 24.47%;
        // margin-right: 26px;
        margin-right: 0.69%;
        margin-bottom: 10px;
        // border-radius: 5px;
        background-color: #fff;
        box-sizing: border-box;

        .product_item {
          // margin: 0 15px 15px 15px;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;

          position: relative;
          .product_img {
            width: 100%;
            // height: 120%;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;
            .productimg {
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

            .clearfix {
              position: absolute;
              top: 14px;
              right: 16px;
              // background-color: #f1f1f1;

              text-align: center;

              img {
                width: 23px;
              }
            }
          }

          .product_info {
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

            // border-radius: 5px;
            text-align: center;
            // margin-bottom: 2.5%;
            // .product_price {
            //   font-size: 14px;
            //   color: #555;
            //   font-weight: 400;
            // }

            .product_seri {
              margin-top: 10px;
              // color: #000;
              // font-weight: bold;
              font-size: 15px;
              font-weight: normal;
            }
          }
        }
      }
      .row-col:nth-of-type(4n) {
        margin-right: 0;
      }
    }

    .Browse {
      width: 280px;
      height: 56px;
      font-size: 14px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}

@media screen and (min-width: 1601px) and (max-width: 1700px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-input,
    .Secondarydirectory-select,
    .total-font {
      width: 81%;
    }

    .Secondarydirectory-navbar {
      height: 68px;
      line-height: 68px;

      .navbar-main {
        font-size: 15px;
      }
    }

    .Secondarydirectory-input {
      margin-top: 20px;
    }

    .total-font {
      margin: 40px auto 30px;

      .font {
        font-size: 16px;
        color: #000;
      }
    }

    .stone-font {
      display: block;
      margin-left: 10px;
    }

    .one {
      margin-top: 20px;
    }

    .select-left {
      width: 100px;
      span {
        display: inline-block;
        width: 100px;
      }
    }

    .row {
      width: 81%;
      margin: 0 auto;
      display: flex;
      justify-content: end;
      flex-wrap: wrap;

      .row-col {
        width: 22%;
        margin-right: 0.69%;
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;

        .product_item {
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          position: relative;
          .product_img {
            width: 100%;
            // height: 257px;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;
            .productimg {
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

            .clearfix {
              position: absolute;
              top: 14px;
              right: 16px;
              text-align: center;

              img {
                width: 23px;
              }
            }
          }

          .product_info {
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
            // border-radius: 5px;
            text-align: center;
            margin-bottom: 2.5%;
            // .product_price {
            //   font-size: 14px;
            //   color: #555;
            //   font-weight: 400;
            // }

            .product_seri {
              // margin-top: 10px;
              color: #0e2c4d;
              // font-weight: bold;
              font-size: 15px;
              font-weight: normal;
            }
          }
        }
      }
      .row-col:nth-of-type(4n) {
        margin-right: 0;
      }
    }
    .Browse {
      width: 238px;
      height: 47px;
      font-size: 14px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}

@media screen and (min-width: 1401px) and (max-width: 1600px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-input,
    .Secondarydirectory-select,
    .total-font {
      width: 75%;
    }

    .Secondarydirectory-navbar {
      height: 68px;
      line-height: 68px;

      .navbar-main {
        font-size: 15px;
      }
    }

    .Secondarydirectory-input {
      margin-top: 20px;
    }

    .total-font {
      margin: 36px auto 27px;

      .font {
        font-size: 16px;
        color: #000;
      }
    }

    .stone-font {
      display: block;
      margin-left: 10px;
    }

    .one {
      margin-top: 20px;
    }

    .select-left {
      width: 100px;
      span {
        display: inline-block;
        width: 100px;
      }
    }

    .row {
      width: 75%;
      margin: 0 auto;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;

      .row-col {
        width: 24.4%;
        background-color: #fff;
        box-sizing: border-box;
        margin-right: 0.69%;
        margin-bottom: 10px;
        .product_item {
          // margin: 0 15px 15px 15px;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          position: relative;
          .product_img {
            width: 100%;
            // height: 257px;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;

            .productimg {
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

            .clearfix {
              position: absolute;
              top: 12px;
              right: 14px;
              // background-color: #f1f1f1;
              // height: 38px;
              text-align: center;

              img {
                width: 20px;
              }
            }
          }

          .product_info {
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
            margin-bottom: 2.5%;
            .product_price {
              font-size: 14px;
              color: #555;
              font-weight: 400;
            }

            .product_seri {
              margin-top: 10px;
              color: #0e2c4d;
              font-weight: normal;
              font-size: 15px;
            }
          }
        }
      }
      .row-col:nth-of-type(4n) {
        margin-right: 0;
      }
    }
    .Browse {
      width: 238px;
      height: 47px;
      font-size: 14px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-input,
    .Secondarydirectory-select,
    .total-font {
      width: 75%;
    }

    .Secondarydirectory-navbar {
      height: 68px;
      line-height: 68px;

      .navbar-main {
        font-size: 15px;
      }
    }

    .Secondarydirectory-input {
      margin-top: 20px;
    }

    .total-font {
      margin: 36px auto 27px;

      .font {
        font-size: 16px;
        color: #000;
      }
    }

    .stone-font {
      display: block;
      margin-left: 10px;
    }

    .one {
      margin-top: 20px;
    }

    .select-left {
      width: 100px;
      span {
        display: inline-block;
        width: 100px;
      }
    }

    .row {
      width: 75%;
      margin: 0 auto;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;

      .row-col {
        width: 32%;
        background-color: #fff;
        box-sizing: border-box;
        margin-right: 0.69%;
        margin-bottom: 10px;
        .product_item {
          // margin: 0 15px 15px 15px;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          position: relative;

          .product_img {
            width: 100%;
            // height: 257px;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;
            // border: 1px solid #000;
            .productimg {
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

            .clearfix {
              position: absolute;
              top: 12px;
              right: 14px;
              // background-color: #f1f1f1;
              text-align: center;

              img {
                width: 20px;
              }
            }
          }

          .product_info {
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
            margin-bottom: 2.5%;
            .product_price {
              font-size: 14px;
              color: #555;
              font-weight: 400;
            }

            .product_seri {
              margin-top: 10px;
              color: #0e2c4d;
              font-weight: normal;
              font-size: 15px;
            }
          }
        }
      }
      .row-col:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    .Browse {
      width: 224px;
      height: 44px;
      font-size: 14px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-input,
    .Secondarydirectory-select,
    .total-font {
      width: 80%;
    }

    .Secondarydirectory-navbar {
      height: 68px;
      line-height: 68px;

      .navbar-main {
        font-size: 15px;
      }
    }

    .Secondarydirectory-input {
      margin-top: 20px;
    }

    .total-font {
      margin: 30px auto 15px;

      .font {
        font-size: 16px;
        color: #000;
      }
    }

    .stone-font {
      display: block;
      margin-left: 10px;
    }

    .one {
      margin-top: 20px;
    }

    .select-left {
      width: 70px;
      span {
        display: inline-block;
        width: 70px;
      }
    }

    .row {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: end;
      flex-wrap: wrap;

      .row-col {
        width: 31%;
        margin-right: 0.69%;
        margin-top: 10px;
        background-color: #fff;
        box-sizing: border-box;

        .product_item {
          // margin: 0 15px 15px 15px;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          position: relative;
          .product_img {
            width: 100%;
            // height: 257px;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;
            // border: 1px solid #000;
            .productimg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 86%;
              height: 86%;
              img {
                width: 100%;
                height: 100%;
              }
            }

            .clearfix {
              position: absolute;
              top: 10px;
              right: 12px;
              // background-color: #f1f1f1;
              text-align: center;

              img {
                width: 18px;
              }
            }
          }

          .product_info {
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
            margin-bottom: 2.5%;
            // .product_price {
            //   font-size: 14px;
            //   color: #555;
            //   font-weight: 400;
            // }

            .product_seri {
              margin-top: 10px;
              color: #0e2c4d;
              font-weight: normal;
              font-size: 15px;
            }
          }
        }
      }
      .row-col:nth-of-type(3n) {
        margin-right: 0;
      }
    }

    .Browse {
      width: 196px;
      height: 39px;
      font-size: 14px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}

@media (max-width: 767px) {
  .Secondarydirectory {
    .navbar-main,
    .Secondarydirectory-select,
    .total-font {
      width: 95%;
    }

    .Secondarydirectory-navbar {
      display: none;
    }

    .Secondarydirectory-input {
      width: 95%;
      padding-top: 20px;
    }

    .Secondarydirectory-select {
      display: block;
    }

    .total-font {
      margin: 20px auto 0;

      .font {
        font-size: 13px;
        font-weight: 400;
        color: #606266;
      }

      .shai {
        font-size: 13px;
        color: #606266;
        // font-weight: bold;
      }

      .xuan {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .searchButton {
          margin-left: 5px;
          width: 0;
          height: 0;
          border-width: 5px;
          border-style: solid;
          border-color: #606266 transparent transparent transparent;
        }
      }
    }

    .stone-font {
      display: block;
      margin-left: 5px;
    }

    .one {
      margin-top: 5px;
    }

    .select-left {
      width: 40px;
      line-height: 30px;

      span {
        display: inline-block;
        width: 40px;
      }
    }

    .select-right {
      .right-top {
        margin-bottom: 0;
      }

      .right-bottom {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }

    .row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 98%;
      margin: auto;
      .row-col {
        width: 49%;
        // height: 307px;
        margin-top: 10px;
        background-color: #fff;
        box-sizing: border-box;
        .product_item {
          // margin: 0 15px 15px 15px;
          text-align: left;
          font-weight: 300;
          font-style: normal;
          font-size: 1rem;
          position: relative;

          .product_img {
            width: 100%;
            // height: 245px;
            margin: 0 auto;
            position: relative;
            height: 0;
            padding-bottom: 100%;
            .productimg {
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

            .clearfix {
              position: absolute;
              top: 10px;
              right: 10px;
              // background-color: #f1f1f1;
              text-align: center;

              img {
                width: 14px;
              }
            }
          }

          .product_info {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 10px 0;
            // height: 50px;
            // margin: 0 auto;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // background-color: #f6f6f6;
            text-align: center;
            // margin-bottom: 2.5%;
            // .product_price {
            //   font-size: 12px;
            //   color: #555;
            // }

            .product_seri {
              font-size: 13px;
              margin-top: 5px;
              color: #0e2c4d;
              // font-weight: 550;
              width: 100%; /*一定要设置宽度，或者元素内含的百分比*/
              overflow: hidden; /*溢出的部分隐藏*/
              white-space: nowrap; /*文本不换行*/
              font-weight: normal;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .Browse {
      width: 196px;
      height: 39px;
      font-size: 13px;
      margin: 50px 0;
      color: #0e2c4d;
      border: 1px solid #0e2c4d;
      border-radius: 0;
      background-color: #fafafa;
    }
  }
}

.Secondarydirectory {
  width: 100%;
  background-color: #fafafa;
}
</style>
<style lang="scss">
.el-radio-button__inner {
  background-color: #ffff;
}
#details {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #a5c2dd;
    color: #fff;
  }

  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev {
    margin: 0 5px;
    background-color: #fff;
    min-width: 30px;
    border-radius: 2px;
    border: 1px solid #f6f6f6;
  }

  .el-pagination.is-background .el-pager li {
    margin: 0 5px;
    background-color: #fff;
    min-width: 30px;
    border-radius: 2px;
    border: 1px solid #f6f6f6;
  }

  .el-pager li {
    line-height: 28px;
  }

  .el-radio-button {
    margin-top: 10px;
    margin-right: 1px;
  }

  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    color: #fff;
    background-color: #a5c2dd;
    box-shadow: 0px 0 0 0 #81d8d0;
  }

  .el-radio-button__inner:hover {
    color: #000;
  }

  #phone-con {
    .el-form-item {
      margin-bottom: 10px;
    }

    .el-form-item__label {
      padding-right: 5px;
      font-size: 13px;
    }

    .el-input__inner {
      height: 36px;
      padding: 0 10px;
      line-height: 35px;
      font-size: 12px;
    }
  }

  #main-stone {
    .el-radio-button__inner {
      width: 82px;
      height: 46px;
      line-height: 20px;
    }
  }

  #stone {
    .el-radio-button__inner {
      width: 130px;
      height: 46px;
      display: flex;
      justify-content: center;
      line-height: 20px;
    }
  }

  #main-type {
    .el-radio-button {
      margin-top: 10px;
    }

    .el-radio-button__inner {
      width: 82px;
      height: 46px;
      display: flex;
      justify-content: center;
      line-height: 20px;
    }
  }
}

@media screen and (min-width: 767px) {
  #details {
    .el-pagination {
      width: 70%;
      margin: 20px auto 0;
      text-align: right;
    }

    .el-radio-button__inner {
      text-align: center;
      border: 0;
      border-left: 0;
      border-radius: 0;
    }
  }
}

@media screen and (max-width: 766px) {
  #details {
    .el-button--primary {
      color: #fff;
      background-color: #a5c2dd;
      border-color: #81d8d0;
    }

    .el-radio-button {
      margin-top: 5px;
    }

    .el-radio-button__inner {
      padding: 5px 5px;
      text-align: center;
      border: 0;
      border-left: 0;
      border-radius: 0;
      color: #0e2c4d;
      background-color: #fafafa;
    }

    .el-radio-button__inner::after {
      background-color: #fffafa;
    }

    .el-pagination {
      width: 300px;
      margin: 10px auto 0;
      text-align: right;
    }

    .el-dialog {
      margin-top: 13vh !important;
    }

    .el-dialog__header {
      padding: 20px 5px 10px;
    }

    .el-dialog__body {
      padding: 0;
    }

    .el-dialog__footer {
      padding: 20px 10px 20px;
      text-align: right;
    }

    #main-stone {
      .el-radio-button__inner {
        width: 70px;
        height: 38px;
        line-height: 28px;
      }
    }

    #stone {
      .el-radio-button__inner {
        width: 100px;
        height: 38px;
        display: flex;
        justify-content: center;
        line-height: 28px;
      }
    }

    #main-type {
      .el-radio-button {
        margin-top: 5px;
      }

      .el-radio-button__inner {
        width: 82px;
        height: 38px;
        display: flex;
        justify-content: center;
        line-height: 28px;
      }
    }
  }
}
</style>
