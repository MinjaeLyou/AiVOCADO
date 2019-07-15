<template>
    <div id="bg_select">
        <br>
        <div style="text-align:center;"><img src="../assets/background/selecttitle.png" id="select_title"></div>
        <div id="container">
            <button v-on:click="go(users[0])" class="user_bt"><img src="../assets/character/voti.png" class="avocado" style="animation-name:vibrate1;" ></button>
            <button v-on:click="go(users[1])" class="user_bt"><img src="../assets/character/ati.png" class="avocado" style="animation-name:vibrate2;" ></button>
            <button v-on:click="go(users[2])" class="user_bt"><img src="../assets/character/keti.png" class="avocado" style="animation-name:vibrate3;" ></button>
            <button v-on:click="go(users[3])" class="user_bt"><img src="../assets/character/kati.png" class="avocado" style="animation-name:vibrate2;" ></button>
            <button v-on:click="go(users[4])" class="user_bt"><img src="../assets/character/doti.png" class="avocado" style="animation-name:vibrate1;" ></button>
            <br>
            <textarea class="avocado_name">{{users[0].name}}</textarea>
            <textarea class="avocado_name">{{users[1].name}}</textarea>
            <textarea class="avocado_name">{{users[2].name}}</textarea>
            <textarea class="avocado_name">{{users[3].name}}</textarea>
            <textarea class="avocado_name">{{users[4].name}}</textarea>

            <div id="checkrun" style="height: 50px; text-align: center;z-index:1"> init?>> </div>
        </div>   
    </div>

</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted(){
    this.init();
  },
  created: async function() {
    const result = await this.$http.get('api/users/getUser');
    this.users = result.data;
    console.log(this.users);
  },
  methods: {
    go(user){
      this.$router.push({name: "category", params: {user: user}});
    },
    // 초기화
    async init() {
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
				options.ttstext="케릭터를 선택해주세요";
				//startAvocado();
				gigagenie.voice.sendTTS(options,function(result_cd,result_msg,extra){
						if(result_cd===200){
							document.getElementById('checkrun').innerText = extra.voicetext;
                            
                            gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
                            if(result_cd===200){
                            //console.log(extra.voicetext+':'+solution);
                                document.getElementById('checkrun').innerText = extra.voicetext;

                                if(extra.voicetext=="보티"){
                                    location.href="/#/category:" + this.users[0];
                                }
                                else if(extra.voicetext=="아티"){
                                    this.go(this.users[1]);
                                }
                                else if(extra.voicetext=="게티"){
                                    this.go(this.users[2]);
                                }
                                else if(extra.voicetext=="카티"){
                                    this.go(this.users[3]);
                                }
                                else if(extra.voicetext=="도티"){
                                    this.go(this.users[4]);
                                }

                            }
                        });
						} else {
							//extra.reason 에 voice 오류 전달
					   };
				});


			};
		});
	}
  }
}
</script>

<style>
      #bg_select{
          width:100%;
          height:100%;
          position:absolute;
          background-image:url("../assets/background/background_select.png");
          background-size:cover;
      }
      #select_title{
          width: 50%;
          
      }
      .user_bt{
          background:none;
          border:none;
          display:inline-block;
          position:relative;
          width:10%;
          height:40%;
          top:5%;

          margin:30px;
      }
      .avocado{
          animation-duration:1s; 
          animation-iteration-count: infinite;
          position:relative;
          width:100%;
          /*margin:30px;*/
      }
      .avocado_name{
          background:none;
          border-width:0;
          position:relative;
          width:15%;
          margin:30px;
          text-align:center;
          font-size:50px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      #container{
          /* background-color: white; */
          position:relative;
          width:80%;
          height:80%;
          left:10%;
      }

      @keyframes vibrate1{
          0% {transform: scale(1.0);}
          50% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
      @keyframes vibrate2{
          10% {transform: scale(1.0);}
          30% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
      @keyframes vibrate3{
          20% {transform: scale(1.0);}
          80% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
</style>