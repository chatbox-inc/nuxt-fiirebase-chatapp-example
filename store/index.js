export const state = () => {
  return {
    user: null,
    posts: []
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  addPosts(state, post) {
    state.posts.push(post)
  }
}

export const actions = {
  loginWithUserName({commit}, name) {
    commit("setUser",{ name })
  },
  addComments({ state, commit} , comment) {
    const date = new Date()
    commit("addPosts",{
      comment,
      user: state.user.name,
      date: `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    })
  }
}
