<template>
<div class="third">
  <div id="main" class="mainBackground">
    <img id="doti1" src="../assets/character/doti.png">
    <img id="doti2" src="../assets/character/doti.png">
    <img id="doti3" src="../assets/character/doti.png">
    <img id="doti4" src="../assets/character/doti.png">
    <img id="doti5" src="../assets/character/doti.png">
      <h1 class="cate">{{cate}}</h1>
      <div class="center" id="quiz" style="left: 20%;">
      </div>
      <div id="checkrun" style="height: 50px; text-align: center;z-index:1 top: 25%"> init?>> </div>
      <div id="checkrun2" style="height: 50px; text-align: center;z-index:1 top: 28%; color: white; font-size:80px; font-weight:bold;"> 정답 </div>
      <div class="alphabet">
        <button class="but" id="a" v-on:click="check('a')" >a</button><button class="but" id="b" v-on:click="check('b')">b</button><button class="but" id="c" v-on:click="check('c')">c</button><button class="but" id="d" v-on:click="check('d')">d</button><button class="but" id="e" v-on:click="check('e')">e</button>
        <button class="but" id="f" v-on:click="check('f')">f</button><button class="but" id="g" v-on:click="check('g')">g</button><button class="but" id="h" v-on:click="check('h')">h</button><button class="but" id="i" v-on:click="check('i')">i</button><button class="but" id="j" v-on:click="check('j')">j</button><br>
        <button class="but" id="k" v-on:click="check('k')">k</button><button class="but" id="l" v-on:click="check('l')">l</button><button class="but" id="m" v-on:click="check('m')">m</button><button class="but" id="n" v-on:click="check('n')">n</button><button class="but" id="o" v-on:click="check('o')">o</button>
        <button class="but" id="p" v-on:click="check('p')">p</button><button class="but" id="q" v-on:click="check('q')">q</button><button class="but" id="r" v-on:click="check('r')">r</button><button class="but" id="s" v-on:click="check('s')">s</button><button class="but" id="t" v-on:click="check('t')">t</button><br>
        <button class="but" id="u" v-on:click="check('u')">u</button><button class="but" id="v" v-on:click="check('v')">v</button><button class="but" id="w" v-on:click="check('w')">w</button><button class="but" id="x" v-on:click="check('x')">x</button><button class="but" id="y" v-on:click="check('y')">y</button>
        <button class="but" id="z" v-on:click="check('z')">z</button>
      </div>
  </div>
  <div class = "message_contianer">
    <img id = "m_img" src = "../assets/gif/success.gif">
    <img id = "m_text" src ="../assets/gif/goodjob.gif">
  </div>
  <div class="caption">
      <div class="content">
        <span>{{word.word}}</span>
      </div>
      <div class="content">
        <span>{{word.meaning}}</span>
      </div>
      <div class="content">
        <span>{{word.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: '',
      arrWord: [],
      prob: [],
      len: 0,
      ans: '',
      result: 0,
      try: 0,
      cate: '',
      chk: 0
    }
  },
  mounted: async function(){
    this.init();
  },
  created: async function () {
    const wordId = await Math.floor(Math.random() * 25) + 1;
    console.log(this.$route.params.user);
    const result = await this.$http.get(`/api/word/${this.$route.params.cate}/${wordId}`)
    this.word = await result.data;
    switch(this.$route.params.cate){
      case 'wordAnimal':
        this.cate = '동물';
        break;
      case 'wordCountry':
        this.cate = '나라';
        break;
      case 'wordFood':
        this.cate = '음식';
        break;
      case 'wordJob':
        this.cate = '직업';
        break;
      case 'wordNature':
        this.cate = '자연';
        break;
      case 'wordSchool':
        this.cate = '학교';
        break;
      case 'wordSports':
        this.cate = '스포츠';
        break;
      case 'wordVehicle':
        this.cate = '운송수단';
        break;
    }
    this.len = this.word.word.length;
    var cont = document.getElementById("quiz");
    for (var i = 0; i < this.len; i++) {
      this.arrWord[i] = await this.word.word.charAt(i);
      var jbBtn = document.createElement( 'span' );
      jbBtn.id = 'prob' + i;
      jbBtn.className = 'word';
      var jbBtnText = document.createTextNode( this.arrWord[i] );
      //jbBtn.appendChild( jbBtnText );
      cont.appendChild( jbBtn );
      //document.getElementById("quiz").appendChild
    }
    if(this.len%2 == 0)
      var pos = 45 - parseInt(this.len/2)*10;
    else
      var pos = 45 - parseInt(this.len/2)*10;
    console.log("pos is "+pos);
    document.getElementById('quiz').setAttribute("style", "left: "+pos+"%;");
    console.log(this.word.word);
    //const wordId = '1'
  },
  methods: {
    async check(ans){
      console.log(ans);
      document.getElementById('checkrun2').innerText = 'check is '+ans;
      document.getElementById(ans).disabled = true;
      document.getElementById(ans).style.opacity = "0.3";
      for ( let i = 0; i < this.len; i++){
        if(ans == this.arrWord[i]){
          console.log("correct!");
          this.chk = 1;
          this.result++;
          var jbBtnText = document.createTextNode( this.arrWord[i] );
          document.getElementById('prob' + i).appendChild(jbBtnText);
          if(this.result == this.len){
            //성공
            console.log("Succeed!");
            this.$http.post(`/api/users/updateScore/${this.$route.params.score}/${this.$route.params.userId}`);
            setTimeout(function() {
              document.getElementById('main').style.display = 'none';
            }, 3000);
            //document.getElementById('main').style.display = 'none';
            setTimeout(function() {
              location.reload();
            }, 10000);
            //location.href=`/#/meaning/${this.$route.params.userId}/${this.$route.params.score}`;
          }
        }
      }
      if(this.chk == 0){
        this.try++;
        switch(this.try){
          case 1:
            document.getElementById('doti5').setAttribute("src", "/assets/gif/doti-failed.gif");
            break;
          case 2:
            document.getElementById('doti4').setAttribute("src", "/assets/gif/doti-failed.gif");
            break;
          case 3:
            document.getElementById('doti3').setAttribute("src", "/assets/gif/doti-failed.gif");
            break;
          case 4:
            document.getElementById('doti2').setAttribute("src", "/assets/gif/doti-failed.gif");
            break;
          case 5:
            document.getElementById('doti1').setAttribute("src", "/assets/gif/doti-failed.gif");
            break;
        }
      }
      this.chk = 0;
      console.log(this.try);
      if(this.try == 20){
        //실패
        console.log("Fail!");
        document.getElementById('m_img').setAttribute("src", "/assets/gif/doti-failed.gif");
        document.getElementById('m_text').setAttribute("src", "/assets/gif/cheerup.gif");
        setTimeout(function() {
          document.getElementById('main').style.display = 'none';
        }, 3000);
        //document.getElementById('main').style.display = 'none';
        setTimeout(function() {
          location.href='/#/ranking';
        }, 10000);
    
        //this.$router.push({name: "ranking"});
      }
      this.init();
    },
    async init() {
      //var options = {};
			var options = {};
			options.keytype = await "GBOXDEVM"; // 개발(GBOXDEVM) 또는 상용(GBOXCOMM) 키 종류 입력
      options.apikey = await "RTUwMDI5OTN8R0JPWERFVk18MTU2MTUyMzk3MjI1Ng=="; // 개발자 포털에서 키를 발급받아 입력
      var ref = this;
			gigagenie.init(options, function (result_cd, result_msg, extra) {
				if (result_cd === 200) {
					//init 성공
          //함수 호출 및 개발 진행
          var reff = ref;
          var options={};
					document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="알파벳을 말해주세요"
          gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
            var refff = reff;
            if(result_cd===200){
              //console.log(extra.voicetext+':'+solution);
              document.getElementById('checkrun2').innerText = extra.voicetext;
              switch(extra.voicetext){
                case '에이' :
                case '애이' :
                case  'a' :
                case '에' :
                case '애':
                  document.getElementById('checkrun2').innerText = 'a';
                  ref.check('a');
                  break;
                case '비' :
                case '비이' :
                case 'b' :
                case '삐' :
                case '삐이':
                case 'bee':
                case 'be':
                  document.getElementById('checkrun2').innerText = 'b';
                  ref.check('b');
                  break;
                case '시' :
                case '씨이' :
                case 'c' :
                case 'she' :
                case '씨':
                  document.getElementById('checkrun2').innerText = 'c';
                  ref.check('c');
                  break;
                case '디' :
                case '디이' :
                case 'd' :
                case 'the':
                  document.getElementById('checkrun2').innerText = 'd';
                  ref.check('d');
                  break;
                case '이' :
                case '이이' :
                case 'e' :
                case 'ee' :
                case '이리' :
                  document.getElementById('checkrun2').innerText = 'e';
                  ref.check('e');
                  break;
                case '에프' :
                case '에플' :
                case 'f' :
                case '애프' :
                case '애플':
                case 'ref':
                  document.getElementById('checkrun2').innerText = 'f';
                  ref.check('f');
                  break;
                case '쥐':
                case '지':
                case 'g':
                case '쥐이':
                case '취소':
                case '치':
                  document.getElementById('checkrun2').innerText = 'g';
                  ref.check('g');
                  break;
                case '에이치':
                case '에치':
                case '엣치':
                case 'h':
                case '에이칫':
                case '에이취':
                  document.getElementById('checkrun2').innerText = 'h';
                  ref.check('h');
                  break;
                case '아이':
                case '아아이':
                case 'i':
                case '아이이':
                  document.getElementById('checkrun2').innerText = 'i';
                  ref.check('i');
                  break;
                case '제이':
                case '줴이':
                case 'j':
                case '재이':
                  document.getElementById('checkrun2').innerText = 'j';
                  ref.check('j');
                  break;
                case '케이':
                case '캐이':
                case 'k':
                case 'kt':
                  document.getElementById('checkrun2').innerText = 'k';
                  ref.check('k');
                  break;
                case '엘':
                case '앨':
                case 'l':
                case '에르':
                case '애르':
                case '응':
                  document.getElementById('checkrun2').innerText = 'l';
                  ref.check('l');
                  break;
                case '엠':
                case '앰':
                case 'm':
                case '에므':
                  document.getElementById('checkrun2').innerText = 'm';
                  ref.check('m');
                  break;
                case '앤':
                case '엔':
                case 'n':
                case '애느':
                case '애모':
                case 'ann':
                  document.getElementById('checkrun2').innerText = 'n';
                  ref.check('n');
                  break;
                case '오':
                case '오우':
                case 'o':
                case 'oh':
                case '어우':
                case 'all':
                case '옴':
                  document.getElementById('checkrun2').innerText = 'o';
                  ref.check('o');
                  break;
                case '피':
                case 'pee':
                case 'p':
                case '피이':
                case '퓌':
                  document.getElementById('checkrun2').innerText = 'p';
                  ref.check('p');
                  break;
                case '큐':
                case '큐우':
                case 'q':
                case 'que':
                  document.getElementById('checkrun2').innerText = 'q';
                  ref.check('q');
                  break;
                case 'r':
                case '알':
                case '아알':
                case '어알':
                case '아래':
                case 'are':
                case '얼':
                  document.getElementById('checkrun2').innerText = 'r';
                  ref.check('r');
                  break;
                case 's':
                case '에스':
                case '애스':
                case '예습':
                case '예쓰':
                case 'yes':
                  document.getElementById('checkrun2').innerText = 's';
                  ref.check('s');
                  break;
                case '티이':
                case '티':
                case 't':
                case 'tea':
                case 'ti':
                case 'tee':
                  document.getElementById('checkrun2').innerText = 't';
                  ref.check('t');
                  break;
                case 'u':
                case 'you':
                case '유':
                  document.getElementById('checkrun2').innerText = 'u';
                  ref.check('u');
                  break;
                case 'v':
                case '브이':
                case '부위':
                  document.getElementById('checkrun2').innerText = 'w';
                  ref.check('v');
                  break;
                case 'w':
                case '더블유':
                case '더블':
                case '다블유':
                case '떠블유':
                case '떠블':
                  document.getElementById('checkrun2').innerText = 'w';
                  ref.check('w');
                  break;
                case 'x':
                case '엑스':
                case '액스':
                case '악스':
                case '억스':
                case 'ax':
                case 'axe':
                case 'ex':
                  document.getElementById('checkrun2').innerText = 'x';
                  ref.check('x');
                  break;
                case 'y':
                case '와이':
                case '와아이':
                case '오아이':
                case 'why':
                  document.getElementById('checkrun2').innerText = 'y';
                  ref.check('y');
                  break;
                case 'z':
                case '제트':
                case '재트':
                case '지트':
                case '젵':
                case '젯':
                case '잿':
                case '제투':
                  document.getElementById('checkrun2').innerText = 'z';
                  ref.check('z');
                  break;
                default:
                  document.getElementById('checkrun2').innerText = 'default';
                  refff.init();
                  break;
              }
              /*setTimeout(function() {
                refff.init();
              }, 3000);*/
              
            }
          });
				};
			});
    }
  },
}
</script>
<style>
.word {
  background: white;
  box-sizing: border-box;
  float: left;
  font-size: 650%;
  width: 130px;
  height: 130px;
  margin: 10px;
  padding: 20px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
}

