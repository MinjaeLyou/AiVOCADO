<template>
<div class="mainBackground">
  <img id="doti1" src="../assets/character/doti.png">
  <img id="doti2" src="../assets/character/doti.png">
  <img id="doti3" src="../assets/character/doti.png">
  <img id="doti4" src="../assets/character/doti.png">
  <img id="doti5" src="../assets/character/doti.png">
    <h1 class="cate">{{cate}}</h1>
    <div class="center" id="quiz" style="left: 20%;">
    </div>
    <div id="checkrun" style="height: 50px; text-align: center;z-index:1 top: 25%"> init?>> </div>
    <div class="alphabet">
      <button class="but" id="a" v-on:click="check('a')" >a</button><button class="but" id="b" v-on:click="check('b')">b</button><button class="but" id="c" v-on:click="check('c')">c</button><button class="but" id="d" v-on:click="check('d')">d</button><button class="but" id="e" v-on:click="check('e')">e</button>
      <button class="but" id="f" v-on:click="check('f')">f</button><button class="but" id="g" v-on:click="check('g')">g</button><button class="but" id="h" v-on:click="check('h')">h</button><button class="but" id="i" v-on:click="check('i')">i</button><button class="but" id="j" v-on:click="check('j')">j</button>
      <button class="but" id="k" v-on:click="check('k')">k</button><button class="but" id="l" v-on:click="check('l')">l</button><button class="but" id="m" v-on:click="check('m')">m</button><br><button class="but" id="n" v-on:click="check('n')">n</button><button class="but" id="o" v-on:click="check('o')">o</button>
      <button class="but" id="p" v-on:click="check('p')">p</button><button class="but" id="q" v-on:click="check('q')">q</button><button class="but" id="r" v-on:click="check('r')">r</button><button class="but" id="s" v-on:click="check('s')">s</button><button class="but" id="t" v-on:click="check('t')">t</button>
      <button class="but" id="u" v-on:click="check('u')">u</button><button class="but" id="v" v-on:click="check('v')">v</button><button class="but" id="w" v-on:click="check('w')">w</button><button class="but" id="x" v-on:click="check('x')">x</button><button class="but" id="y" v-on:click="check('y')">y</button>
      <button class="but" id="z" v-on:click="check('z')">z</button>
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
      var pos = 50 - parseInt(this.len/2)*10;
    else
      var pos = 47 - parseInt(this.len/2)*10;
    console.log("pos is "+pos);
    document.getElementById('quiz').setAttribute("style", "left: "+pos+"%;");
    //const wordId = '1'
  },
  methods: {
    async check(ans){
      console.log(ans);
      document.getElementById('checkrun').innerText = 'check is a';
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
      if(this.try == 5){
        //실패
        console.log("Fail!");
        this.$router.push({name: "ranking"});
      }
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
          var options={};
					document.getElementById('checkrun').innerText = "OK";
          options.voicemsg="알파벳을 말해주세요"
          gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
            if(result_cd===200){
              //console.log(extra.voicetext+':'+solution);
              document.getElementById('checkrun').innerText = extra.voicetext;
              switch(extra.voicetext){
                case '에이' || '애이':
                  document.getElementById('checkrun').innerText = 'a';
                  ref.check('a');
                  break;
                case '비' || '비이':
                  document.getElementById('checkrun').innerText = 'b';
                  ref.check('b');
                  break;
              }
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
  font-size: 700%;
  width: 180px;
  height: 180px;
  margin: 10px;
  padding: 20px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
}

.cate {
  position: absolute;
  font-size: 300%;
  top: 10%;
  left: 80%;
}

.center {
  position: absolute;
  top: 20%;
  line-height: 100px;
}

.alphabet {
  position: absolute;
  top: 60%;
  left: 10%;
  line-height: 100px;
}

.but {
  background: rgb(112,173,71);
  border-radius: 10%;
  padding: 0 5px;
  margin: 10px 10px;
  color: white;
  font-size: 100px;
  width: 130px;
  height: 130px;
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

</style>