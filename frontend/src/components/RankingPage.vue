<template>
  <div class="bg">
    <div class="ranking">
      <!--<div style="position: relative; top: 120px; left: 76px;">-->
        <img src="../assets/ranking/ranking.png"></img>
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

.bg .ranking{
  top: 120px; 
  left: 76px;
  height: 20px;
  weight: 30px;
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