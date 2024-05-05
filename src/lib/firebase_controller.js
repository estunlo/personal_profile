import firebase from '../firebase'
import { appBusy, appIdle } from './external_functions'

const DB = firebase.firestore()
const PERSONAL_DETAIL = DB.collection('personal_detail')
const RESUME = 'resume'
// let STORAGE = firebase.storage()
export default class controller {
  constructor () {
    firebase.auth().onAuthStateChanged((user) => {
      // let provider = new firebase.auth.GoogleAuthProvider()
      // return firebase.auth()
      //   .signInWithPopup(provider)
      //   .then(function (result) {
      //     // onAuthStateChanged will do the rest
      //     if (result && result.user && result.user.email) {
      //       if (!result.user.email.includes('@hkmovie6.com')) {
      //         // store.commit('PUSH_ERROR', 'Not authorize')
      //         console.log('Not authorize')
      //       }
      //     }
      //     // store.commit('PUSH_ERROR', 'Not authorize')
      //   })
      //   .catch(function (error) {
      //     // store.commit('PUSH_ERROR', error.message)
      //     console.log(error)
      //     return Promise.resolve(false)
      //   })
    })
  }

  resumeDetail () {
    appBusy()

    return new Promise((resolve, reject) => {
      PERSONAL_DETAIL
        .doc(RESUME)
        .get()
        .then(doc => {
          console.log(doc)
          if (doc.exists) {
            let data = doc.data()
            resolve(data)
            appIdle()
          }
        })
        .catch(error => {
          console.log('Error getting cached document:', error)
          reject(error)
          appIdle()
        })
    })
  }

  updateResumeDetail (newProps) {
    console.log(newProps)
    appBusy()

    return new Promise((resolve, reject) => {
      PERSONAL_DETAIL
        .doc('resume')
        .update(newProps)
        .then(() => {
          resolve()
          appIdle()
        })
        .catch(error => {
          console.log('Error getting cached document:', error)
          reject(error)
          appIdle()
        })
    })
  }

  cloneResume (resume) {
    appBusy()

    return new Promise((resolve, reject) => {
      PERSONAL_DETAIL
        .doc('temp_resume')
        .set(resume)
        .then(() => {
          resolve()
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          appIdle()
        })
    })
  }
}
