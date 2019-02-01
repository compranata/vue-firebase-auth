import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import config from './config'
import dotenv from 'dotenv/config'

Vue.config.productionTip = false

let app = ''
const conf = config[process.env.NODE_ENV]

firebase.initializeApp({
  apiKey: conf.fb_api_key,
  authDomain: conf.fb_auth_domain,
  databaseURL: conf.fb_database_url,
  projectId: conf.fb_project_id,
  storageBucket: conf.fb_storage_bucket,
  messagingSenderId: conf.fb_messaging_sender_id
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
