import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBexs998aSorwSTKkSeLvXV5axVVNNQjbg",
  authDomain: "p---71.firebaseapp.com",
  projectId: "p---71",
  storageBucket: "p---71.appspot.com",
  messagingSenderId: "547162893557",
  appId: "1:547162893557:web:e54054221475d0cc28e9bc"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

