<template>  
    <div class="third">
      
      <main>
        여기에 메인 화면
      </main>

      <div class = "message_contianer">
        <img id = "m_img" src = "../assets/gif/success.gif">
        <img id = "m_text" src ="../assets/gif/goodjob.gif">
      </div>
      
      <div class="caption">
        <div class="content">
          <span>Swimming</span>
        </div>
        <div class="content">
          <span>수영</span>
        </div>
        <div class="content">
          <span>명사(n)</span>
        </div>
      </div>

    </div>
  
</template>

<script>
/*
$( document ).ready(function() {
  var speed = 75;
  typeEffect($('#m_text'), speed);

});
*/

export default {
  data() {
    return { 
      user: {},
    }
  },
  methods: {
        go(cate){
          this.$router.push({name: "gameMain", params: {cate: cate}});
        },

        /*typeEffect(element, speed) {
          var text = $(element).text();
          $(element).html('');
          
          var i = 0;
          var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
        }
        */
  
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");
@import url("https://fonts.googleapis.com/css?family=Monoton");
* {
  box-sizing: border-box;
}


.message_contianer{
  height:50%;
  width:50%;
}

/*body {*/
/*  background-color: #f6f5f6;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}*/

main {
  width: 100%;
  height: 100%;
  background-image: url("../assets/background/category.jpg");
  background-size: cover;
  transition: transform 0.4s;
  z-index: 3;
  position: absolute;
}

#m_img{
  left : 50%;
  transform : translateX(-50%);
  position : absolute;
  float : left;

}

#m_text{
  top:30%;
  left:60%;
  position : absolute;
  float : left;
}


.third {
  width: 100%;
  height: 100%;
  position: absolute;

  background-image: url('../assets/background/meaning.jpg');
  background-repeat:no-repeat;
  background-size: cover;
}

.caption {
  height: 40%;
  width: 80%;
  padding: 20px 5px 20px 5px;
  position:absolute;
  left:50%;
  top:60%;
  transform: translatex(-50%);
  display : flex;
  justify-content : space-around;
  align-items : center;
}

.caption .content {
  font-size: 50px;
  text-align:center;
  width:30%;
  padding:10px 10px 10px 10px;
  margin: 20px;
  background: #385723; 
  color: white;
  border-radius: 40px;
  transform: translateY(-20%);
}

.third:hover main {
  display:none;
}

</style>

