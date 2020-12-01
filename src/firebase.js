import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWFWebmGfpdmyInI4DSKhE5dquV_MR2jU",
  authDomain: "el-huertito.firebaseapp.com",
  databaseURL: "https://el-huertito.firebaseio.com",
  projectId: "el-huertito",
  storageBucket: "el-huertito.appspot.com",
  messagingSenderId: "772582047566",
  appId: "1:772582047566:web:b821a9d082f7316da2a81f",
  measurementId: "G-0RGW0X5H79"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database()

export default database;
