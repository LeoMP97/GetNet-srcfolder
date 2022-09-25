import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const app = firebase.initializeApp({

    apiKey: "AIzaSyCxo7zxt6lOTgCEnAX5iPMzB04kjnTj7PQ",

    authDomain: "getnet-e7216.firebaseapp.com",

    databaseURL: "https://getnet-e7216-default-rtdb.firebaseio.com",

    projectId: "getnet-e7216",

    storageBucket: "getnet-e7216.appspot.com",

    messagingSenderId: "897175434756",

    appId: "1:897175434756:web:f25b40c022a142c6892751",

    measurementId: "G-LEFRCDSCM5"

});


// Initialize Firebase

export const auth = app.auth()
export default app;