<template>
  <div
    class="home"
    id="home-container"
    :style="{ minHeight: innerHeight + 'px' }"
  >
    <div class="navigation" @click="otherClick($event)">
      <div class="logotitle">
        <!-- phone -->
        <div class="iconbox">
          <div class="menu">
            <img
              @click="menu"
              src="../assets/index/menu.png"
              style="width:16px;height: 16px;"
            />
            <div class="menunav1" v-show="showmenunum == 1">
              <div class="menunav1box">
                <div
                  style="height: 50px;line-height: 20px;font-size:20px"
                  class="divfocus"
                >
                  <i
                    class="el-icon-close"
                    @click="closeicon(1)"
                    style="float: right;"
                  ></i>
                </div>
                <!-- <div style="height: 50px;line-height: 20px;font-size:14px"
                     class="divfocus">
                  <span @click="Clicknavigation(0)">首页</span>
                </div> -->
                <ul class="Headerul">
                  <li class="Headerulli">
                    <div class="Headerullititel" @click="Clicknavigation(1)">
                      <span>彩宝</span> <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="titelbox" v-show="titelshow == 1">
                      <div class="inset">
                        <div class="insettop">
                          <i
                            class="el-icon-arrow-left"
                            @click="closeicon(4)"
                          ></i
                          ><span @click="titleitemfun(99, -1, -1)">彩宝</span
                          ><i
                            class="el-icon-close"
                            @click="closeicon(2)"
                            style="font-size:20px"
                          ></i>
                        </div>
                        <div class="titeltiem">按材质选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(99, 1, -1)">海蓝宝石</li>
                          <li @click="titleitemfun(99, 2, -1)">红宝石</li>
                          <li @click="titleitemfun(99, 3, -1)">蓝宝石</li>
                          <li @click="titleitemfun(99, 4, -1)">坦桑石</li>
                          <li @click="titleitemfun(99, 5, -1)">祖母绿</li>
                          <li @click="titleitemfun(99, 7, -1)">尖晶石</li>
                          <li @click="titleitemfun(99, 6, -1)">碧玺</li>
                        </ul>
                        <div class="titeltiem">按类别选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(99, -1, 2)">戒指</li>
                          <li @click="titleitemfun(99, -1, 1)">项链</li>
                          <li @click="titleitemfun(99, -1, 5)">耳环</li>
                          <li @click="titleitemfun(99, -1, 4)">胸针</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="Headerulli">
                    <div class="Headerullititel" @click="Clicknavigation(2)">
                      <span>钻石</span> <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="titelbox" v-show="titelshow == 2">
                      <div class="inset">
                        <div class="insettop">
                          <i
                            class="el-icon-arrow-left"
                            @click="closeicon(4)"
                          ></i
                          ><span @click="titleitemfun(97, -1, -1)">钻石</span
                          ><i
                            class="el-icon-close"
                            style="font-size:20px"
                            @click="closeicon(2)"
                          ></i>
                        </div>
                        <div class="titeltiem">按类别选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(97, -1, 2)">戒指</li>
                          <li @click="titleitemfun(97, -1, 1)">项链</li>
                          <li @click="titleitemfun(97, -1, 5)">耳环</li>
                          <li @click="titleitemfun(97, -1, 4)">胸针</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="Headerulli">
                    <div class="Headerullititel" @click="Clicknavigation(3)">
                      <span>裸石</span> <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="titelbox" v-show="titelshow == 3">
                      <div class="inset">
                        <div class="insettop">
                          <i
                            class="el-icon-arrow-left"
                            @click="closeicon(4)"
                          ></i
                          ><span @click="titleitemfun(98, -1, -1)">裸石</span
                          ><i
                            class="el-icon-close"
                            style="font-size:20px"
                            @click="closeicon(2)"
                          ></i>
                        </div>
                        <div class="titeltiem">按材质选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(98, 1, -1)">海蓝宝石</li>
                          <li @click="titleitemfun(98, 2, -1)">红宝石</li>
                          <li @click="titleitemfun(98, 3, -1)">蓝宝石</li>
                          <li @click="titleitemfun(98, 4, -1)">坦桑石</li>
                          <li @click="titleitemfun(98, 5, -1)">祖母绿</li>
                          <li @click="titleitemfun(98, 7, -1)">尖晶石</li>
                          <li @click="titleitemfun(98, 6, -1)">碧玺</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="Headerulli">
                    <div class="Headerullititel" @click="Clicknavigation(4)">
                      <span>珍珠</span> <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="titelbox" v-show="titelshow == 4">
                      <div class="inset">
                        <div class="insettop">
                          <i
                            class="el-icon-arrow-left"
                            @click="closeicon(4)"
                          ></i
                          ><span @click="titleitemfun(100, -1, -1)">珍珠</span
                          ><i
                            class="el-icon-close"
                            style="font-size:20px"
                            @click="closeicon(2)"
                          ></i>
                        </div>
                        <div class="titeltiem">按材质选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(100, 10, -1)">紫珍珠</li>
                          <li @click="titleitemfun(100, 8, -1)">南洋珍珠</li>
                          <li @click="titleitemfun(100, 9, -1)">大溪地珍珠</li>
                        </ul>
                        <div class="titeltiem">按类别选购</div>
                        <ul class="titeltiemul">
                          <li @click="titleitemfun(100, -1, 2)">戒指</li>
                          <li @click="titleitemfun(100, -1, 1)">项链</li>
                          <li @click="titleitemfun(100, -1, 5)">耳环</li>
                          <li @click="titleitemfun(100, -1, 4)">胸针</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contact">
                <div class="contactus" @click="Clicknavigation(5)">
                  联系我们
                </div>
                <div class="imglogo imglogoerweima">
                  <div style="display:flex" class="imglogoerweima">
                    <div class="imgflex imgflex2">
                      <img
                        class="imglogoitem"
                        src="../assets/index/wechat2.png"
                        alt=""
                        style="width:17px;"
                      />
                    </div>
                    <span class="imglogoitem">微信公众号</span>
                  </div>
                  <div class="erweima" v-show="imglogoitem == 1">
                    <img src="../assets/index/erweima.png" alt="" />
                    <div>长按搜索，轻点退出</div>
                  </div>
                </div>
                <div class="imglogo">
                  <a
                    href="https://www.xiaohongshu.com/user/profile/5f97f1100000000001005f5e"
                    target="_blank"
                  >
                    <div class="imgflex">
                      <img
                        src="../assets/index/redbook.png"
                        alt=""
                        style="width:33px;"
                      />
                    </div>
                    <span>小红书</span>
                  </a>
                </div>
                <div class="imglogo">
                  <a href="https://v.douyin.com/ehqj9Hd/" target="_blank">
                    <div class="imgflex">
                      <img
                        src="../assets/index/dou2.png"
                        alt=""
                        style="width:14px;"
                      />
                    </div>
                    <span>抖音</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="seach">
            <img
              src="../assets/index/search.png"
              alt=""
              style="width:16px;height: 16px;"
              class="seachimg"
            />
            <div class="seachinput" v-show="shownum == 1">
              <div class="inputbox">
                <div
                  style="display:flex; margin: 1rem 0;justify-content: space-between;"
                >
                  <span class="inputbox2">搜索宝莉安娜</span>
                  <i class="el-icon-close close" @click="closeicon(3)"></i>
                </div>
                <!-- <div class="input-phone">
                  <el-input placeholder="搜索"
                            v-model="seachinput">
                    <template #suffix>
                      <i class="el-input__icon el-icon-search"
                         @click="seachicon"></i>
                    </template>
                  </el-input>
                </div> -->
                <div class="home-input">
                  <input
                    type="text"
                    class="homedetails-input"
                    placeholder="搜索"
                    v-model="seachinput"
                  />
                  <span class="homedetails-input-img"
                    ><img src="../assets/index/check.png" @click="seachicon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- phone -->
        <div class="navlogo" @click="Clicknavigation(0)">
          <img
            src="../assets/index/logo.png"
            style="vertical-align: middle;width:100%;object-fit: contain;height: 20.5px;"
          />
        </div>
        <div class="user">
          <div class="ispan" @click="collection">
            <img
              src="../assets/index/collect.png"
              style="width:16px;height:16px;"
            />
          </div>
          <div class="ispan" @click="loginandregister">
            <img
              src="../assets/index/my.png"
              style="width:16px;height: 16px;"
            />
          </div>
        </div>
        <!-- pc -->
        <div class="pc_nav">
          <div style="display: flex;">
            <div>
              <a
                href="https://www.xiaohongshu.com/user/profile/5f97f1100000000001005f5e"
                target="_blank"
                ><img src="../assets/index/red.png"
              /></a>
            </div>
            <div class="top-line"></div>
            <div style="padding-top: 2px;">
              <a href="https://v.douyin.com/ehqj9Hd/" target="_blank"
                ><img src="../assets/index/dou.png"
              /></a>
            </div>
            <div class="top-line"></div>
            <div style="padding-top: 2px;" class="wechat">
              <img src="../assets/index/wechat.png" />
            </div>
            <div class="contact-er">
              <img src="../assets/index/erweima.png" alt="" />
            </div>
          </div>
          <div class="pcnav">
            <div class="ispan">
              <div class="seach">
                <div class="animateLine">
                  <div class="top-jump-img">
                    <img src="../assets/index/search.png" class="search" />
                  </div>
                  <div class="top-jump-font01">
                    <span class="s11">搜索</span>
                  </div>
                </div>
                <div class="seachinput" v-show="shownum == 1">
                  <div style="width:62%;margin:auto;" class="inputbox">
                    <div
                      style="display:flex; margin: 1rem 0;justify-content: space-between;"
                    >
                      <span class="inputbox2">搜索宝莉安娜</span>
                      <i class="el-icon-close close" @click="closeicon"></i>
                    </div>
                    <!-- <el-input placeholder="搜索" v-model="seachinput">
                      <template #suffix>
                        <i
                          class="el-input__icon el-icon-search"
                          @click="seachicon"
                        ></i>
                      </template>
                    </el-input> -->
                    <div class="home-input">
                      <input
                        type="text"
                        class="homedetails-input"
                        placeholder="搜索"
                        @keyup.enter="keyupenter"
                        v-model="seachinput"
                      />
                      <span class="homedetails-input-img"
                        ><img src="../assets/index/check.png" @click="seachicon"
                      /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="user-right">
              <div class="ispan" @click="collection">
                <div class="animateLine">
                  <div class="top-jump-img">
                    <img src="../assets/index/collect.png" />
                  </div>
                  <span class="top-jump-font">收藏</span>
                </div>
              </div>
              <div class="ispan" @click="loginandregister">
                <div class="animateLine">
                  <div class="top-jump-img">
                    <img src="../assets/index/my.png" />
                  </div>
                  <span class="top-jump-font">我的</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-container>
        <el-header
          class="Header"
          :style="{ height: screenWidth > 414 ? '73px' : '48px' }"
        >
          <div class="header-main">
            <div class="header-main-img">
              <img
                src="../assets/index/logo.png"
                @click="Clicknavigation(0)"
                style="cursor: pointer;"
              />
            </div>
            <ul class="Headerul">
              <li class="Headerulli" style="padding-left: 0;">
                <div class="Headerullititel" @click="Clicknavigation(0)">
                  首页
                </div>
              </li>
              <li class="Headerulli">
                <div class="Headerullititel" @click="checkListJump(99, -1, -1)">
                  彩宝
                </div>
                <!--  style="display: block;" -->
                <div class="boderlibox" id="conOne">
                  <div class="boderlibox-main">
                    <div class="box-maincontainer">
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按材质选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 1, -1)"
                              >
                                <span class="menu-li-font">海蓝宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 2, -1)"
                              >
                                <span class="menu-li-font">红宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 3, -1)"
                              >
                                <span class="menu-li-font">蓝宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 4, -1)"
                              >
                                <span class="menu-li-font">坦桑石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 5, -1)"
                              >
                                <span class="menu-li-font">祖母绿</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 7, -1)"
                              >
                                <span class="menu-li-font">尖晶石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, 6, -1)"
                              >
                                <span class="menu-li-font">碧玺</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按类别选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(99, -1, 2)"
                              >
                                <span class="menu-li-font">戒指</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, -1, 1)"
                              >
                                <span class="menu-li-font">项链</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, -1, 5)"
                              >
                                <span class="menu-li-font">耳环</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(99, -1, 4)"
                              >
                                <span class="menu-li-font">胸针</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="caibao-img">
                      <img src="../assets/index/caibao.png" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  class="zhezhao"
                  id="one"
                  @mouseover="shadeHover($event)"
                  @mouseout="shadeNoHover($event)"
                ></div>
              </li>
              <li class="Headerulli">
                <div class="Headerullititel" @click="checkListJump(97, -1, -1)">
                  钻石
                </div>
                <div class="boderlibox" id="conTwo">
                  <div class="boderlibox-main">
                    <div class="box-maincontainer">
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按类别选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(97, -1, 2)"
                              >
                                <span class="menu-li-font">戒指</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(97, -1, 1)"
                              >
                                <span class="menu-li-font">项链</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(97, -1, 5)"
                              >
                                <span class="menu-li-font">耳环</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(97, -1, 4)"
                              >
                                <span class="menu-li-font">胸针</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="caibao-img">
                      <img src="../assets/index/zuanshi.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  class="zhezhao"
                  id="two"
                  @mouseover="shadeHover($event)"
                  @mouseout="shadeNoHover($event)"
                ></div>
              </li>
              <li class="Headerulli">
                <div
                  class="Headerullititel"
                  @click="checkListJump(100, -1, -1)"
                >
                  珍珠
                </div>
                <div class="boderlibox" id="conThree">
                  <div class="boderlibox-main">
                    <div class="box-maincontainer">
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按材质选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(100, 10, -1)"
                              >
                                <span class="menu-li-font">紫珍珠</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(100, 8, -1)"
                              >
                                <span class="menu-li-font">南洋珍珠</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(100, 9, -1)"
                                style="width: 60px;"
                              >
                                <span class="menu-li-font">大溪地珍珠</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按类别选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(100, -1, 2)"
                              >
                                <span class="menu-li-font">戒指</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(100, -1, 1)"
                              >
                                <span class="menu-li-font">项链</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(100, -1, 5)"
                              >
                                <span class="menu-li-font">耳环</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(100, -1, 4)"
                              >
                                <span class="menu-li-font">胸针</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="caibao-img">
                      <img src="../assets/index/zhenzhu.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  class="zhezhao"
                  id="three"
                  @mouseover="shadeHover($event)"
                  @mouseout="shadeNoHover($event)"
                ></div>
              </li>
              <li class="Headerulli">
                <div class="Headerullititel" @click="checkListJump(98, -1, -1)">
                  裸石
                </div>
                <div class="boderlibox" id="conFour">
                  <div class="boderlibox-main">
                    <div class="box-maincontainer">
                      <div class="maincontainer-tabel">
                        <div class="menu-unit">
                          <div class="menu-title">
                            按材质选购
                          </div>
                          <div style="outline: none;">
                            <ul style="text-transform: capitalize;padding: 0;">
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 1, -1)"
                              >
                                <span class="menu-li-font">海蓝宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 2, -1)"
                              >
                                <span class="menu-li-font">红宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 3, -1)"
                              >
                                <span class="menu-li-font">蓝宝石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 4, -1)"
                              >
                                <span class="menu-li-font">坦桑石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 5, -1)"
                              >
                                <span class="menu-li-font">祖母绿</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 7, -1)"
                              >
                                <span class="menu-li-font">尖晶石</span>
                              </li>
                              <li
                                class="menu-li"
                                @click="checkListJump(98, 6, -1)"
                              >
                                <span class="menu-li-font">碧玺</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="caibao-img">
                      <img src="../assets/index/luoshi.png" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  class="zhezhao"
                  id="four"
                  @mouseover="shadeHover($event)"
                  @mouseout="shadeNoHover($event)"
                ></div>
              </li>
              <li class="Headerulli" style="padding-right: 0;">
                <div class="Headerullititel2" @click="Clicknavigation(5)">
                  联系我们
                </div>
              </li>
            </ul>
          </div>
        </el-header>
        <div class="mainbox" :height="innerHeight + 'px'">
          <div>
            <!-- <router-view :key="$route.fullPath"></router-view> -->
            <router-view v-slot="{ Component }">
              <keep-alive include="list,my">
                <component
                  class="view"
                  :key="$route.fullPath"
                  :is="Component"
                  v-if="$route.meta.keepAlive"
                />
              </keep-alive>
              <component
                v-if="!$route.meta.keepAlive"
                :key="$route.fullPath"
                class="view"
                :is="Component"
              />
            </router-view>
          </div>
          <div class="footer-main">
            <div class="footer-main-container">
              <div class="pc-footer">
                <div class="main-container">
                  <div class="main-container-every">
                    <div class="every-title">珠宝分类</div>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: 99, stone: '', type: -1 },
                        }"
                        ><span @click="goTop">彩宝</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: 97, stone: '', type: -1 },
                        }"
                        ><span @click="goTop">钻石</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: 100, stone: '', type: -1 },
                        }"
                        ><span @click="goTop">珍珠</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: 98, stone: '', type: -1 },
                        }"
                        ><span @click="goTop">裸石</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: '', stone: '', type: 1 },
                        }"
                        ><span @click="goTop">项链</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: '', stone: '', type: 2 },
                        }"
                        ><span @click="goTop">戒指</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: '', stone: '', type: 3 },
                        }"
                        ><span @click="goTop">手链</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: '', stone: '', type: 4 },
                        }"
                        ><span @click="goTop">胸针</span></router-link
                      >
                    </p>
                    <p class="every-a">
                      <router-link
                        :to="{
                          path: '/list',
                          query: { mainStone: '', stone: '', type: 5 },
                        }"
                        ><span @click="goTop">耳环</span></router-link
                      >
                    </p>
                  </div>
                  <div class="main-container-every">
                    <div class="every-title">关注我们</div>
                    <p class="every-a">
                      <a
                        href="https://www.xiaohongshu.com/user/profile/5f97f1100000000001005f5e"
                        target="_blank"
                        >小红书</a
                      >
                    </p>
                    <p class="every-a">
                      <a href="https://v.douyin.com/ehqj9Hd/" target="_blank"
                        >抖音</a
                      >
                    </p>
                    <p class="every-a">
                      <a href="https://weibo.com/u/7530397322" target="_blank"
                        >微博</a
                      >
                    </p>
                  </div>
                  <div class="main-container-every">
                    <div class="every-title">我的账号</div>
                    <p class="every-a">
                      <span @click="loginandregister">账号</span>
                    </p>
                    <p class="every-a" @click="goTop">
                      <span @click="collection">收藏</span>
                    </p>
                  </div>
                  <div class="main-container-every">
                    <div class="every-title">联系我们</div>
                    <p class="every-a">电话 135 5130 7503</p>
                    <p class="every-a">
                      邮箱 contact@pauliana.cn
                    </p>
                  </div>
                </div>
              </div>
              <div class="phone-footer main-container">
                <div class="main-container-every">
                  <div class="every-title">珠宝分类</div>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: 99, stone: '', type: -1 },
                      }"
                      ><span @click="goTop">彩宝</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: 97, stone: '', type: -1 },
                      }"
                      ><span @click="goTop">钻石</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: 100, stone: '', type: -1 },
                      }"
                      ><span @click="goTop">珍珠</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: 98, stone: '', type: -1 },
                      }"
                      ><span @click="goTop">裸石</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: '', stone: '', type: 1 },
                      }"
                      ><span @click="goTop">项链</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: '', stone: '', type: 2 },
                      }"
                      ><span @click="goTop">戒指</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: '', stone: '', type: 3 },
                      }"
                      ><span @click="goTop">手链</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: '', stone: '', type: 4 },
                      }"
                      ><span @click="goTop">胸针</span></router-link
                    >
                  </p>
                  <p class="every-a">
                    <router-link
                      :to="{
                        path: '/list',
                        query: { mainStone: '', stone: '', type: 5 },
                      }"
                      ><span @click="goTop">耳环</span></router-link
                    >
                  </p>
                </div>
                <div class="main-container-every">
                  <div class="every-title">关注我们</div>
                  <p class="every-a">
                    <a
                      href="https://www.xiaohongshu.com/user/profile/5f97f1100000000001005f5e"
                      target="_blank"
                      >小红书</a
                    >
                  </p>
                  <p class="every-a">
                    <a href="https://v.douyin.com/ehqj9Hd/" target="_blank"
                      >抖音</a
                    >
                  </p>
                  <p class="every-a">
                    <a href="https://weibo.com/u/7530397322" target="_blank"
                      >微博</a
                    >
                  </p>
                  <div class="every-title" style="margin-top: 20px;">
                    我的账号
                  </div>
                  <p class="every-a">
                    <span @click="loginandregister">账号</span>
                  </p>
                  <p class="every-a" @click="goTop">
                    <span @click="collection">收藏</span>
                  </p>
                </div>
                <!--  style="width: 33%;" -->
                <div class="main-container-every">
                  <div class="every-title">
                    联系我们
                  </div>
                  <p class="every-a">电话 135 5130 7503</p>
                  <p class="every-a">
                    邮箱 contact@pauliana.cn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-container>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, getCurrentInstance, ref } from "vue";

