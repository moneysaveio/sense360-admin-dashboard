import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyCcPohl9HGrBryBToMFL2s3KXqhkscTESc',
    authDomain: 'sense360-dashboard.firebaseapp.com',
    databaseURL: 'https://sense360-dashboard.firebaseio.com',
    projectId: 'sense360-dashboard',
    storageBucket: '',
    messagingSenderId: '853571840905'
};

firebase.initializeApp (config);
const auth = firebase.auth ();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();
const githubAuthProvider = new firebase.auth.GithubAuthProvider ();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider ();

const database = firebase.database ();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};