import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`
});
const firebaseDatabase = app.database();
const firebaseAuth = app.auth();

export{
    firebaseDatabase,
    firebaseAuth
};