// import list from '../components/Secondarydirectory.vue'

function routers() {
  const pagenum = ref(0);
  const shownum = ref(0);
  const titelshow = ref(0);
  const showmenunum = ref(0);
  function Clicknavigation(params) {
    if (params == 0) {
      showmenunum.value = 0;
      titelshow.value = 0;
      router.push("/");
    } else if (params == 5) {
      showmenunum.value = 0;
      router.push("/contact");
    } else {
      showmenunum.value = 1;
      titelshow.value = params;
    }
    shownum.value = 0;
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
    return { goTop };
  }

  function titleitemfun(title, stone, type) {
    titelshow.value = 0;
    showmenunum.value = 0;
    router.push({
      path: "/list",
      query: { mainStone: title, stone: stone, type: type },
    });
  }
  console.log(pagenum.value + "---");
  return {
    pagenum,
    Clicknavigation,
    shownum,
    showmenunum,
    titleitemfun,
    titelshow,
  };
}

function size() {
  let bannerHeight;
  let screenWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  function setSize() {
    bannerHeight = (400 / 1920) * screenWidth;
  }
  setSize();

  window.onresize = () => {
    screenWidth = window.innerWidth;
    setSize();
  };

  return {
    setSize,
    bannerHeight,
    screenWidth,
    innerHeight,
  };
}

