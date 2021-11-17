import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig'
import 'firebase/storage'
import 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initializing firebase storage
const appStorage = firebase.storage();
const appFirestore = firebase.firestore();

//Exporting storage and firestore services.
export { appStorage, appFirestore };