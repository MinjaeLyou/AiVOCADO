<template>
<div class="cateBackground">
<div id="status">

</div>
<!--
<div id="checkrun" style="height: 50px; text-align: center;z-index:1"> init?>> </div>
-->
<div id="category">

    <div class="category-container" v-on:click="go('wordAnimal')">
        <div class="cg-name">
            동물<br><img class= "cg-img"  src="../assets/category/cat.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordCountry')">
        <div class="cg-name">
            나라<br><img class= "cg-img" src="../assets/category/south-korea.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordFood')">
        <div class="cg-name">
            음식<br><img class= "cg-img"  src="../assets/category/apple.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordJob')">
        <div class="cg-name">
            직업<br><img class= "cg-img"  src="../assets/category/firefighter.png">
        </div>
    </div>
    <div class="logo">
            <div class="icon">
                <img src="../assets/category/avocado_ani3.gif" height="60%" width="60%">
            </div>
    </div>
    <div class="category-container" v-on:click="go('wordNature')">
        <div class="cg-name">
            자연<br><img class= "cg-img"  src="../assets/category/sprout.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordSchool')">
        <div class="cg-name">
            학교<br><img class= "cg-img"  src="../assets/category/blackboard.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordSports')">
        <div class="cg-name">
            스포츠<br><img class= "cg-img"  src="../assets/category/football.png">
        </div>
    </div>
    <div class="category-container" v-on:click="go('wordVehicle')">
        <div class="cg-name">
            탈 것<br><img class= "cg-img"  src="../assets/category/car.png">
        </div>
    </div>

</div>
    <div id = "footer"> </div>
<!--div id="checkrun" style="height: 50px; text-align: center;z-index:1 top: 25%"> init?>> </div><div id="checkrun" style="height: 50px; text-align: center;z-index:1 top: 25%"> init?>> </div-->
</div>
</template>

<style>
        /* ----------------------------------------------
             * Generated by Animista on 2019-7-7 15:35:28
             * w: http://animista.net, t: @cssanimista
             * ---------------------------------------------- */

        @-webkit-keyframes heartbeat {
            from {
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-transform-origin: center center;
                transform-origin: center center;
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }

            10% {
                -webkit-transform: scale(.91);
                transform: scale(.91);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in
            }

            17% {
                -webkit-transform: scale(.98);
                transform: scale(.98);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }

            33% {
                -webkit-transform: scale(.87);
                transform: scale(.87);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in
            }

            45% {
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }
        }

        @keyframes heartbeat {
            from {
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-transform-origin: center center;
                transform-origin: center center;
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }

            10% {
                -webkit-transform: scale(.91);
                transform: scale(.91);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in
            }

            17% {
                -webkit-transform: scale(.98);
                transform: scale(.98);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }

            33% {
                -webkit-transform: scale(.87);
                transform: scale(.87);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in
            }

            45% {
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out
            }
        }

        /* ----------------------------------------------
 * Generated by Animista on 2019-7-7 17:10:30
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

        @-webkit-keyframes rotate-in-ver {
            0% {
                -webkit-transform: rotateY(-360deg);
                transform: rotateY(-360deg);
                opacity: 0
            }

            100% {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
                opacity: 1
            }
        }

        @keyframes rotate-in-ver {
            0% {
                -webkit-transform: rotateY(-360deg);
                transform: rotateY(-360deg);
                opacity: 0
            }

            100% {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
                opacity: 1
            }
        }
        
        .cateBackground{
          height: 100%;
          width: 100%;
          position: absolute;
          text-align: center;
          background-image: url('../assets/background/category.jpg');
          background-repeat:no-repeat;
          background-size: cover;
        }

        #status {
            height: 5%
        }

        #category {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 70%;
            padding: 30px;
        }

        .category-container {
            float: left;
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 7px;
            padding-bottom: 7px;
            margin-top: 10px;
            margin-left: 8px;
            margin-right: 8px;
            text-decoration: none;
            width: 30%;
            height: 40%;
            border-radius: 90px;
            background-color: #f9f5f5;
        }

        #footer{
            height: 25%;
        }

        .logo {
            float: left;
            padding-left: 7px;
            padding-right: 7px;
            padding-top: 7px;
            padding-bottom: 7px;
            margin-top: 0px;
            margin-left: 8px;
            margin-right: 8px;
            width: 30%;
            height: 40%;
            border-radius: 100px;
            -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
            animation: heartbeat 1.5s ease-in-out infinite both
        }

        .cg-name {
            position: relative;
            text-align: center;
            margin-bottom: 5px;    
            font-size: 120%;
            padding-bottom: 5px;
            height: 85%;
            font-family: "Helvetica", "나눔 고딕", serif;
            font-weight: bold;
        }

        .cg-img{
            /*margin:auto;*/
            position: relative;
            margin-top: 5px;
            margin-bottom: 10px;
            padding-bottom: 5px;
            padding-top: 5px;
            text-align: center;
            width: 60%;;
            height: auto;
        }
        .icon{
            text-align:center;
        }

    </style>
<script>
   $(document).ready(function(){
            $('.category-container').mouseenter(function () {
                $(this).css('-webkit-animation', 'rotate-in-ver .5s cubic-bezier(.25,.46,.45,.94) both')
                $(this).css('animation', 'rotate-in-ver .5s cubic-bezier(.25,.46,.45,.94) both')
            });

        });

export default {
  data() {
    return {
      user: {}
    }
  },
  mounted: async function () {
    //console.log(this.$route.params.user);
    this.init();
  },
  methods: {  
    go(cate){
      this.$router.push({name: "gameMain", params: {cate: cate, user: this.$route.params.user}});
    },
    async init() {
      //document.getElementById('checkrun').innerText = "initttttttt";
      //var options = {};
      var ref = this;
			var options = {};
			options.keytype = await "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
			options.apikey = await "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
			gigagenie.init(options, function (result_cd, result_msg, extra) {
				if (result_cd === 200) {
					//init 성공
          //함수 호출 및 개발 진행
          var options={};
					//document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="카테고리를 선택해주세요"
          gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
            if(result_cd===200){
              //console.log(extra.voicetext+':'+solution);
              //document.getElementById('checkrun').innerText = extra.voicetext;
              switch(extra.voicetext){
                case "동물":
                  location.href='/#/main/wordAnimal/voti/80';
                  break;
                case "나라":
                  location.href='/#/main/wordCountry/voti/80';
                  break;
                case "음식":
                  location.href='/#/main/wordFood/voti/80';
                  break;
                case "직업":
                  location.href='/#/main/wordJob/voti/80';
                  break;
                case "자연":
                  location.href='/#/main/wordNature/voti/80';
                  break;
                case "학교":
                  location.href='/#/main/wordSchool/voti/80';
                  break;
                case "스포츠":
                  location.href='/#/main/wordSports/voti/80';
                  break;
                case "탈것":
                  location.href='/#/main/wordVehicle/voti/80';
                  break;
                default:
                  ref.init();
                  break;
              }
                    
            }
          });
					
				};
			});
    },  
  }
}
</script>
    