<template>
  <div class="startBg">
    <audio autoplay>
      <source src="../assets/sound/startmusic.mp3" type="audio/mpeg">
    </audio>
    <div id = "backimg">
      <img src = "../assets/gif/startgif.gif">
    </div>
    <button class="startbutton" v-on:click="go()"><img src="../assets/background/gamestart.png"></button>
    <div id = "backimg2">
      <img src = "../assets/gif/startgif.gif">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    go(cate){
      this.$router.push({name: "select"});
    }
  }
}
</script>
<style>
    #backimg{
        position: absolute;
        top: 15%;
        left: 10%;
        width: 10%;
    }
    
    #backimg2{
        position: absolute;
        top: 15%;
        right: 10%;
    }

    .startBg {
        height: 100%;
        width: 100%;
        position: absolute;
        background-image:url("../assets/background/background.png");
        background-size: cover;
    }
    .startbutton{
            animation-name : vibrate;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            background:none;
            border-width:0;
            position: relative;
            width: 40%;
            height: 40%;
            left: 30%;
            top: 45%;
            
    }

    @keyframes vibrate {
            0% {transform:scale(0.5);}
            10% {transform:scale(0.6);}
            20% {transform:scale(0.6);}
            30% {transform:scale(0.6);}
            40% {transform:scale(0.6);}
            50% {transform:scale(0.7);}
            60% {transform:scale(0.6);}
            70% {transform:scale(0.6);}
            80% {transform:scale(0.6);}
            90% {transform:scale(0.6);}
            100% {transform:scale(0.5);}
    }
</style>
