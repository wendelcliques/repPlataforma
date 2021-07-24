import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyD3He0KjYvXwsTtv0I07JIM9sQnFbq7hP4",
  authDomain: "atividadesceu.firebaseapp.com",
  projectId: "atividadesceu",
  storageBucket: "atividadesceu.appspot.com",
  messagingSenderId: "51560115154",
  appId: "1:51560115154:web:8906061f427fa84af2360b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 export default firebase;
