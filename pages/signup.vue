<template>
  <section class="container">

    <p>
      コメントを投稿するには、ユーザ名を入力してください。
    </p>
    <form>
      <div class="form-group">
        <label>Name</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input type="text" class="form-control" v-model="form.username">
        </div>
      </div>
      <div class="form-group">
        <a class="btn btn-light btn-block" tabindex="" @click="submitLogin">ログイン</a>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data(){
    return {
      form: {
        username: ""
      }
    }
  },
  methods: {
    submitLogin() {
      if(this.form.username){
        this.$store.dispatch("loginWithUserName",this.form.username)
        this.$router.push("/")
      }
    }
  }

}
</script>

<style>


</style>