.cate {
  position: absolute;
  font-size: 300%;
  top: 6%;
  left: 80%;
}

.center {
  position: absolute;
  top: 19%;
  line-height: 100px;
}

.alphabet {
  position: absolute;
  top: 47%;
  left: 10%;
  line-height: 80px;
}

.but {
  background: rgb(112,173,71);
  border-radius: 10%;
  padding: 0 5px;
  margin: 10px 10px;
  color: white;
  font-size: 60px;
  width: 80px;
  height: 80px;
  text-align: center;
  vertical-align: middle;
}

.mainBackground {
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  background-image: url('../assets/background/main.jpg'); 
  background-repeat:no-repeat;
  background-size: cover;
  transition: transform 0.4s;
  z-index: 3;
}

#doti1 {
  position: absolute;
  width: 5%;
  height:auto;
  top: 1%;
  left: 12%;
}

#doti2 {
  position: absolute;
  width: 5%;
  height:auto;
  top: 1%;
  left: 18%;
}

#doti3 {
  position: absolute;
  width: 5%;
  height:auto;
  top: 1%;
  left: 24%;
}

#doti4 {
  position: absolute;
  width: 5%;
  height:auto;
  top: 1%;
  left: 30%;
}

#doti5 {
  position: absolute;
  width: 5%;
  height:auto;
  top: 1%;
  left: 36%;
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");
@import url("https://fonts.googleapis.com/css?family=Monoton");
* {
  box-sizing: border-box;
}


