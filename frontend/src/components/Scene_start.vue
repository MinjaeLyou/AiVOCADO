<template>
  <div class="startBg">
    <audio autoplay>
      <source src="../assets/sound/startmusic.mp3" type="audio/mpeg">
    </audio>
    <button class="startbutton" v-on:click="go()"><img src="../assets/background/gamestart.png"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    go(cate){
      this.$router.push({name: "select"});
    },
    var options = {};
    // 서비스 초기화
    function init() {
      document.getElementsByClassName("title").innerText = "이성문";
      var options = {};
      options.keytype = "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
      options.apikey = "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
      gigagenie.init(options, function (result_cd, result_msg, extra) {
        if (result_cd === 200) {
          //init 성공
          //함수 호출 및 개발 진행
          //document.getElementById('checkrun').innerText = "OK";

          var options={};
          options.ttstext="이쿠조 이쿠조 이쿠조";
          //startAvocado();
          gigagenie.voice.sendTTS(options,function(result_cd,result_msg,extra){
              if(result_cd===200){
                startAvocado();
                //do next action
              } else {
                //extra.reason 에 voice 오류 전달.
              };
          });


        };
      });
    };
  }
}
</script>
<style>
    .startBg {
        height: 100%;
        width: 100%;
        position: absolute;
            background-image:url("../assets/background/background.png");
            background-size: cover;
    }
    .startbutton{
            animation-name : vibrate;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            background:none;
            border-width:0;
            position: relative;
            width: 40%;
            height: 30%;
            left: 30%;
            top:50%;
            
    }

    @keyframes vibrate {
            0% {transform:scale(0.5);}
            10% {transform:scale(0.6);}
            20% {transform:scale(0.6);}
            30% {transform:scale(0.6);}
            40% {transform:scale(0.6);}
            50% {transform:scale(0.7);}
            60% {transform:scale(0.6);}
            70% {transform:scale(0.6);}
            80% {transform:scale(0.6);}
            90% {transform:scale(0.6);}
            100% {transform:scale(0.5);}
    }
</style>
