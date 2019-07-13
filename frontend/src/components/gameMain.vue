<template>
  <div>
    <h1>게임 메인 화면</h1>
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
      try: 0
    }
  },
  mounted: async function(){
    
  },
  created: async function () {
    const wordId = await Math.floor(Math.random() * 25) + 1;
      console.log(wordId);
      const result = await this.$http.get(`/api/word/${this.$route.params.cate}/${wordId}`)
      this.word = await result.data;
      console.log(this.word);
      console.log(this.word.word);
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
        var pos = 55 - parseInt(this.len/2)*10;
      else
        var pos = 49 - parseInt(this.len/2)*10;
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
  background: rgb(225,234,119);
  border-radius: 5px;
  box-sizing: border-box;
  float: left;
  font-size: 150px;
  width: 150px;
  height: 180px;
  margin: 10px;
  padding: 20px;
  vertical-align: middle;
  text-align: center;
}

.center {
  position: absolute;
  top: 30%;
  left: 30%;
  line-height: 100px;
}

.alphabet {
  position: absolute;
  top: 70%;
  left: 10%;
  line-height: 100px;
}

.but {
  background: rgb(85,140,47);
  border-radius: 5px;
  padding: 0 5px;
  margin: 10px 10px;
  color: white;
  font-size: 100px;
  width: 100px;
  height: 140px;
  text-align: center;
  vertical-align: middle;
}

</style>