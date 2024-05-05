import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey            : 'AIzaSyAasDlF8i3dpgH9YPJJZnrBKqQ34nyFjXE',
  authDomain        : 'estun-5354.firebaseapp.com',
  databaseURL       : 'https://estun-5354.firebaseio.com',
  projectId         : 'estun-5354',
  storageBucket     : '',
  messagingSenderId : '799574132004',
  appId             : '1:799574132004:web:f3a8f4beaa0101b7e55fb1'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
