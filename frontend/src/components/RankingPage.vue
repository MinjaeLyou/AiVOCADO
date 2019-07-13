<template>
  <div class="ranking">
    <div><img class="rankingImg"  src="../assets/ranking/ranking.png"></div>

    <div class="rankingBg">
      <ul>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/gold-medal.png"></span>
          <span class="userImg"><img class="img" src="../assets/character/doti.png"></span>
          <span class="userName">{{ users[0].name }}</span>
          <span class="score">{{ users[0].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/silver-medal.png"></span>
          <span class="userImg"><img class="img" src="../assets/character/ati.png"></span>
          <span class="userName">{{ users[1].name }}</span>
          <span class="score">{{ users[1].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="medalImg" src="../assets/ranking/bronze-medal.png"></span>
          <span class="userImg"><img class="img" src="../assets/character/kati.png"></span>
          <span class="userName">{{ users[2].name }}</span>
          <span class="score">{{ users[2].score }}</span>
        </li>
        <li>
          <span class="medal"><img class="forthMedalImg" src="../assets/ranking/4th.png"></span>
          <span class="userImg"><img class="img" src="../assets/character/voti.png"></span>
          <span class="userName">{{ users[3].name }}</span>
          <span class="score">{{ users[3].score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  body {
    background-image: url( "../assets/background/category.jpg" );
    background-repeat:no-repeat;
    background-size:cover;
  }

  .ranking {
    height: 100%;
    position: relative;
    text-align: center;
  }

  .rankingImg {
    height: 18%;
    margin-top: 8px;
    margin-bottom: 8px;
    position: relative;
    text-align: center;
    width: 35%;
  }

  .userImg .img {
    height: 100%;
    width: auto;
  }

  .medalImg{
    height: 90%;
    width: auto;
    margin: 0;
    padding: 0;
  }

  .forthMedalImg{
    height: 75%;
    width: auto;
    margin-left: 3%;
    margin-top: 15%;
    padding: 0;
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
  }

  .rankingBg ul li{
    background: rgb(225,234,119);
    border-radius: 15px;
    box-sizing: border-box;
    color: rgb(85,140,47);
    display: flex;
    height: 150px;
    margin: 20px;
    transition: .5s;
  }

  .rankingBg ul li span:nth-child(1){
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
  }

  .userName{
    color: rgb(150,32,5);
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 70px;
    font-weight: bold;
    left: 16px;
    position: relative;
    text-align: center;
  }

  .score{
    color: rgb(85,140,47);
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 70px;
    font-weight: bold;
    left: 60px;
    position: relative;
    text-align: center;
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
    // this.$http.get('/api/movies')
    // .then((response) => {
    //   this.movies = response.data
    //   console.log(this.movies);
    // })
    const result = await this.$http.get('api/users/getScore');
    console.log("user is", result.data);
    this.users = result.data;
  }
  // data () {
  //   return {
  //     movies: []
  //   }
  // }
}
</script>