<template>
<div class="mainBackground">
    <h1 class="cate">{{cate}}</h1>
    <div class="center" id="quiz" style="left: 20%;">
    </div>
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
      cate: ''
    }
  },
  mounted: async function(){
    
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
    async func(){
      console.log(this.$route.params);
      const wordId = Math.floor(Math.random() * 25) + 1;
      console.log(wordId);
      const result = await this.$http.get(`/api/word/${this.$route.params.cate}/${wordId}`)
      this.word = result.data;
      console.log(this.word);
      console.log(this.word.word);
      console.log(this.word.word.charAt(2));
      for (var i = 0; i < this.word.word.length; i++) {
        this.arr[i] = await this.word.word.charAt(i);
        
      }
    },
    async check(ans){
      this.try++;
      console.log(ans);
      document.getElementById(ans).disabled = true;
      document.getElementById(ans).style.opacity = "0.3";
      for ( let i = 0; i < this.len; i++){
        console.log("i is ", i);
        if(ans == this.arrWord[i]){
          console.log("correct!");
          this.result++;
          var jbBtnText = document.createTextNode( this.arrWord[i] );
          document.getElementById('prob' + i).appendChild(jbBtnText);
          if(this.result == this.len){
            //성공
            console.log("Succeed!");
          }
        }
      }
      console.log(this.try);
      if(this.try == 7){
        //실패
        console.log("Fail!");
        this.$router.push({name: "ranking"});
      }
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

</style>