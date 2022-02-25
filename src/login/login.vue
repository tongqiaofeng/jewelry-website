<template>
  <div class="bg" :style="{ height: screenHeight }">
    <div class="card" @keyup.enter="keyLogin()">
      <div class="pcimg"><img src="../assets/login/组6.jpg" alt="" /></div>
      <div class="front">
        <form>
          <img src="../assets/login/Paulianalogo-01.png" id="logo" /><br />
          <div class="inputText" id="id">
            <input type="text" required :maxlength="15" v-model="phonenumber" />
            <span data-placeholder="请输入手机号码"></span>
          </div>
          <div
            style="display:flex;width:73%;bottom: -30px;position: relative;left: 50px;top: 30px;"
          >
            <div class="inputText" style="margin:0" id="code">
              <input type="text" v-model="code" />
              <span data-placeholder="请输入图形验证码"></span>
            </div>
            <img :src="loginimage" @click="imageCodeGet" class="codeimg" />
          </div>
          <div class="inputText" id="password">
            <input
              type="text"
              required
              pattern=".{6,}"
              title="Password less than six digits"
              :maxlength="16"
              v-model="pswcode"
            />
            <span data-placeholder="请输入手机验证码"></span>
            <button class="buttoncode" type="button" @click="getcode">
              <div
                :disabled="disable"
                :class="{ codeGeting: isGeting }"
                style="border-left: 1px solid rgb(115,115,115);"
              >
                {{ time }}
              </div>
            </button>
          </div>
          <button class="button" type="button" @click="login1()">
            登录
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import $ from "jquery";
import router from "../router/index";
// import md5 from 'js-md5'
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "login",
  props: {},
  components: {},
  setup() {
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;
    const message = getCurrentInstance()?.appContext.config.globalProperties
      .$message;

    $(function() {
      $(".card p").click(function() {
        $(".front").toggleClass("front-turn");
        $(".back").toggleClass("back-turn");
      });
      $(".inputText input").on("focus", function() {
        $(".inputText input").addClass("focus");
      });
      $(".inputText input").on("blur", function() {
        if ($(".inputText input").val() == "") {
          $(".inputText input").removeClass("focus");
        }
      });
    });
    const screenWidth = document.documentElement.clientWidth + "px";
    const s = sessionStorage.getItem("zoom");
    const screenHeight =
      document.documentElement.clientHeight / Number(s) + "px";

    const passwordtype = ref("password");
    const isload = ref(false);
    const phonenumber = ref("");
    const code = ref("");
    const pswcode = ref("");
    const count = ref(59);
    const time = ref("获取验证码");
    const isGeting = ref(false);
    const disable = ref(false);
    console.log(isload.value);

    const loginimage = ref("");
    const loginimageId = ref("");
    const phoneLogin = ref("");

    function getcode() {
      if (code.value == "" || phonenumber.value == "") {
        message.error({
          message: "请输入手机号和验证码",
          showClose: true,
          duration: 2000,
        });
      } else if (code.value != "" && phonenumber.value != "") {
        if (code.value.length != 4 || phonenumber.value.length != 11) {
          message.error({
            message: "请正确输入手机号和验证码",
            showClose: true,
            duration: 2000,
          });
        }
        isload.value = true;
        isload.value = false;
        if (isload.value == false) {
          axios
            .post(store.state.baseUrl + "/user/smsCodeGet", {
              phone: phonenumber.value,
              imageCode: code.value,
              imageId: loginimageId.value,
            })
            .then((res: any) => {
              console.log(res.data.data);
              phoneLogin.value = res.data.data;
            });
        }
        const countDown = setInterval(() => {
          if (count.value < 1) {
            isGeting.value = false;
            disable.value = false;
            time.value = "获取验证码";
            count.value = 59;
            console.log(time);
            clearInterval(countDown);
          } else {
            isGeting.value = true;
            disable.value = true;
            time.value = count.value-- + "s后可重发";
          }
        }, 1000);
      }
    }
    function login1() {
      axios
        .post(store.state.baseUrl + "/user/phoneLogin ", {
          phone: phonenumber.value,
          code: pswcode.value,
        })
        .then((res: any) => {
          if (res.data.code < 500) {
            console.log(res);
            message.success({
              message: "登录成功",
              showClose: true,
              duration: 2000,
            });
            localStorage.setItem("token", res.data.data);
            // sessionStorage.setItem('token', res.data.data)
            store.dispatch("setToken", res.data.data);
            store.state.isLogin = true;
            router.push("/");
            console.log("登录");
          }
        });
    }
    // 回车键登录
    function keyLogin() {
      console.log("enter登录");
      login1();
    }
    function changepassword() {
      passwordtype.value =
        passwordtype.value == "password" ? "text" : "password";
      console.log(passwordtype.value);
    }
    function imageCodeGet() {
      axios.get(store.state.baseUrl + "/user/imageCodeGet").then((res) => {
        loginimage.value = res.data.data.imageData;
        console.log("圖形驗證碼");
        loginimageId.value = res.data.data.imageId;
        console.log(loginimage.value);
      });
    }
    imageCodeGet();
    return {
      screenWidth,
      screenHeight,
      phonenumber,
      pswcode,
      code,
      login1,
      passwordtype,
      changepassword,
      isload,
      keyLogin,
      imageCodeGet,
      loginimage,
      getcode,
      count,
      time,
      isGeting,
      disable,
    };
  },
});
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
@media screen and (min-width: 360px) and (max-width: 796px) {
  .bg {
    background-image: url("../assets/login/phonebg.jpg");
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    background-size: 100vw 100vh;
    font-size: 18px;
    color: #dddddd;
  }
  .card .front {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    width: 100vw;
    z-index: 1;
  }
  .pcimg {
    display: none;
  }

  .buttoncode {
    font-size: 14px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    transition: box-shadow 0.2s ease-out;
    position: relative;
    width: 134px;
    height: 32px;
    border: none;
    color: rgb(0, 0, 0);
    outline: none;
  }
  .button {
    font-size: 16px;
    color: #fff;
    box-shadow: 1px 3px 6px #ebe0e4, 0px 0px 0px rgb(255, 255, 2550);
    transition: box-shadow 0.2s ease-out;
    /* background-color: rgb(235, 214, 226); */
    background-color: #99b6d3;
    margin-top: 50px;
    width: 74%;
    height: 50px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  #id {
    position: relative;
    left: 50px;
    bottom: -30px;
    font-size: 15px;
    width: 73%;
  }
  #code {
    font-size: 15px;
    width: 73%;
  }
  .codeimg {
    width: 86px;
    height: 32px;
    /* position: relative;
    left: 50px;
    top: 30px; */
  }
  #password {
    position: relative;
    left: 50px;
    top: 30px;
    font-size: 15px;
    width: 73%;
  }
  #logo {
    position: relative;
    top: 60px;
    width: 45%;
    margin-bottom: 50px;
  }
  .inputText input {
    font-size: 15px;
    color: rgba(115, 115, 115, 1);
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 32px;
  }
  .card {
    display: flex;
    height: 100vh;
  }
}
@media screen and (min-width: 796px) {
  .card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    display: flex;
    height: 614px;
  }
  .bg {
    background-image: url("../assets/login/组7.jpg");
    background-repeat: no-repeat;
    position: relative;
    background-size: 100% 100%;
    font-size: 18px;
    color: #dddddd;
  }
  .aaa {
    width: 1064px;
    height: 100%;
    /* padding: 10% 0; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .inputText input {
    font-size: 15px;
    color: rgba(115, 115, 115, 1);
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 40px;
  }
  #logo {
    position: relative;
    top: 60px;
    margin-bottom: 50px;
  }
  .buttoncode {
    font-size: 17px;
    cursor: pointer;
    color: #000;
    background-color: #fff;
    transition: box-shadow 0.2s ease-out;
    position: relative;
    width: 134px;
    height: 48px;
    outline: none;
    border: none;
  }
  .button {
    font-size: 20px;
    color: #fff;
    box-shadow: 9px 9px 18px rgba(0, 0, 0, 0.1),
      -9px -9px 18px rgba(255, 255, 255, 1);
    transition: box-shadow 0.2s ease-out;
    /* background-color: rgb(241, 225, 230); */
    background-color: #99b6d3;
    position: relative;
    top: 30px;
    left: -30px;
    margin-top: 20px;
    width: 380px;
    height: 58px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .card .front {
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 532px;
    z-index: 1;
  }
  #id {
    position: relative;
    left: 50px;
    bottom: -30px;
    width: 70%;
  }
  #code {
    position: relative;
    width: 73%;
  }
  .codeimg {
    width: 134px;
    height: 48px;
  }
  #password {
    position: relative;
    left: 50px;
    top: 30px;
    width: 70%;
  }
}