.message_contianer{
  height:50%;
  width:50%;
}

/*body {*/
/*  background-color: #f6f5f6;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}*/

.main {
  width: 100%;
  height: 100%;
  background-image: url("../assets/background/category.jpg");
  background-size: cover;
  transition: transform 0.4s;
  z-index: 3;
  position: absolute;
}

#m_img{
  height: 50%;
  top : 20%;
  left : 20%;
  transform : translateX(-50%);
  position : absolute;
  float : left;

}

#m_text{
  top:30%;
  left:30%;
  position : absolute;
  float : left;
}


.third {
  width: 100%;
  height: 100%;
  text-align: left;
  position: absolute;

  background-image: url('../assets/background/meaning.jpg');
  background-repeat:no-repeat;
  background-size: cover;
}

.caption {
  height: 40%;
  width: 80%;
  padding: 20px 5px 20px 5px;
  position:absolute;
  left:50%;
  top:60%;
  transform: translatex(-50%);
  display : flex;
  justify-content : space-around;
  align-items : center;
}

.caption .content {
  font-size: 50px;
  text-align:center;
  width:30%;
  padding:10px 10px 10px 10px;
  margin: 20px;
  background: #385723; 
  color: white;
  border-radius: 40px;
  transform: translateY(-20%);
}

.third:hover main {
  display:none;
}

</style>