<template>
<div>
    <div class='bg' >
        <div class='title'>AiVOCADO</div>
        <img src="../../src/assets/avocado/avocado_1.png" class='avo'>
        <div class='start'>GAME START</div>
    </div>
    
</div>
</template>
<style>
.bg {
        width:100vw;
        height:100vh;
        background-image: url( "../../src/assets/background/background.jpg" );
        background-repeat:no-repeat;
        background-size:cover;
        background-position: 50% 10%;
      }
      .bg .title{
          position: relative;
          text-shadow: 3px 3px black;
          font-size:100px;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color:green;
          top: 10%;
          text-align:center;
      }
      .bg .start{
          position: relative;
          text-shadow: 2px 2px green;
          font-size:70px;
          color: 593E3E;
          top: 50%;
          text-align:center;
      }
      .avo{
          animation-name: vibrate;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          position:absolute;
          width:250px;
          height:280px;
          top:300px;
          left:43%;
      }
      @keyframes vibrate {
          0% {transform: translateY(0);}
          10% {transform: translateY(-1px);}
          20% {transform: translateY(-2px);}
          30% {transform: translateY(-4px);}
          40% {transform: translateY(-6px);}
          50% {transform: translateY(-8px);}
          60% {transform: translateY(-6px);}
          70% {transform: translateY(-4px);}
          80% {transform: translateY(-2px);}
          90% {transform: translateY(-1px);}
          100% {transform: translateY(0px);}
      }
</style>
