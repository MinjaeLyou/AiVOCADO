<template>
    <div id="bg_select">
        <br>
        <div id="checkrun" style="height: 50px; text-align: center;z-index:1"> init?>> </div>
        <div style="text-align:center;"><img src="../assets/background/selecttitle.png" id="select_title"></div>
        <div id="container">
            <button v-on:click="go(users[0])" class="user_bt">
                <img src="../assets/character/voti.png" class="avocado" style="animation-name:vibrate1;" >
                <textarea class="avocado_name">{{users[0].name}}</textarea>
            </button>
            <button v-on:click="go(users[1])" class="user_bt">
                <img src="../assets/character/ati.png" class="avocado" style="animation-name:vibrate2;" >
                <textarea class="avocado_name">{{users[1].name}}</textarea>
            </button>
            <button v-on:click="go(users[2])" class="user_bt">
                <img src="../assets/character/keti.png" class="avocado" style="animation-name:vibrate3;" >
                <textarea class="avocado_name">{{users[2].name}}</textarea>
            </button>
            <button v-on:click="go(users[3])" class="user_bt">
                <img src="../assets/character/kati.png" class="avocado" style="animation-name:vibrate2;" >
                <textarea class="avocado_name">{{users[3].name}}</textarea>
            </button>
            <button v-on:click="go(users[4])" class="user_bt">
                <img src="../assets/character/doti.png" class="avocado" style="animation-name:vibrate1;" >
                <textarea class="avocado_name">{{users[4].name}}</textarea>
            </button>
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
    //this.init();
    this.$nextTick(() => {
      this.init();
    });
  },
  created: async function() {
    const result = await this.$http.get('api/users/getUser');
    this.users = result.data;
    console.log(this.users);
  },
  methods: {
    go(user){
      //this.$router.push({name: "category", params: {user: user}});
      location.href="/#/category/" + this.users[0].userId+'/'+this.users[0].score;
    },
    // 초기화
    async init() {
      console.log("initt");
      //document.getElementById('checkrun').innerText = "initttttttt";
		//document.getElementsByClassName("title").innerText = "이성문";
		var options = {};
		options.keytype = await "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
    options.apikey = await "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
    console.log(options.apikey);
		gigagenie.init(options, function (result_cd, result_msg, extra) {
				if (result_cd === 200) {
					//init 성공
          //함수 호출 및 개발 진행
          var options={};
					document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="캐릭터를 선택해주세요"
          gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
            if(result_cd===200){
              //console.log(extra.voicetext+':'+solution);
              document.getElementById('checkrun').innerText = extra.voicetext;

              if(extra.voicetext=="보티"){
                location.href="/#/category/" + this.users[0].userId+'/'+this.users[0].score;
              }
              else if(extra.voicetext=="아티"){
                location.href="/#/category/" + this.users[1].userId+'/'+this.users[1].score;
              }
              else if(extra.voicetext=="케티"){
                location.href="/#/category/" + this.users[2].userId+'/'+this.users[2].score;
              }
              else if(extra.voicetext=="카티"){
                location.href="/#/category/" + this.users[3].userId+'/'+this.users[3].score;
              }
              else if(extra.voicetext=="도티"){
                location.href="/#/category/" + this.users[4].userId+'/'+this.users[4].score;
              }
            }
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
          display:block;
          position:relative;
          text-align:center;
          flex-wrap:nowrap;
          width:13%;
          height:40%;
          top:5%;
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
          width:100%;
          margin:50px 0;
          text-align:center;
          font-size:50px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      #container{
          /* background-color: white; */
          position:relative;
          margin : 0;
          padding : 0 5%;
          width:100%;
          height:80%;
          display : flex;
          justify-content : space-around;
          align-items:flex-start;
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