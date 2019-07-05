<template>
  <div>
    <h1>상세 내용</h1>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  created: async function () {
    const userId = 'lmj'
    const result = await this.$http.get(`/api/users/${userId}`)
    this.user = result.data;
    console.log(this.user);
  }
}
</script>