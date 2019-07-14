<template>
  <div class="third">
      <main>
        여기에 메인 화면
      </main>
      <div class="caption">
        <div class="content">
          <h3>Swimming</h3>
        </div>
        <div class="content">
          <span class="span">수영</span>
        </div>
        <div class="content">
          <span>명사</span>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
//const clockContainer = this.$el.querySelector(".js-clock"),
  //clockTitle = clockContainer.querySelector("h1");
// export default {
//   data() {
//     return {
//       user: {},
//     }
//   },
//   created: async function () {
//     this.init();

//   },
//   methods : {
//     init() {
//   getTime();
//   setInterval(getTime, 1000);
// },
// getTime() {
//   const date = new Date();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();
//   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }`;
// }

//   }
// }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f6f5f6;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

main {
  width: 100%;
  height: 100%;
  background-image: url("images/bg.jpg");
  background-size: cover;
  transition: transform 0.4s;
  z-index: 3;
  position: relative;
}

.caption {
  background: #2c3f52;
  position: absolute;
  top: 0;
  left: 0;
  color: #ed4e6e;
}

.content {
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.caption .span {
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 2px;
  background: #ed4e6e;
  margin-top: 10px;
  color: white;
}

.caption h3 {
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
  color: #fff;
}

.third {
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  overflow: hidden;
  background-color: #2c3f52;
}

.third .caption {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 20px;
  position: absolute;
  z-index: 2;
}

.third:hover main {
  transform: translateY(-50px) scale(0.5);
}

</style>