.inputText {
  border-bottom: 1px solid rgba(115, 115, 115, 1);
  position: relative;
  margin: 30px 0;
  display: flex;
  color: #dddddd;
  letter-spacing: 1px;
}

.inputText .inputbox {
  width: 80%;
}

.inputText span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  z-index: -1;
  transition: 0.5s;
}

.inputText span::after {
  content: "";
  position: absolute;
  left: 0%;
  top: 100%;
  width: 0%;
  height: 1px;
  background: linear-gradient(120deg, #0d0d0e, #6e6e6e 60%);
  transition: 0.5s;
}

.focus + span::before {
  top: -5px;
  font-size: 13px;
  transition: 0.5s;
}
.focus + span::after {
  width: 100%;
  transition: 0.5s;
}
.button:hover {
  font-size: 19px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.8);
  transition: box-shadow 0.2s ease-out;
  transition: font-size 0.2s ease-out;
}

.codeGeting {
  height: 27px;
  font-size: 14px;
  text-align: center;
  line-height: 27px;
  border-radius: 3rem;
  background-color: rgb(201, 199, 199);
  border-color: rgb(201, 199, 199);
  cursor: none;
}
.buttoncode:hover {
  font-size: 14px;
  color: #dddddd;
  text-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2),
    inset -1px -1px 2px rgba(255, 255, 255, 0.8);
  transition: box-shadow 0.2s ease-out;
  transition: font-size 0.2s ease-out;
}
</style>
