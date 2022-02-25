<template>
  <div class="designer">
    <div class="designerbox">
      <div class="designerinfo">
        <div class="return" @click="returnfun">
          <i class="el-icon-back"></i><span>返回</span>
        </div>
        <div class="designerinfobox">
          <img :src="img + '/image/' + designercover" alt="" />
          <div class="richtext">
            <div class="and">详情及描述</div>
            <div v-html="Richtext"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const designerid = getCurrentInstance()?.appContext.config.globalProperties
      .$route.query.id;
    const designercover = getCurrentInstance()?.appContext.config
      .globalProperties.$route.query.cover;
    const axios = getCurrentInstance()?.appContext.config.globalProperties
      .$axios;
    const store = getCurrentInstance()?.appContext.config.globalProperties
      .$store;
    const img = store.state.baseUrl;
    const designerlist = ref("");
    const Richtext = ref("");
    function start() {
      axios
        .get(store.state.baseUrl + "/designer/" + designerid)
        .then((response: any) => {
          console.log(response);
          if (response.data.code < 500) {
            Richtext.value = response.data.data;
            console.log(designerlist.value);
          }
        });

      return { designerlist, designercover, Richtext };
    }

    start();
    function returnfun() {
      router.go(-1);
    }
    return {
      axios,
      store,
      img,
      start,
      designerlist,
      designercover,
      returnfun,
      Richtext,
    };
  },
});
</script>
<style lang="scss" scoped>
@media screen and (min-width: 360px) and (max-width: 796px) {
  .designer {
    width: 92%;
    overflow-y: scroll;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 10px;
    height: 82vh;
    // box-shadow: -3px -4px 5px 0px #f7f5f5, 6px 5px 3px rgb(0 0 0 / 20%);
    margin: 0 auto;
    .designerbox {
      .designerinfo {
        margin: auto;
        // padding: 1rem;
        .designerinfobox {
          border-radius: 10px;
          // box-shadow: -3px -4px 5px 0px #f7f5f5, 6px 5px 3px rgb(0 0 0 / 20%);
          // padding: 1rem;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        .richtext {
          padding-bottom: 16px;
          max-width: 100%;
          margin-top: 14px;
          .and {
            font-size: 0.875rem;
            color: #000;
            line-height: 1.71;
            letter-spacing: 0;
            font-family: Santral W01;
            font-weight: 600;
            font-style: normal;
            padding-bottom: 8px;
            text-align: left;
          }
        }
        .return {
          display: none;
          padding-bottom: 1rem;
          text-align: left;
        }
      }
    }
  }
}
@media screen and (min-width: 796px) {
  .designer {
    width: 1260px;
  }
}
</style>
