<template>
  <div class="ranking">
    <audio autoplay>
      <source src="../assets/sound/gameAudio.mp3" type="audio/mpeg">
    </audio>
    <div><img class="rankingImg"  src="../assets/ranking/ranking.png"></div>

    <div class="rankingBg">
      <ul>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/gold-medal.png"></span>
          <span class="userImg"><img class="img" :src="require('@/assets/character/keti.png')"></span>
          <span class="userName">{{ users[0].name }}</span>
          <span class="score">{{ users[0].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/silver-medal.png"></span>
          <span class="userImg"><img class="img" :src= "require('@/assets/character/voti.png')"></span>
          <span class="userName">{{ users[1].name }}</span>
          <span class="score">{{ users[1].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/bronze-medal.png"></span>
          <span class="userImg"><img class="img"  :src= "require('@/assets/character/doti.png')" ></span>
          <span class="userName">{{ users[2].name }}</span>
          <span class="score">{{ users[2].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="forthMedalImg" id="medal4" src="../assets/ranking/4th.png"></span>
          <span class="userImg"><img class="img" id="user4" :src= "require('@/assets/character/ati.png')"></span>
          <span class="userName">{{ users[3].name }}</span>
          <span class="score">{{ users[3].score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
  

  .ranking {
    height: 100%;
    width: 100%;
    position: absolute;
    text-align: center;
    background-image: url( "../assets/background/category.jpg" );
    background-repeat:no-repeat;
    background-size:cover;
  }

  .rankingImg {
    height: 18%;
    margin-top: 8px;
    margin-bottom: 8px;
    position: relative;
    text-align: center;
    width: 35%;
  }

  .rankingBg{
    font-family: "Helvetica", "나눔 고딕", serif;
    height: 80%;
    margin:0;
    padding: 0;
  }

  .rankingBg ul{
    background: rgb(85,140,47);
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: inset 0 0 15px rgba(0,0,0,.2);
    margin: 0 auto 0;
    padding: 10px;
    position: relative;
    width: 50%;
    height: 100%;
  }

  .rankingBg ul li{
    background: rgb(225,234,119);
    border-radius: 15px;
    box-sizing: border-box;
    color: rgb(85,140,47);
    display: flex;
    height: 21.5%;
    margin: 20px;
    transition: .5s;
    justify-content: space-between;
    align-items: center;
  }

  span {
    width: 20%;
    height: 100%;
    padding: 0;
  }

  .rankingBg img {
    height : 100%;
    width: 80%;
    margin: 0;
    padding: 0;
  }

  #medal4{
    height: 75%;
    width: auto;
    margin-left: 3%;
    margin-top: 15%;
    padding: 0;
  }

  #user4 {
    height: 110%;
    transform: translateY(-10%);
  }

  /* .rankingBg ul li span:nth-child(1){
    height: auto;
    padding: 0px 15px;
    width: 20%;
  }

  .rankingBg ul li span:nth-child(2){
    margin: 15px 0;
    padding: 10px 20px;
    width: 10%;
  }

  .rankingBg ul li span:nth-child(3){
    margin: 15px 0;
    padding: 10px 20px;
    width: 30%;
  }

  .rankingBg ul li span:nth-child(4){
    margin: 15px 0;
    padding: 10px 20px;
    width: 5%;
  } */

  .userName{
    color: rgb(150,32,5);
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 68px;
    font-weight: bold;
    position: relative;
    text-align: center;
    line-height: 150%;
  }

  .score{
    color: rgb(85,140,47);
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 70px;
    font-weight: bold;
    position: relative;
    text-align: center;
    line-height: 150%;
  }
</style>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created: async function () {

    const result = await this.$http.get('api/users/getScore');
    console.log("user is", result.data);
    this.users = result.data;
    this.users[2].image = "'@/assets/character/voti.png'"
    console.log(this.users[2].image);
  },
  methods: {
    goRestart(){
      this.$router.push({name: "restart"});
    },
    callFunction() {
      var self = this;
      setTimeout(function() {
        self.goRestart() 
      }, 700000);
    }
  },
  mounted(){
    this.callFunction();
  }
}
</script>
