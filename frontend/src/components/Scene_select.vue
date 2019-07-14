<template>
    <div id="bg_select">
        <div id="title">SELECT CHARACTER</div>
        <div id="container">
            <button v-on:click="go()" class="user_bt"><img src="../assets/character/voti.png" class="avocado" style="animation-name:vibrate1;" ></button>
            <button v-on:click="go()" class="user_bt"><img src="../assets/character/ati.png" class="avocado" style="animation-name:vibrate2;" ></button>
            <button v-on:click="go()" class="user_bt"><img src="../assets/character/keti.png" class="avocado" style="animation-name:vibrate3;" ></button>
            <button v-on:click="go()" class="user_bt"><img src="../assets/character/kati.png" class="avocado" style="animation-name:vibrate2;" ></button>
            <button v-on:click="go()" class="user_bt"><img src="../assets/character/doti.png" class="avocado" style="animation-name:vibrate1;" ></button>
            <br>
            <textarea class="avocado_name">VOTI</textarea>
            <textarea class="avocado_name">ATI</textarea>
            <textarea class="avocado_name">KETI</textarea>
            <textarea class="avocado_name">KATI</textarea>
            <textarea class="avocado_name">DOTI</textarea>
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
      this.$router.push({name: "category"});
    }
  }
}
</script>

<style>
      #bg_select{
          width:100%;
          height:100%;
          position:absolute;
          background-image:url("../assets/background/background_select.png");
          background-size:cover;
      }
      #title{
          color:white;
          font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          font-weight:bolder;
          font-size:70px;
          text-align:center;
      }
      .user_bt{
          background:none;
          border:none;
          display:inline-block;
          position:relative;
          width:15%;
          height:40%;
          top:5%;

          margin:30px;
      }
      .avocado{
          animation-duration:1s; 
          animation-iteration-count: infinite;
          position:relative;
          width:100%;
          /*margin:30px;*/
      }
      .avocado_name{
          background:none;
          border-width:0;
          position:relative;
          width:15%;
          margin:30px;
          text-align:center;
          font-size:50px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      #container{
          /* background-color: white; */
          position:relative;
          width:80%;
          height:80%;
          left:10%;
      }

      @keyframes vibrate1{
          0% {transform: scale(1.0);}
          50% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
      @keyframes vibrate2{
          10% {transform: scale(1.0);}
          30% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
      @keyframes vibrate3{
          20% {transform: scale(1.0);}
          80% {transform: scale(1.1);}
          100% {transform: scale(1.0);}
      }
</style>