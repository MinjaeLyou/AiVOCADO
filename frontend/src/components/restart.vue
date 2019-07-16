<template>
  <div class="restart">
    <audio autoplay>
      <source src="../assets/sound/gameAudio.mp3" type="audio/mpeg">
    </audio>
    <div class = "padding"></div>
    
    <div class="ch">
      
      <div class= "middle"><img class="charImg"  src="../assets/gif/success.gif"></div>
      
      <div class="buttons">
        <button class='again' v-on:click="goAgain()">
          <img class='againImg' src="../assets/restart/againBtn.png">
        </button>
        <button class='exit' v-on:click="goExit()">
            <img class='exitImg' src="../assets/restart/exitBtn.png">
        </button>
        <!--div id="checkrun" style="height: 50px; text-align: center;z-index:1"> init?>> </div-->
      </div>

    </div>
    <div class = "padding"></div>
    

  </div>
</template>


<style>
  .restart {
          height: 100%;
          width: 100%;
          position: absolute;
          background-image: url('../assets/restart/restart.png');
          background-position: center;
          background-repeat:no-repeat;
  }

  .ch{
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height:40%;
    top:25%;

  } 
  .charImg{
    height:90%;
  }
  .padding{
    position:absolute;
    height:25%;
  }

  .middle{
    height:100%;
    left:40%;
  }

  .buttons{
    float:right;
    height: 30%;
  }

  .again{
    border-width:0;
    background:none;
  }

  .exit{
    border-width:0;
    background:none;
  }

</style>

<script>
export default {
  data() {
    return {
    }
  },
  mounted(){
    this.init();
  },
  methods: {
    goAgain(){
      this.$router.push({name: "start"});
    },
    goExit(){
      this.$router.push({name: "start"});
    },
    // 서비스 초기화
    async init() {
      //document.getElementById('checkrun').innerText = "initttttttt";
      //var options = {};
			var options = {};
			options.keytype = await "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
			options.apikey = await "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
			gigagenie.init(options, function (result_cd, result_msg, extra) {
				if (result_cd === 200) {
					//init 성공
          //함수 호출 및 개발 진행
          var options={};
					//document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="다시 하시겠습니까?"
                  gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
                    if(result_cd===200){
                    //console.log(extra.voicetext+':'+solution);
                    //document.getElementById('checkrun').innerText = extra.voicetext;

                    if(extra.voicetext=="다시하기" || extra.voicetext=="종료"){
                      //document.getElementById('checkrun').innerText = "Start Gameeee";
                      //this.$router.push({name: "select"});
                      location.href="/#/";
                    }

                    
                    }
                  });
					
				};
			});
    },
  } 
}
</script>
