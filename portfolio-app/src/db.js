import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const app = initializeApp({
  apiKey: "AIzaSyA2GKfQDbWLY0cdb_zcFvpPHMc9LdjSFUI",
  authDomain: "contact-form-ad751.firebaseapp.com",
  databaseURL: "https://contact-form-ad751-default-rtdb.firebaseio.com",
  projectId: "contact-form-ad751",
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});

const db = getFirestore(app);

export default db;