<template>
  <div class="startBg">
    <audio autoplay>
      <source src="../assets/sound/startmusic.mp3" type="audio/mpeg">
    </audio>
    <button class="startbutton" v-on:click="go()"><img src="../assets/background/gamestart.png"></button>
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
            height: 30%;
            left: 30%;
            top:50%;
            
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