export default defineComponent({
  name: "Home",
  // components: {list},
  setup() {
    window.onbeforeunload = function(event) {
      document.documentElement.scrollTop = 0; //ie下
      document.body.scrollTop = 0; //非ie
      event.cancelBubble = true;
      event.stopPropagation();
    };
    const imglogoitem = ref(0);
    const seachinput = ref("");
    const {
      pagenum,
      Clicknavigation,
      shownum,
      showmenunum,
      titelshow,
      titleitemfun,
    } = routers();
    const { bannerHeight, screenWidth, innerHeight } = size();
    const message = getCurrentInstance()?.appContext.config.globalProperties
      .$message;
    function clickfun() {
      function menu() {
        showmenunum.value = 1;
        console.log(showmenunum.value);
      }

      function otherClick(e: any) {
        const className = e.target.className;
        if (
          className == "top-jump-font01" ||
          className == "search" ||
          className == "s11" ||
          className == "homedetails-input" ||
          className == "home-input" ||
          className == "homedetails-input-img" ||
          className == "inputbox" ||
          className == "inputbox2" ||
          className == "seachimg"
        ) {
          shownum.value = 1;
          seachinput.value = "";
        } else {
          shownum.value = 0;
        }
        if (
          className == "imglogoerweima" ||
          className == "imglogoitem" ||
          className == "imgflex imgflex2"
        ) {
          imglogoitem.value = 1;
        } else {
          imglogoitem.value = 0;
        }
        console.log(className + "=====" + shownum.value);
      }

      function seachicon() {
        shownum.value = 0;
        router.push({
          path: "/list",
          query: {
            search: seachinput.value,
          },
        });
      }
      function keyupenter() {
        shownum.value = 0;
        router.push({
          path: "/list",
          query: {
            search: seachinput.value,
          },
        });
      }
      function loginandregister() {
        if (
          localStorage.getItem("token") == "" ||
          localStorage.getItem("token") == null ||
          localStorage.getItem("token") == "undefined" ||
          localStorage.getItem("token") == undefined
        ) {
          router.push("/login");
        } else {
          router.push("/my");
        }
      }

      function collection() {
        if (
          localStorage.getItem("token") == "" ||
          localStorage.getItem("token") == null ||
          localStorage.getItem("token") == "undefined" ||
          localStorage.getItem("token") == undefined
        ) {
          message.warning({
            message: "登录后即可查看收藏列表",
          });
          router.push("/login");
        } else {
          console.log("5555555555");
          router.push({ path: "/my", query: { topshow: 2 } });
        }
      }

      function closeicon(num) {
        if (num == 1) {
          const menu: any = document.getElementsByClassName("menunav1")[0];
          menu.style.animationName = "move2";
          setTimeout(() => {
            showmenunum.value = 0;
            menu.style.animationName = "move";
          }, 500); //关闭动画
          console.log(menu.style);
        } else if (num == 2) {
          const menu: any = document.getElementsByClassName("menunav1")[0];
          menu.style.animationName = "move2";
          setTimeout(() => {
            menu.style.animationName = "move";
            showmenunum.value = 0; //二级---菜单关闭
            titelshow.value = 0;
          }, 500);
        } else if (num == 3) {
          shownum.value = 0; //关闭搜索框
        } else if (num == 4) {
          //返回一级菜单
          const title: any = document.getElementsByClassName("titelbox");
          title[titelshow.value - 1].style.animationName = "move2";

          setTimeout(() => {
            title[titelshow.value - 1].style.animationName = "move";
            titelshow.value = 0;
          }, 500); //关闭动画
        }
        console.log(shownum.value, "oooo");
      }

      function secondarymenu(gem, type) {
        router.push({
          path: "/list",
          query: { stone: gem, typ: type },
        });
      }
      return {
        seachicon,
        keyupenter,
        loginandregister,
        collection,
        closeicon,
        shownum,
        showmenunum,
        menu,
        otherClick,
        secondarymenu,
        titelshow,
      };
    }

    const {
      seachicon,
      keyupenter,
      loginandregister,
      collection,
      closeicon,
      menu,
      otherClick,
      secondarymenu,
    } = clickfun();

    function watchScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      //  当滚动超过 50 时，实现吸顶效果
      const header: any = document.getElementsByClassName("Header")[0];
      if (scrollTop > 1) {
        header.style.top = "0px";
      } else if (0 < scrollTop && scrollTop < 40) {
        header.style.top = scrollTop + "px";
      } else {
        header.style.top = "42px";
      }
    }

    window.addEventListener("scroll", watchScroll);

    function checkListJump(one: number, two: number, three: number) {
      console.log("88888888888888", router.currentRoute.value);

      shownum.value = 0;
      router.push({
        path: "/list",
        query: {
          mainStone: one,
          stone: two,
          type: three,
        },
      });

      document.getElementById("conOne").style.display = "none";
      document.getElementById("conTwo").style.display = "none";
      document.getElementById("conThree").style.display = "none";
      document.getElementById("conFour").style.display = "none";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "none";
      setTimeout(() => {
        document.getElementById("conOne").style.display = "";
        document.getElementById("conTwo").style.display = "";
        document.getElementById("conThree").style.display = "";
        document.getElementById("conFour").style.display = "";
        document.getElementById("one").style.display = "";
        document.getElementById("two").style.display = "";
        document.getElementById("three").style.display = "";
        document.getElementById("four").style.display = "";
      }, 1000);
    }

    function shadeHover(e: any) {
      // console.log(e)
      document.getElementById("conOne").style.display = "none";
      document.getElementById("conTwo").style.display = "none";
      document.getElementById("conThree").style.display = "none";
      document.getElementById("conFour").style.display = "none";
      e.target.style.display = "none";
    }

    function shadeNoHover(e: any) {
      // console.log(e)
      document.getElementById("conOne").style.display = "";
      document.getElementById("conTwo").style.display = "";
      document.getElementById("conThree").style.display = "";
      document.getElementById("conFour").style.display = "";
      e.target.style.display = "";
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

    window.onbeforeunload = function() {
      document.documentElement.scrollTop = 0; //ie下
      document.body.scrollTop = 0; //非ie
    };

    return {
      goTop,
      pagenum,
      Clicknavigation,
      seachinput,
      seachicon,
      keyupenter,
      checkListJump,
      loginandregister,
      collection,
      imglogoitem,
      bannerHeight,
      showmenunum,
      screenWidth,
      closeicon,
      shownum,
      menu,
      otherClick,
      innerHeight,
      watchScroll,
      secondarymenu,
      titelshow,
      titleitemfun,
      shadeHover,
      shadeNoHover,
    };
  },
});
</script>
<style lang="scss" scoped>
.wechat {
  cursor: pointer;
}

