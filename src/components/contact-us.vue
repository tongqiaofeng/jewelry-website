<template>
  <div class="contact-us-container">
    <!-- <h1>联系我们</h1> -->
    <div class="Secondarydirectory-navbar" style="display:none">
      <div class="navbar-main">
        <router-link to="/" style="color: #000;">首页</router-link>
        <div style="display: flex;">
          <div style="margin: 0 6px;">
            /
          </div>
          <span style="color: #777;">联系我们</span>
        </div>
      </div>
    </div>
    <div class="contact-brand-info">
      <div class="info-title">品牌简介</div>
      <div class="info-main">
        <p>这是国内最令人欣喜的新晋珠宝品牌之一，宝莉安娜。</p>
        <p>
          宝莉安娜一直秉承着追求完美的信念，是一家可以根据客户需求，进行私人定制的高级珠宝公司。
        </p>
        <p>
          宝莉安娜拥有着全球一流的宝石猎人团队，承诺为客户提供最顶级的宝石品质，我们一直致力于Fine
          Jewelry的设计与制作,从世界各地的文化和理念中汲取灵感，为中高端客户提供原创设计，进而彰显出属于TA们自身格调与品位的珠宝饰品。
        </p>
      </div>
    </div>
    <div class="contact-brand-list">
      <div class="list-every every-one">
        <div class="every-main">
          <div class="font-map">
            <p class="main-title">专业团队</p>
            <p class="main-font">
              团队成员毕业于国内外知名高校，拥有丰富的理论基础和实践经验。
            </p>
          </div>
        </div>
      </div>
      <div class="list-every every-two">
        <div class="every-main">
          <div class="font-map">
            <p class="main-title">产地直供</p>
            <p class="main-font">
              多年深耕渠道，足迹涵盖非洲、欧洲及东南亚矿区的宝石原料采购，同时原材料也深受欧洲皇室所喜爱。
            </p>
          </div>
        </div>
      </div>
      <div class="list-every every-three">
        <div class="every-main">
          <div class="font-map">
            <p class="main-title">原创设计</p>
            <p class="main-font">
              专业的设计团队展现宝石独特魅力，给客户带来独一无二的原创珠宝。
            </p>
          </div>
        </div>
      </div>
      <div class="list-every every-four">
        <div class="every-main">
          <div class="font-map">
            <p class="main-title">自有工厂</p>
            <p class="main-font">
              自有工厂，全部产品自主镶嵌，去除中间环节，品质更有保障。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-details">
      <div class="details-left">
        <p class="left-title">联系我们</p>
        <div class="left-every">
          <div class="every-img">
            <img src="../assets/contact/phone.png" class="img" />
          </div>
          <div class="every-font">
            <p class="font-top">电话</p>
            <p class="font-bottom">135 5130 7503</p>
          </div>
        </div>
        <div class="left-every every-two">
          <div class="every-img">
            <img src="../assets/contact/email.png" class="img" />
          </div>
          <div class="every-font">
            <p class="font-top">电子邮箱</p>
            <p class="font-bottom">contact@pauliana.cn</p>
          </div>
        </div>
        <div class="left-every every-three">
          <div class="every-img">
            <img src="../assets/contact/addr.png" class="img" />
          </div>
          <div class="every-font">
            <p class="font-top">地址</p>
            <p class="font-bottom">
              四川省，成都市，锦江区，明宇金融广场-2901A
            </p>
          </div>
        </div>
      </div>
      <div class="details-right">
        <a
          href="http://api.map.baidu.com/geocoder?address=%E6%98%8E%E5%AE%87%E9%87%91%E8%9E%8D%E5%B9%BF%E5%9C%BA&output=html&src=webapp.baidu.openAPIdemo"
          target="_blank"
          ><img src="../assets/contact/map.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    function gohome() {
      router.push("/");
    }
    return {
      gohome,
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-us-container {
  width: 100%;

  .Secondarydirectory-navbar {
    width: 100%;
    background-color: #f1e1e6;

    .navbar-main {
      margin: 0 auto;
      display: flex;
      font-weight: 600;
    }
  }

  .contact-brand-info {
    background-color: #fff;
    box-shadow: 0px 0px 15px 1px #f1f1f1;

    .info-main {
      color: #525252;
      font-size: 14px;
    }
  }

  .contact-brand-list {
    display: flex;
    flex-wrap: wrap;

    .every-one {
      background: url("../assets/contact/list1.png");
      background-size: 100% 100%;
    }

    .every-two {
      background: url("../assets/contact/list2.png");
      background-size: 100% 100%;
    }

    .every-three {
      background: url("../assets/contact/list3.png");
      background-size: 100% 100%;
    }

    .every-four {
      background: url("../assets/contact/list4.png");
      background-size: 100% 100%;
    }

    .main-title {
      font-weight: bold;
      color: #fff;
    }

    .main-font {
      font-size: 14px;
      color: #fff;
      text-align: left;
    }

    .every-main {
      background: url("../assets/contact/line.png") no-repeat;
      background-size: 100% 100%;
      text-align: center;
    }
  }

  .details-right {
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 1701px) {
  .Secondarydirectory-navbar {
    height: 68px;
    line-height: 68px;

    .navbar-main {
      width: 70%;
      font-size: 15px;
    }
  }

  .contact-brand-info {
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;

    .info-title {
      padding-top: 40px;
      margin-left: 30px;
      font-size: 30px;
    }

    .info-main {
      margin: 20px 0 0 30px;
      padding-bottom: 40px;
      line-height: 30px;

      p {
        width: 80%;
      }
    }
  }

  .contact-brand-list {
    width: 70%;
    margin: 0 auto;
    justify-content: space-between;

    .list-every {
      width: 300px;
      height: 342px;
      margin-top: 20px;

      .every-main {
        width: 266px;
        height: 160px;
        margin: 0 auto;
        margin-top: 91px;
        background-image: url("../assets/contact/line.png");
        text-align: center;

        .font-map {
          width: 226px;
          height: 100px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;

          .main-title {
            margin-top: -20px;
            font-size: 30px;
          }

          .main-font {
            margin-top: 30px;
            line-height: 23px;
          }
        }
      }
    }
  }

  .contact-details {
    width: 70%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;

    .details-left {
      width: 340px;

      .left-title {
        font-size: 18px;
        font-weight: 600;
      }

      .left-every {
        margin-top: 38px;
        display: flex;

        .every-img {
          padding-top: 10px;

          .img {
            width: auto;
            height: auto;
          }
        }

        .every-font {
          margin-left: 15px;
          font-size: 14px;

          .font-bottom {
            margin-top: 10px;
          }
        }
      }

      .every-two,
      .every-three {
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid #f1f1f1;
      }
    }

    .details-right {
      width: 830px;
      height: 588px;
    }
  }
}

@media screen and (min-width: 1500px) and (max-width: 1700px) {
  .Secondarydirectory-navbar {
    height: 68px;
    line-height: 68px;

    .navbar-main {
      width: 75%;
      font-size: 15px;
    }
  }

  .contact-brand-info {
    width: 75%;
    margin: 0 auto;
    margin-top: 60px;

    .info-title {
      padding-top: 40px;
      margin-left: 30px;
      font-size: 30px;
    }

    .info-main {
      margin: 20px 0 0 30px;
      padding-bottom: 40px;
      line-height: 30px;

      p {
        width: 80%;
      }
    }
  }

  .contact-brand-list {
    width: 75%;
    margin: 0 auto;
    justify-content: space-between;

    .list-every {
      width: 24%;
      height: 342px;
      margin-top: 20px;

      .every-main {
        width: 250px;
        height: 160px;
        margin: 0 auto;
        margin-top: 91px;
        background-image: url("../assets/contact/line.png");
        text-align: center;

        .font-map {
          width: 226px;
          height: 100px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;

          .main-title {
            margin-top: -20px;
            font-size: 30px;
          }

          .main-font {
            margin-top: 25px;
            line-height: 23px;
          }
        }
      }
    }
  }

  .contact-details {
    width: 75%;
    margin: 50px auto;
    // margin-top: 50px;
    display: flex;
    justify-content: space-between;

    .details-left {
      width: 40%;

      .left-title {
        font-size: 18px;
        font-weight: 600;
      }

      .left-every {
        width: 340px;
        margin-top: 38px;
        display: flex;

        .every-img {
          padding-top: 10px;

          .img {
            width: auto;
            height: auto;
          }
        }

        .every-font {
          margin-left: 15px;
          font-size: 14px;

          .font-bottom {
            margin-top: 10px;
          }
        }
      }

      .every-two,
      .every-three {
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid #f1f1f1;
      }
    }

    .details-right {
      width: 60%;
      height: 588px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1501px) {
  .Secondarydirectory-navbar {
    height: 68px;
    line-height: 68px;

    .navbar-main {
      width: 75%;
      font-size: 15px;
    }
  }

  .contact-brand-info {
    width: 75%;
    margin: 0 auto;
    margin-top: 60px;

    .info-title {
      padding-top: 40px;
      margin-left: 30px;
      font-size: 30px;
    }

    .info-main {
      margin: 20px 0 0 30px;
      padding-bottom: 40px;
      line-height: 30px;

      p {
        width: 80%;
      }
    }
  }

  .contact-brand-list {
    width: 85%;
    margin: 0 auto;
    justify-content: space-between;

    .list-every {
      width: 24%;
      height: 342px;
      margin-top: 20px;

      .every-main {
        width: 95%;
        height: 160px;
        margin: 0 auto;
        margin-top: 91px;

        .font-map {
          width: 95%;
          height: 100px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;

          .main-title {
            margin-top: -20px;
            font-size: 30px;
          }

          .main-font {
            margin-top: 15px;
            line-height: 21px;
          }
        }
      }
    }
  }

  .contact-details {
    width: 85%;
    margin: 50px auto;
    // margin-top: 50px;
    display: flex;
    justify-content: space-between;

    .details-left {
      width: 40%;

      .left-title {
        font-size: 18px;
        font-weight: 600;
      }

      .left-every {
        width: 340px;
        margin-top: 38px;
        display: flex;

        .every-img {
          padding-top: 10px;

          .img {
            width: auto;
            height: auto;
          }
        }

        .every-font {
          margin-left: 15px;
          font-size: 14px;

          .font-bottom {
            margin-top: 10px;
          }
        }
      }

      .every-two,
      .every-three {
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid #f1f1f1;
      }
    }

    .details-right {
      width: 60%;
      height: 588px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .Secondarydirectory-navbar {
    height: 68px;
    line-height: 68px;

    .navbar-main {
      width: 80%;
      font-size: 15px;
    }
  }

  .contact-brand-info {
    width: 80%;
    margin: 0 auto;
    margin-top: 60px;

    .info-title {
      padding-top: 40px;
      margin-left: 30px;
      font-size: 30px;
    }

    .info-main {
      margin: 20px 0 0 30px;
      padding-bottom: 40px;
      line-height: 30px;

      p {
        width: 80%;
      }
    }
  }

  .contact-brand-list {
    width: 83%;
    margin: 0 auto;
    justify-content: space-between;

    .list-every {
      width: 300px;
      height: 342px;
      margin-top: 20px;

      .every-main {
        width: 266px;
        height: 160px;
        margin: 0 auto;
        margin-top: 91px;
        background-image: url("../assets/contact/line.png");
        text-align: center;

        .font-map {
          width: 226px;
          height: 100px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;

          .main-title {
            margin-top: -20px;
            font-size: 30px;
          }

          .main-font {
            margin-top: 30px;
            line-height: 23px;
          }
        }
      }
    }
  }

  .contact-details {
    width: 83%;
    margin: 50px auto;
    // margin-top: 50px;x;
    display: flex;
    justify-content: space-between;

    .details-left {
      width: 40%;

      .left-title {
        font-size: 18px;
        font-weight: 600;
      }

      .left-every {
        width: 240px;
        margin-top: 38px;
        display: flex;

        .every-img {
          padding-top: 10px;

          .img {
            width: auto;
            height: auto;
          }
        }

        .every-font {
          margin-left: 15px;
          font-size: 14px;

          .font-bottom {
            margin-top: 10px;
          }
        }
      }

      .every-two,
      .every-three {
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid #f1f1f1;
      }
    }

    .details-right {
      width: 60%;
      height: 488px;
    }
  }
}

@media (max-width: 767px) {
  .Secondarydirectory-navbar {
    height: 40px;
    line-height: 40px;

    .navbar-main {
      width: 95%;
      font-size: 14px;
    }
  }

  .contact-brand-info {
    // width: 100%;
    padding: 15px 10px 10px 10px;
    margin: 0 auto;
    margin-top: 10px;

    .info-title {
      font-size: 18px;
    }

    .info-main {
      margin: 5px 0 0 0;
      padding-bottom: 10px;
      line-height: 25px;

      p {
        width: 100%;
      }
    }
  }

  .contact-brand-list {
    width: 95%;
    margin: 0 auto;
    justify-content: center;

    .list-every {
      width: 300px;
      height: 342px;
      margin-top: 20px;

      .every-main {
        width: 266px;
        height: 160px;
        margin: 0 auto;
        margin-top: 91px;
        background-image: url("../assets/contact/line.png");
        text-align: center;

        .font-map {
          width: 226px;
          height: 100px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;

          .main-title {
            margin-top: -13px;
            font-size: 25px;
          }

          .main-font {
            margin-top: 30px;
            line-height: 25px;
          }
        }
      }
    }
  }

  .contact-details {
    width: 300px;
    margin: 30px auto;
    // margin-top: 30px;

    .details-left {
      width: 100%;

      .left-title {
        font-size: 16px;
        font-weight: 600;
      }

      .left-every {
        width: 300px;
        margin-top: 18px;
        display: flex;

        .every-img {
          padding-top: 10px;

          .img {
            width: auto;
            height: auto;
          }
        }

        .every-font {
          margin-left: 15px;
          font-size: 14px;

          .font-bottom {
            margin-top: 10px;
          }
        }
      }

      .every-two,
      .every-three {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #f1f1f1;
      }
    }

    .details-right {
      width: 100%;
      height: 388px;
      margin-top: 20px;
    }
  }
}
</style>
