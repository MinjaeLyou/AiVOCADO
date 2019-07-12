<template>
  <div>
    <h1>게임 메인 화면</h1>    
  
    <div class="center">
      <span v-for="item in len" class="word" v-bind="key">
        &nbsp;____&nbsp;
      </span>
    </div>
    <div class="alphabet">
      <button class="but" value="a" v-on:click="check('a')">a</button><button class="but" value="a">b</button><button class="but" value="a">c</button><button class="but" value="a">d</button><button class="but" value="a">e</button>
      <button class="but" value="a">f</button><button class="but" value="a">g</button><button class="but" value="a">h</button><button class="but" value="a">i</button><button class="but" value="a">j</button>
      <button class="but" value="a">k</button><button class="but" value="a">l</button><button class="but" value="a">m</button><br><button class="but" value="a">n</button><button class="but" value="a">o</button>
      <button class="but" value="a">p</button><button class="but" value="a">q</button><button class="but" value="a">r</button><button class="but" value="a">s</button><button class="but" value="a">t</button>
      <button class="but" value="a">u</button><button class="but" value="a">v</button><button class="but" value="a">w</button><button class="but" value="a">x</button><button class="but" value="a">y</button>
      <button class="but" value="a">z</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: '',
      arrWord: [],
      arr: ['c', 'l', 'o'],
      test: [],
      len: 0,
      ans: ''
    }
  },
  mounted: async function(){
    const wordId = await Math.floor(Math.random() * 25) + 1;
      console.log(wordId);
      const result = await this.$http.get(`/api/word/${this.$route.params.cate}/${wordId}`)
      this.word = await result.data;
      console.log(this.word);
      console.log(this.word.word);
      this.len = this.word.word.length;
      for (var i = 0; i < this.word.word.length; i++) {
        this.arrWord[i] = await this.word.word.charAt(i);
        
      }
  },
  created: async function () {
      
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
      console.log(this.arrWord);
      console.log(this.arr);
    },
    async check(an){
      console.log(an);
    }
  },
}
</script>
<style>
.word {
  background: rgb(225,234,119);
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 50px;
  height: 100px;
  margin: 10px;
  padding: 20px;
}

.center {
  position: absolute;
  top: 30%;
  left: 30%;
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