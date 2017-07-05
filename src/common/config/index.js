import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBd2zFNsL5mfiyRpW-OaI8Au-t-ol1KyZ8",
    authDomain: "todoapp-26a18.firebaseapp.com",
    databaseURL: "https://todoapp-26a18.firebaseio.com",
    projectId: "todoapp-26a18",
    storageBucket: "todoapp-26a18.appspot.com",
    messagingSenderId: "304633718016"
  };
  firebase.initializeApp(config);
export default firebase;