.wechat:hover + .contact-er {
  display: block;
}

.contact-er {
  width: 200px;
  height: 200px;
  display: none;
  position: fixed;
  top: 10px;
  z-index: 999999999;

  img {
    width: 100%;
    height: 100%;
  }
}

.footer-main {
  width: 100%;
  // height: 46px;
  // position: absolute;
  // bottom: 0;
  // left: 0;

  .footer-main-container {
    width: 100%;
    background-color: #a5c2dd;
    border-top: 1px solid #e5e5e5;

    .every-title {
      font-size: 15px;
      color: #fff;
    }

    .every-a {
      font-size: 14px;
      color: #fff;

      span {
        font-size: 14px;
        color: #fff;
        cursor: pointer;
      }

      a {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}

.inputbox {
  width: 62%;
  margin: auto;
}

.home-input {
  margin: 40px auto;
  display: flex;

  .homedetails-input {
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

  .homedetails-input-img {
    display: inline-block;
    margin-left: -30px;
    display: flex;
    align-items: center;
    // margin-top: 11px;
    cursor: pointer;
  }

  .details-input:hover {
    border: 1px solid #ccc;
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
@media screen and (min-width: 1601px) {
  .contact-er {
    left: 200px;
  }

  .main-container {
    width: 50%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    .main-container-every {
      .every-title {
        margin-bottom: 20px;
        letter-spacing: 2;
      }

      .every-a {
        margin-bottom: 10px;

        a {
          letter-spacing: 1;
        }
      }
    }
  }

  .pc-footer {
    display: block;
  }

  .phone-footer {
    display: none;
  }

  .home {
    width: 100%;
    position: relative;

    .navigation {
      .logotitle {
        width: 100%;
        margin: auto;
        line-height: 42px;
        border-bottom: 1px solid rgba(229, 229, 229, 0.4);
        font-family: "微软雅黑";
        position: relative;

        .iconbox {
          display: none;
        }

        .navlogo {
          display: none;
        }

        .user {
          display: none;
        }

        .menu {
          display: none;
        }

        .pc_nav {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          .top-line {
            width: 1px;
            height: 15px;
            margin: 0 10px;
            margin-top: 12.5px;
            line-height: 42px;
            background-color: rgba(229, 229, 229, 0.4);
          }

          .pcnav {
            display: flex;

            .top-jump-img {
              height: 15px;
              line-height: 42px;
              padding-top: 1px;

              img {
                width: 15px;
                height: 15px;
                object-fit: contain;
              }
            }

            .top-jump-font01,
            .top-jump-font {
              padding-left: 5px;
              font-size: 12px;
            }

            .user-right {
              display: flex;
              font-size: 1rem;
              position: relative;
            }
          }

          .animateLine {
            cursor: pointer;
            display: flex;
            margin-left: 1rem;
            background-image: linear-gradient(#919090, #000);
            background-position: bottom left;
            background-size: 0% 2px;
            background-repeat: no-repeat;
            background-color: #fff;
            transition: background-size 0.5s, background-position 0s 0.51s; /*don't animate position and add a delay */
          }

          .animateLine:hover {
            background-position: bottom left;
            background-size: 100% 2px;
          }
        }

        .seach {
          .seachinput {
            display: inline-block;
            position: absolute;
            width: 100%;
            // height: 42vh;
            right: 0;
            top: 0;
            z-index: 9999999999999999;
            background: #fff;

            .el-input {
              margin: 2rem 0;
              width: 61vw;
            }
          }
        }

        i {
          font-size: 1.2rem;
          cursor: pointer;
        }

        span {
          cursor: pointer;
        }

        .menunav {
          display: none;
        }
      }
    }

    .Header {
      width: 100%;
      margin: 0 auto;
      position: fixed;
      top: 42px;
      left: 0;
      text-align: center;
      background-color: #fff;
      color: #636363;
      font-size: 13px;
      font-family: Nunito Sans;
      z-index: 9999999;
      border-top: 1px solid rgba(229, 229, 229, 0.4);
      border-bottom: 1px solid rgba(229, 229, 229, 0.4);

      .header-main {
        width: 75%;
        margin: 0 auto;
        display: flex;

        .header-main-img {
          // line-height: 73px;
          display: flex;
          align-items: center;

          img {
            width: 175px;
            height: 29px;
          }
        }
      }

      .Headerul {
        // width: 75%;
        width: 500px;
        height: 73px;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        list-style: none;
      }

      li {
        // width: 20%;
        text-align: left;
      }

      .Headerulli {
        height: 73px;
        padding: 0 30px;
        line-height: 73px;
        display: flex;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }

      .Headerullititel {
        width: 28px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerullititel2 {
        width: 56px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerulli:hover:hover .Headerullititel2 {
        border-bottom: 1px solid #0e2c4d;
        color: #0e2c4d;
      }

      .Headerulli:hover .Headerullititel {
        border-bottom: 1px solid #0e2c4d;
        color: #0e2c4d;
      }

      .Headerulinput {
        width: 173px;
      }

      .Headerulli:hover .boderlibox {
        display: block;
      }

      .Headerulli:hover .zhezhao {
        display: block;
      }

      .boderlibox {
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background-color: #fff;
        line-height: 100px;
        color: #000;
        display: none;
        z-index: 9999;
        cursor: default;

        .boderlibox-main {
          margin-left: 12.5%;
          margin-right: 12.5%;
          display: flex;
          justify-content: space-between;

          .box-maincontainer {
            width: 40%;
            position: relative;
            z-index: 50;
            padding: 30px 0;
            height: 300px;
            display: table;
            background: linear-gradient(to right, #fff 70%, transparent 70%);
          }

          .caibao-img {
            // width: 45%;
            width: 586px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 100%;
              height: 310px;
            }
          }
        }
      }

      .zhezhao {
        height: 100%;
        position: fixed;
        top: 415px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
        display: none;
      }

      .Headerulimg {
        vertical-align: middle;
      }

      .Headerulimg img {
        width: 74%;
        float: left;
      }

      .maincontainer-tabel:nth-child(1) {
        width: 20%;
      }

      .maincontainer-tabel:nth-child(2) {
        width: 20%;
      }

      .maincontainer-tabel {
        position: relative;
        height: 100%;
        display: table-cell;
      }

      .menu-title {
        padding-bottom: 10px;
        color: #000;
        font-size: 13px;
        font-weight: 600;
        cursor: text;

        .title-img {
          padding-top: 1px;
          margin-right: 7px;

          img {
            width: 18px;
            height: 18px;
          }
        }

        span {
          font-size: 13px;
          color: #000;
          font-weight: 400;
        }
      }

      .maincontainer-tabel:nth-child(1) .menu-unit {
        padding-left: 0;
      }

      .menu-unit {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        text-transform: none;
        margin-bottom: 7%;
        padding: 0 5%;
      }

      .menu-li {
        width: 50px;
        display: flex;
        line-height: 30px;
        cursor: pointer;

        .menu-li-font {
          font-size: 12px;
          color: rgb(104, 96, 96);
        }

        .menu-li-font:hover {
          color: #0e2c4d;
          border-bottom: 1px solid #0e2c4d;
        }
      }
    }

    .mainbox {
      margin-top: 70px;
      // background-color: #fff;
      background-color: #fafafa;
    }

    //隐藏滚动轴
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}

@media screen and (min-width: 1201px) and (max-width: 1600px) {
  .contact-er {
    left: 180px;
  }

  .main-container {
    width: 50%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;

    .main-container-every {
      .every-title {
        margin-bottom: 20px;
        letter-spacing: 2;
      }

      .every-a {
        margin-bottom: 10px;

        a {
          letter-spacing: 1;
        }
      }
    }
  }

  .pc-footer {
    display: block;
    background-color: #a5c2dd;
  }

  .phone-footer {
    display: none;
  }

  .home {
    width: 100%;
    position: relative;

    .navigation {
      .logotitle {
        width: 100%;
        margin: auto;
        line-height: 42px;
        border-bottom: 1px solid rgba(229, 229, 229, 0.4);
        font-family: "微软雅黑";
        position: relative;

        .iconbox {
          display: none;
        }

        .navlogo {
          display: none;
        }

        .user {
          display: none;
        }

        .menu {
          display: none;
        }

        .pc_nav {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          .top-line {
            width: 1px;
            height: 15px;
            margin: 0 10px;
            margin-top: 12.5px;
            line-height: 42px;
            background-color: rgba(229, 229, 229, 0.4);
          }

          .pcnav {
            display: flex;

            .top-jump-img {
              height: 15px;
              line-height: 42px;
              padding-top: 1px;

              img {
                width: 15px;
                height: 15px;
                object-fit: contain;
              }
            }

            .top-jump-font01,
            .top-jump-font {
              padding-left: 5px;
              font-size: 12px;
            }

            .user-right {
              display: flex;
              font-size: 1rem;
              position: relative;
            }
          }

          .animateLine {
            cursor: pointer;
            display: flex;
            margin-left: 1rem;
            background-image: linear-gradient(#919090, #000);
            background-position: bottom left;
            background-size: 0% 2px;
            background-repeat: no-repeat;
            background-color: #fff;
            transition: background-size 0.5s, background-position 0s 0.51s; /*don't animate position and add a delay */
          }

          .animateLine:hover {
            background-position: bottom left;
            background-size: 100% 2px;
          }
        }

        .seach {
          .seachinput {
            display: inline-block;
            position: absolute;
            width: 100%;
            // height: 42vh;
            right: 0;
            top: 0;
            z-index: 9999999999999999;
            background: #fff;

            .el-input {
              margin: 2rem 0;
              width: 61vw;
            }
          }
        }

        i {
          font-size: 1.2rem;
          cursor: pointer;
        }

        span {
          cursor: pointer;
        }

        .menunav {
          display: none;
        }
      }
    }

    .Header {
      width: 100%;
      margin: 0 auto;
      position: fixed;
      top: 42px;
      left: 0;
      text-align: center;
      background-color: #fff;
      color: #636363;
      font-size: 13px;
      font-family: Nunito Sans;
      z-index: 9999999;
      border-top: 1px solid rgba(229, 229, 229, 0.4);
      border-bottom: 1px solid rgba(229, 229, 229, 0.4);

      .header-main {
        width: 75%;
        margin: 0 auto;
        display: flex;

        .header-main-img {
          // line-height: 73px;
          display: flex;
          align-items: center;

          img {
            width: 175px;
            height: 29px;
          }
        }
      }

      .Headerul {
        // width: 75%;
        width: 500px;
        height: 73px;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        align-items: center;
        list-style: none;
        font-size: 14px;
      }

      li {
        // width: 20%;
        text-align: left;
      }

      .Headerulli {
        height: 73px;
        padding: 0 30px;
        line-height: 73px;
        display: flex;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }

      .Headerullititel {
        width: 28px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerullititel2 {
        width: 56px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerulli:hover:hover .Headerullititel2 {
        border-bottom: 1px solid #000;
      }

      .Headerulli:hover .Headerullititel {
        border-bottom: 1px solid #000;
      }

      .Headerulinput {
        width: 173px;
      }

      .Headerulli:hover .boderlibox {
        display: block;
      }

      .Headerulli:hover .zhezhao {
        display: block;
      }

      .boderlibox {
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background-color: #fff;
        line-height: 100px;
        color: #000;
        display: none;
        z-index: 9999;
        cursor: default;

        .boderlibox-main {
          margin-left: 12.5%;
          margin-right: 12.5%;
          display: flex;
          justify-content: space-between;

          .box-maincontainer {
            width: 40%;
            position: relative;
            z-index: 50;
            padding: 30px 0;
            height: 300px;
            display: table;
            background: linear-gradient(to right, #fff 70%, transparent 70%);
          }

          .caibao-img {
            // width: 45%;
            width: 586px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 100%;
              height: 310px;
            }
          }
        }
      }

      .zhezhao {
        height: 100%;
        position: fixed;
        top: 415px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
        display: none;
      }

      .Headerulimg {
        vertical-align: middle;
      }

      .Headerulimg img {
        width: 74%;
        float: left;
      }

      .maincontainer-tabel:nth-child(1) {
        width: 20%;
      }

      .maincontainer-tabel:nth-child(2) {
        width: 20%;
      }

      .maincontainer-tabel {
        position: relative;
        height: 100%;
        display: table-cell;
      }

      .menu-title {
        padding-bottom: 10px;
        color: #000;
        font-size: 13px;
        font-weight: 600;
        cursor: text;

        .title-img {
          padding-top: 1px;
          margin-right: 7px;

          img {
            width: 18px;
            height: 18px;
          }
        }

        span {
          font-size: 13px;
          color: #000;
          font-weight: 400;
        }
      }

      .maincontainer-tabel:nth-child(1) .menu-unit {
        padding-left: 0;
      }

      .menu-unit {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        text-transform: none;
        margin-bottom: 7%;
        padding: 0 5%;
      }

      .menu-li {
        width: 50px;
        display: flex;
        line-height: 30px;
        cursor: pointer;

        .menu-li-font {
          font-size: 12px;
          color: rgb(104, 96, 96);
        }

        .menu-li-font:hover {
          color: #0e2c4d;
          border-bottom: 1px solid #0e2c4d;
        }
      }
    }

    .mainbox {
      margin-top: 70px;
      // background-color: #fff;
      background-color: #fafafa;
    }

    //隐藏滚动轴
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}

@media screen and(min-width: 768px) and (max-width: 1200px) {
  .contact-er {
    left: 170px;
  }

  .main-container {
    width: 70%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;

    .main-container-every {
      .every-title {
        margin-bottom: 20px;
        letter-spacing: 2;
      }

      .every-a {
        margin-bottom: 10px;

        a {
          letter-spacing: 1;
        }
      }
    }
  }

  .pc-footer {
    display: block;
    background-color: #a5c2dd;
  }

  .phone-footer {
    display: none;
  }

  .home {
    width: 100%;
    position: relative;

    .navigation {
      .logotitle {
        width: 100%;
        margin: auto;
        line-height: 42px;
        border-bottom: 1px solid rgba(229, 229, 229, 0.4);
        font-family: "微软雅黑";
        position: relative;

        .iconbox {
          display: none;
        }

        .navlogo {
          display: none;
        }

        .user {
          display: none;
        }

        .menu {
          display: none;
        }

        .pc_nav {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          .top-line {
            width: 1px;
            height: 15px;
            margin: 0 10px;
            margin-top: 12.5px;
            line-height: 42px;
            background-color: rgba(229, 229, 229, 0.4);
          }

          .pcnav {
            display: flex;

            .top-jump-img {
              height: 15px;
              line-height: 42px;
              padding-top: 1px;

              img {
                width: 15px;
                height: 15px;
                object-fit: contain;
              }
            }

            .top-jump-font01,
            .top-jump-font {
              padding-left: 5px;
              font-size: 12px;
            }

            .user-right {
              display: flex;
              font-size: 1rem;
              position: relative;
            }
          }

          .animateLine {
            cursor: pointer;
            display: flex;
            margin-left: 1rem;
            background-image: linear-gradient(#919090, #000);
            background-position: bottom left;
            background-size: 0% 2px;
            background-repeat: no-repeat;
            background-color: #fff;
            transition: background-size 0.5s, background-position 0s 0.51s; /*don't animate position and add a delay */
          }

          .animateLine:hover {
            background-position: bottom left;
            background-size: 100% 2px;
          }
        }

        .seach {
          .seachinput {
            display: inline-block;
            position: absolute;
            width: 100%;
            // height: 42vh;
            right: 0;
            top: 0;
            z-index: 9999999999999999;
            background: #fff;

            .el-input {
              margin: 2rem 0;
              width: 61vw;
            }
          }
        }

        i {
          font-size: 1.2rem;
          cursor: pointer;
        }

        span {
          cursor: pointer;
        }

        .menunav {
          display: none;
        }
      }
    }

    .Header {
      width: 100%;
      margin: 0 auto;
      position: fixed;
      top: 42px;
      left: 0;
      text-align: center;
      background-color: #fff;
      color: #636363;
      font-size: 13px;
      font-family: Nunito Sans;
      z-index: 9999999;
      border-top: 1px solid rgba(229, 229, 229, 0.4);
      border-bottom: 1px solid rgba(229, 229, 229, 0.4);

      .header-main {
        width: 80%;
        margin: 0 auto;
        display: flex;

        .header-main-img {
          // line-height: 73px;
          display: flex;
          align-items: center;
        }
      }

      .Headerul {
        // width: 75%;
        width: 500px;
        height: 73px;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        align-items: center;
        list-style: none;
        font-size: 14px;
      }

      li {
        // width: 20%;
        text-align: left;
      }

      .Headerulli {
        height: 73px;
        padding: 0 30px;
        line-height: 73px;
        display: flex;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }

      .Headerullititel {
        width: 28px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerullititel2 {
        width: 56px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-transform: capitalize;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
        font-weight: 600;
      }

      .Headerulli:hover:hover .Headerullititel2 {
        border-bottom: 1px solid #000;
      }

      .Headerulli:hover .Headerullititel {
        border-bottom: 1px solid #000;
      }

      .Headerulinput {
        width: 173px;
      }

      .Headerulli:hover .boderlibox {
        display: block;
      }

      .Headerulli:hover .zhezhao {
        display: block;
      }

      .boderlibox {
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background-color: #fff;
        line-height: 100px;
        color: #000;
        display: none;
        z-index: 9999;
        cursor: default;

        .boderlibox-main {
          margin-left: 10%;
          margin-right: 10%;
          display: flex;
          justify-content: space-between;

          .box-maincontainer {
            width: 40%;
            position: relative;
            z-index: 50;
            padding: 30px 0;
            height: 300px;
            display: table;
            background: linear-gradient(to right, #fff 70%, transparent 70%);
          }

          .caibao-img {
            // width: 45%;
            width: 586px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 100%;
              height: 310px;
            }
          }
        }
      }

      .zhezhao {
        height: 100%;
        position: fixed;
        top: 415px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
        display: none;
      }

      .Headerulimg {
        vertical-align: middle;
      }

      .Headerulimg img {
        width: 74%;
        float: left;
      }

      .maincontainer-tabel:nth-child(1) {
        width: 20%;
      }

      .maincontainer-tabel:nth-child(2) {
        width: 20%;
      }

      .maincontainer-tabel {
        position: relative;
        height: 100%;
        display: table-cell;
      }

      .menu-title {
        padding-bottom: 10px;
        color: #000;
        font-size: 13px;
        font-weight: 600;
        cursor: text;

        .title-img {
          padding-top: 1px;
          margin-right: 7px;

          img {
            width: 18px;
            height: 18px;
          }
        }

        span {
          font-size: 13px;
          color: #000;
          font-weight: 400;
        }
      }

      .maincontainer-tabel:nth-child(1) .menu-unit {
        padding-left: 0;
      }

      .menu-unit {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        text-transform: none;
        margin-bottom: 7%;
        padding: 0 5%;
      }

      .menu-li {
        width: 50px;
        display: flex;
        line-height: 30px;
        cursor: pointer;

        .menu-li-font {
          font-size: 12px;
          color: rgb(104, 96, 96);
        }

        .menu-li-font:hover {
          color: #0e2c4d;
          border-bottom: 1px solid #0e2c4d;
        }
      }
    }

    .mainbox {
      margin-top: 70px;
      // background-color: #fff;
      background-color: #fafafa;
    }

    //隐藏滚动轴
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}

@media screen and (min-width: 360px) and (max-width: 767px) {
  .main-container {
    width: 95%;
    margin: 0 auto;
    padding: 0 0 10px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .main-container-every {
      width: 33.333333%;
      margin-top: 20px;

      .every-title {
        font-size: 13px;
        margin-bottom: 15px;
        letter-spacing: 2;
      }
      .every-a span {
        font-size: 12px;
      }
      .every-a a {
        font-size: 12px;
      }

      .every-a {
        font-size: 12px;
        margin-bottom: 10px;

        a {
          letter-spacing: 1;
        }
      }
    }
  }

  .pc-footer {
    display: none;
  }

  .inputbox {
    width: 80%;
    margin: auto;

    .input-phone {
      margin-top: 30px;
    }
  }

  .inputbox2 {
    line-height: initial;
  }

  .home {
    background-color: #fff;

    .navigation {
      .logotitle {
        display: flex;
        width: 100vw;
        margin: auto;
        position: fixed;
        line-height: 44px;
        justify-content: space-between;
        border-top: 4px solid #a5c2dd;
        z-index: 999;
        background-color: #fff;

        .navlogo {
          font-weight: bold;
          width: 33%;
          height: 44px;
          margin: auto;
          color: #f8f8f8;
          font-family: monospace;
          text-shadow: 2px 2px 2px #fff, 3px 1px 4px #d1d9e6;
        }

        .iconbox {
          display: flex;
          position: relative;

          .seach {
            margin-left: 1rem;
            font-size: 1rem;

            .seachinput {
              // display: none;
              position: absolute;
              width: 100vw;
              height: 182px;
              left: 0;
              top: 0;
              z-index: 999999999999999999999999;
              padding-top: 1rem;
              background-color: #fff;
              backdrop-filter: blur(6px);

              .el-input {
                width: 100%;
              }

              .close {
                float: right;
              }
            }
          }

          .menu {
            margin-left: 1rem;

            @keyframes twinkling {
              0% {
                opacity: 0;
                left: -50%;
              }
              50% {
                opacity: 0.2;
                left: 0%;
              }
              100% {
                opacity: 1;
                left: 0%;
              }
            }
            .menunav1 {
              position: fixed;
              width: 100vw;
              height: 100vh;
              overflow-y: hidden;
              left: 0;
              top: 0;
              z-index: 99999999999999999999;
              padding-top: 1rem;
              background-color: #fff;
              backdrop-filter: blur(6px);
              animation: move 0.5s linear forwards;
              border-top: 4px solid #a5c2dd;

              .menunav1box {
                width: 90%;
                margin: auto;

                .Headerul {
                  list-style: none;
                  text-align: left;
                  color: #000;

                  .Headerullititel {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 1.5;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 24px;
                    animation: twinkling 1.5s;
                    // transition: margin 2s,opacity 2s;
                  }

                  .titelbox {
                    width: 100vw;
                    height: 100vh;
                    overflow-y: scroll;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    z-index: 9999999999999999999999;
                    animation: move 0.5s linear forwards;

                    .inset {
                      width: 90%;
                      margin: auto;
                      .insettop {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 16px;
                        font-size: 1rem;
                        i {
                          line-height: 48px;
                        }
                      }
                      .titeltiem {
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 1.5;
                        margin-bottom: 24px;
                        font-family: Tahoma, Arial, Helvetica,
                          "Microsoft YaHei New", "Microsoft Yahei", 微软雅黑,
                          宋体, SimSun, STXihei, 华文细黑, sans-serif;
                      }
                      .titeltiemul {
                        font-size: 14px;
                        line-height: 1.5;
                        list-style: none;
                        font-family: Tahoma, Arial, Helvetica,
                          "Microsoft YaHei New", "Microsoft Yahei", 微软雅黑,
                          宋体, SimSun, STXihei, 华文细黑, sans-serif;
                        animation: twinkling 1.4s;
                        li {
                          font-weight: 300;
                          margin: 0 0 24px 32px;
                        }
                      }
                    }
                  }
                }
              }
              .contact {
                text-align: left;
                width: 90%;
                margin: auto;
                margin-top: 10px;
                border-top: 1px solid #e4e4e4;
                // font-weight: 300;
                font-size: 0.7rem;
                line-height: 1.5;
                font-family: Tahoma, Arial, Helvetica, "Microsoft YaHei New",
                  "Microsoft Yahei", 微软雅黑, 宋体, SimSun, STXihei, 华文细黑,
                  sans-serif;
                .contactus {
                  padding: 30px 0 10px;
                  font-size: 14px;
                }
                .imglogoerweima {
                  margin-top: 10px;
                }
                .imglogo {
                  font-size: 14px;
                  font-weight: 300;
                  height: 18px;
                  line-height: 18px;
                  padding-bottom: 24px;
                  cursor: pointer;
                  a {
                    display: flex;
                  }
                  span {
                    padding-left: 6px;
                    line-height: 18px;
                  }
                  .imgflex {
                    height: 18px;
                    width: 38px;
                    img {
                      vertical-align: middle;
                    }
                  }

                  .erweima {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    width: 100vw;
                    height: 100vh;
                    img {
                      width: 200px;
                      height: 200px;
                      position: absolute;
                      top: 41.5%;
                      transform: translate(-50%, -50%);
                      left: 50%;
                    }
                    div {
                      width: 100%;
                      text-align: center;
                      color: #919090;
                      position: absolute;
                      bottom: 41.5%;
                      font-size: 12px;
                    }
                  }
                }

                a {
                  color: #000;
                }
              }
            }
          }
        }
        .user {
          display: flex;
          .ispan {
            margin-right: 1rem;
          }
        }
        .pc_nav {
          display: none;
        }
      }
      .Header {
        display: none;
      }
      .mainbox {
        width: 100%;
        // background-color: #fff;
        background-color: #fafafa;
        margin-top: 48px;
        z-index: 0;
      }
    }
  }
}
</style>
<style lang="scss" type="text/css">
#home-container {
  .el-header {
    padding: 0;
  }

  .el-footer {
    padding: 0;
  }
}
@keyframes move {
  0% {
    left: -100%;
    transform: rotate(0deg);
  }
  100% {
    left: 0%;
    transform: rotate(0deg);
  }
}
@keyframes move2 {
  0% {
    left: 0%;
    transform: rotate(0deg);
  }
  100% {
    left: -100%;
    transform: rotate(0deg);
  }
}
</style>
