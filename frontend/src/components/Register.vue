<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>유저추가</h1>
                <p class="text-muted">유저를 생성하세요</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input :class="{ 'is-invalid' : ( state.idoverlaps && oid == input.uid ) || input.uid.length <= 4 , 'is-valid' : input.uid.length >= 5 }" type="text" class="form-control" placeholder="유저 아이디" autocomplete="uid" v-model="input.uid"/>
                  <b-form-invalid-feedback v-if="state.idoverlaps && oid == input.uid" style="font-size: 14px">동일한 아이디가 존재합니다.</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input :class="{ 'is-invalid' : input.name.length == 0 , 'is-valid' : input.name.length > 0 }" type="text" class="form-control" placeholder="유저 닉네임" autocomplete="name" v-model="input.name"/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input :class="{ 'is-invalid' : input.img.length <= 1 , 'is-valid' : input.img.length >= 2 }" type="text" class="form-control" placeholder="이미지 번호" autocomplete="image" v-model="input.img"/>
                  <b-form-invalid-feedback v-if="input.img.length <= 1" style="font-size: 14px">비밀번호는 8자리 이상이어야 합니다.</b-form-invalid-feedback>
                </b-input-group>

                <b-button variant="success" block v-on:click="register()" :disabled="notok">확인</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      input: {
        uid: "",
        name: "",
        img: ""
      },
      state: {
        idoverlaps: false
      },
      oid: ""
    }
  },
  computed: {
    notok: function() {
      return ( this.state.idoverlaps && this.oid == this.input.uid ) || this.input.uid.length < 5 || this.input.name.length == 0
    }
  },
  methods: {
    async register() { // 아이디 중복 검사 추가 필요
      if(this.input.uid === "" || this.input.name === "" || this.input.img === ""){
        alert("모든 항목을 입력해주세요.");
      } else{
        const result = await this.$http.post('/api/users/addUser', {
          userId: this.input.uid,
          name: this.input.name,
          image: this.input.img
        })
        console.log(result)
        if(result.data.result) {
          alert("유저 생성이 완료되었습니다.");
          //this.$router.push({name: "Login"});
        } else {
          this.state.idoverlaps = true
          this.oid = this.input.uid
        }
      }
    }
  }
}
</script>
