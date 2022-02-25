<template>
  <router-view/>
  <!-- <div class="footer-container">
    <span class="footer-font">© 2021 Pauliana. All Rights Reserved.</span>
    <span class="youmeng"></span>
  </div> -->
</template>
<script>
export default {
//   mounted(){
// //         // 友盟统计添加
//         const script = document.createElement("script");
//         // script.id='cnzz_stat_icon_1279845817'
//         // script.src =
//         //   "https://www.cnzz.com/stat/website.php?web_id=1279845817";   //该路径为点击统计代码后，页面中第一个 文字统计 script代码
//         // script.language = "JavaScript";
//         // document.body.appendChild(script);
//         // const script=document.querySelectorAll('script');
//         script.innerHTML = `document.write(unescape("%3Cspan id='cnzz_stat_icon_1279845817'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/stat.php%3Fid%3D1279845817%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));`
//         document.getElementsByClassName('footer-container')[0].appendChild(script)
// },
  watch: {
    '$route' () {
      if (window._czc) {
        const location = window.location
        const contentUrl = location.pathname + location.hash
        const refererUrl = '/'
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
      }
    }
  },
    created() {
      try {
        document.body.removeChild(document.getElementById('appLoading'))
        // setTimeout(function() {
        //   document.getElementById('app').style.display = 'block';
        // }, 200)
      } catch (e) {
        console.log("cuowu ");
      }
    }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.youmeng{
  width: 60px;
}
</style>
