<template>
  <div class="restart">
    <audio autoplay>
      <source src="../assets/sound/gameAudio.mp3" type="audio/mpeg">
    </audio>

    <div class="ch">
      <div><img class="charImg"  src="../assets/gif/success.gif"></div>
      
      <div class="buttons">
        <button class='again' v-on:click="goAgain()">
          <img class='againImg' src="../assets/restart/againBtn.png">
        </button>
        <button class='exit' v-on:click="Exit()">
            <img class='exitImg' src="../assets/restart/exitBtn.png">
        </button>
      </div>

    </div>

  </div>
</template>


<style>
  .restart {
          height: 100%;
          width: 100%;
          position: absolute;
          text-align: center;
          background-image: url('../assets/restart/restart.png');
          background-position: center;
          background-repeat:no-repeat;
  }

  .ch{
    position:absolute;
    top:25%;
    left:30%;
  } 

  .charImg{
    float:left;
    height:70%;
  }

  .buttons{
    float:right;
    height: 30%;
  }

  .again{
    border-width:0;
    background:none;
    position: relative;
    text-align: right;
  }

  .exit{
    border-width:0;
    background:none;
    position: relative;
    text-align: right;
  }

</style>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goAgain(st){
      this.$router.push({name: "start"});
    },
    goExit(st){
      this.$router.push({name: "start"});
    }
  } 
}
</script>
