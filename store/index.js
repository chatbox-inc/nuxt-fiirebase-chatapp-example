import firebase from '~/service/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const postsRef = db.ref("/posts")

export const state = () => {
  return {
    user: undefined,
    posts: []
  }
}

export const mutations = {
  ...firebaseMutations,
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async loginWithUserName({commit}) {
    const provider = new firebase.auth.GithubAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    // var token = result.credential.accessToken
    var user = result.user
    commit("setUser",{ name: user.displayName })
  },
  addComments({ state, commit} , comment) {
    const date = new Date()
    postsRef.push().set({
      comment,
      user: state.user.name,
      date: `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    })
  },
  INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
    return new Promise( (resolve) => {
      bindFirebaseRef('posts', postsRef,{ resolve })
    })
  }),
  async INIT_USERS({commit} ){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        commit("setUser",{ name: user.displayName })
      }else{
        commit("setUser", null)
      }
    })
  }
}
