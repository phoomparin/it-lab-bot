import admin from 'firebase-admin'

const serviceAccount = require('../../service-account.json')

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://phoomparin.firebaseio.com',
})

export const firestore = firebase.firestore()
