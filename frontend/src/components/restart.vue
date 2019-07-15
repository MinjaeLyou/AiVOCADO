<template>
  <div class="restart">
    <audio autoplay>
      <source src="../assets/sound/gameAudio.mp3" type="audio/mpeg">
    </audio>
    <div class="ch">
      <div><img class="charImg"  src="../assets/gif/success.gif"></div>
      <div class="buttons">
        <span class='again' v-on:click="goAgain()">
          <img class='againImg' src="../assets/restart/againBtn.png">
        </span>
        <span class='exit' v-on:click="Exit()">
            <img class='exitImg' src="../assets/restart/exitBtn.png">
        </span>
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
    position: absolute;
  }

  .charImg{
    height:70%;
    margin-left: 80%;
    margin-top: 40%;
    position: relative;
    text-align: left;
  }

  .buttons{
    display: flex;
  }

  .again{
    margin-left: 170%;
    position: relative;
    text-align: right;
  }

  .exit{
    margin-left:5%;
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
