<template>
  <section class="container">

    <div class="mb-3">
      <div v-if="!user">
        <p>
          コメントを投稿するには、ユーザ名を入力してください。
        </p>
        <a class="btn btn-light btn-block" tabindex="" @click="login">ログイン</a>
      </div>

      <form v-if="user">
        <div class="form-group">
          <label>Name</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" v-model="user.name" disabled>
          </div>
        </div>
        <div class="form-group">
          <label>Comment</label>
          <textarea class="form-control" v-model="form.comment" rows="3"/>
        </div>
        <div class="form-group">
          <a class="btn btn-light btn-block" tabindex="" @click="submitPost">投稿</a>
        </div>
      </form>
    </div>

    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action flex-column align-items-start" v-for="(post,index) in posts" :key="index">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.user }}</h5>
          <small>{{ post.date }}</small>
        </div>
        <p class="mb-1">{{ post.comment }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      form: {
        comment: ""
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    submitPost() {
      if (this.form.comment === "") {
        return false
      }
      this.$store.dispatch("addComments",this.form.comment)
      this.form.comment = ""
    }
  }

}
</script>

<style>


</style>
