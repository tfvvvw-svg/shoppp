import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

let firebaseConfig = {
  apiKey: 'AIzaSyBpLXMbF7fbUqJO8JeVaf6N416Hm3JMVs4',
  authDomain: 'auth-f9179.firebaseapp.com',
  projectId: 'auth-f9179',
  storageBucket: 'auth-f9179.firebasestorage.app',
  messagingSenderId: '176152044019',
  appId: '1:176152044019:web:4b92ca24d3e6d51d52b286',
  measurementId: 'G-1H2YBRD6F3'
}

let app = initializeApp(firebaseConfig)

export let auth = getAuth(app)
