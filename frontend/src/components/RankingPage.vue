<template>
  <div class="bg">
    <div class="ranking">
      <div><img class="rankingImg"  src="../assets/ranking/ranking.png"></div>

      <div class="rankingBg">
        <ul>
          <li>
            <span class="medal"><img class="medalImg" src="../assets/ranking/gold-medal.png"></span>
            <span class="userImg"><img class="img" src="../assets/ranking/user.png"></span>
            <span class="userName">User1</span>
            <span class="score">1000</span>
          </li>
          <li>
            <span class="medal"><img class="medalImg" src="../assets/ranking/silver-medal.png"></span>
            <span class="userImg"><img class="img" src="../assets/ranking/user.png"></span>
            <span class="userName">User2</span>
            <span class="score">900</span>
          </li>
          <li>
            <span class="medal"><img class="medalImg" src="../assets/ranking/bronze-medal.png"></span>
            <span class="userImg"><img class="img" src="../assets/ranking/user.png"></span>
            <span class="userName">User3</span>
            <span class="score">700</span>
          </li>
          <li>
            <span class="medal"><img class="forthMedalImg" src="../assets/ranking/4th.png"></span>
            <span class="userImg"><img class="img" src="../assets/ranking/user.png"></span>
            <span class="userName">User4</span>
            <span class="score">300</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  .bg {
    background-image: url( "../assets/background/background.jpg" );
    background-position: 50% 10%;
    background-repeat:no-repeat;
    background-size:cover;
    height:100vh;
    width:100vw;
  }

  .ranking {
    height: 100%;  
    padding-bottom: 5px;
    position: relative;
    text-align: center;
  }

  .rankingImg {
    height: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    position: relative;
    text-align: center;
    width: 35%;
  }

  .img {
    height: 80%;
    width: auto;
  }

  .medalImg{
    height: 90%;
    width: auto;
    margin: 0;
    padding: 0;
  }

  .forthMedalImg{
    height: 70%;
    width: auto;
    margin-left: 10px;
    margin-top: 30px;
    padding: 0;
  }

  .rankingBg ul{
    position: relative;
    width: 800px;
    margin: 100px auto 0;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(85,140,47);
    box-shadow: inset 0 0 15px rgba(0,0,0,.2);
    border-radius: 5px;
  }

  .rankingBg ul li{
    display: flex;
    background: rgb(225,234,119);
    border-radius: 15px;
    box-sizing: border-box;
    color: rgb(85,140,47);
    transition: .5s;
    height: 150px;
    margin: 20px;
  }

  .rankingBg ul li span:nth-child(1){
    padding: 0px 15px;
    margin: 10px 0;
    width: 150px;
  }

  .rankingBg ul li span:nth-child(2){
    padding: 10px 20px;
    margin: 15px 0;
    width: 120px;
  }

  .rankingBg ul li span:nth-child(3){
    padding: 10px 20px;
    margin: 15px 0;
    width: 230px;
  }

  .rankingBg ul li span:nth-child(4){
    padding: 10px 20px;
    margin: 15px 0;
    width: 100px;
  }

  .rankingBg{
    height: 80%;
    margin:0;
    padding: 0;
    font-family: "Helvetica", "나눔 고딕", serif;
  }

  .userName{
    bottom: 8px;
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 70px;
    font-weight: bold;
    left: 16px;
    position: relative;
    text-align: center;
    display: inline-block;
  }

  .score{
    bottom: 8px;
    color: rgb(85,140,47);
    font-family: "Helvetica", "나눔 고딕", serif;
    font-size: 70px;
    font-weight: bold;
    left: 16px;
    position: relative;
    text-align: center;
    display: inline-block;
  }
</style>

<script>
export default {
  created () {
    // this.$http.get('/api/movies')
    // .then((response) => {
    //   this.movies = response.data
    //   console.log(this.movies);
    // })
  }
  // data () {
  //   return {
  //     movies: []
  //   }
  // }
}
</script>