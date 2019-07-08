<template>
    <div class="js-clock">
      <h1 class="">00:00</h1>
      <span>카테고리 변경</span>
    </div>
    <form action="" class="js-form form">
      <input type="text" placeholder="What is your answer?" />
    </form>
    <main class="game-main">
      <div class="game-voca">
        <div class="voca"></div>
        <div class="voca"></div>
        <div class="voca"></div>
        <div class="voca"></div>
        <div class="voca"></div>
        <div class="voca"></div>
      </div>
      <div class="game-wrapper">
        <div class="game-wrong box">
          <div class="voca"></div>
          <div class="voca"></div>
          <div class="voca"></div>
        </div>
        <div class="game-left box">
          <div class="voca"></div>
          <div class="voca"></div>
        </div>
      </div>
    </main>
</template>

<script>
const clockContainer = this.$el.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
export default {
  data() {
    return {
      user: {},
    }
  },
  created: async function () {
    this.init();

  },
  methods : {
    init() {
  getTime();
  setInterval(getTime, 1000);
},
getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: white;
}

body {
  background-color: rgb(52, 73, 94);
}

.js-clock {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

main {
  width: 80%;
  height: 80%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.voca {
  width: 12%;
  height: 30%;
  background-color: white;
  display: inline-block;
}

.box {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.game-voca {
  width: 80%;
  height: 40%;
  padding: 0 30px 0 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.game-wrapper {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
}

.game-voca,
.game-wrong,
.game-left {
  background-color: #d8d987;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: fadeIn 1s linear;
}

form {
  text-align: center;
}

</style>

