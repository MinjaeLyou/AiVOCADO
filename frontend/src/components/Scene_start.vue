<template>
  <div class="startBg">
    <div id = "backimg">
      <img src = "../assets/gif/startgif.gif">
    </div>
    <button class="startbutton" v-on:click="go()"><img src="../assets/background/gamestart.png"></button>
    <div id="checkrun" style="height: 50px; text-align: center;z-index:1"> init?>> </div>
    <div id = "backimg2">
      <img src = "../assets/gif/startgif.gif">
    </div>
  </div>
</template>

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
    go(){
      this.$router.push({name: "select"});
    },
    // 서비스 초기화
    async init() {
      console.log("inittttt");
      //var options = {};
			var options = {};
			options.keytype = await "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
			options.apikey = await "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
			gigagenie.init(options, function (result_cd, result_msg, extra) {
				if (result_cd === 200) {
					//init 성공
          //함수 호출 및 개발 진행
          var options={};
					document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="게임시작을 말해주세요"
                  gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
                    if(result_cd===200){
                    //console.log(extra.voicetext+':'+solution);
                    document.getElementById('checkrun').innerText = extra.voicetext;

                    if(extra.voicetext=="게임시작" || extra.voicetext=="게임 시작"){
                      //this.$router.push({name: "select"});
                      this.go();
                    }

                    //document.getElementById('checkrun').innerText = "김가연";
                    // if(parseInt(extra.voicetext)===solution){
                    // 	alert(extra.voicetext+" 정답입니다");
                    // } else {
                    // 	alert(extra.voicetext+" 틀렸습니다.");
                    // }
                    // } else {
                    // alert("다시해보세요");
                    }
                  });
					//callback 방식
					/*var options={};
          //options.ttstext="기가지니[P2]기가지니[P2]기가지니[P2]기가지니[P2]";
          //this.startAvocado();
					gigagenie.voice.sendTTS(options,function(result_cd,result_msg,extra){
					    if(result_cd===200){
                  //do next action
                  document.getElementById('checkrun').innerText = "OKKKKK";
                  options.voicemsg="게임시작을 말해주세요"
                  gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
                    if(result_cd===200){
                    //console.log(extra.voicetext+':'+solution);
                    document.getElementById('checkrun').innerText = extra.voicetext;

                    if(extra.voicetext=="게임시작" || extra.voicetext=="게임 시작"){
                      this.$router.push({name: "select"});
                    }

                    //document.getElementById('checkrun').innerText = "김가연";
                    // if(parseInt(extra.voicetext)===solution){
                    // 	alert(extra.voicetext+" 정답입니다");
                    // } else {
                    // 	alert(extra.voicetext+" 틀렸습니다.");
                    // }
                    // } else {
                    // alert("다시해보세요");
                    }
                  });
                  //this.startAvocado();
					    } else {
					        //extra.reason 에 voice 오류 전달.
					    };
					});*/
				};
			});
    },
    startAvocado(){
		document.getElementById('checkrun').innerText = "START";
		var options={};
		//options.voicelanguage=1;
		//var numbers=getNumber();
		//options.voicemsg=numbers[0]+' '+numbers[1];
		//var solution=numbers[0]*numbers[1];
    options.voicemsg="게임시작을 말해주세요"
		gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
			if(result_cd===200){
			//console.log(extra.voicetext+':'+solution);
			document.getElementById('checkrun').innerText = extra.voicetext;

			if(extra.voicetext=="게임시작" || extra.voicetext=="게임 시작"){
				location.href="template.html";
			}

			//document.getElementById('checkrun').innerText = "김가연";
			// if(parseInt(extra.voicetext)===solution){
			// 	alert(extra.voicetext+" 정답입니다");
			// } else {
			// 	alert(extra.voicetext+" 틀렸습니다.");
			// }
			// } else {
			// alert("다시해보세요");
			}
		});
	}
  
  }  
}
</script>
<style>
    #backimg{
        position: absolute;
        top: 15%;
        left: 10%;
    }
    
    #backimg2{
        position: absolute;
        top: 15%;
        left: 85%;
    }

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
            height: 40%;
            left: 30%;
            top:45%;
            
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
