import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCHqRDLlChIMZ4eX8TRQ6Swdk0d_cR7WbY',
  authDomain: 'e-com-c9ae6.firebaseapp.com',
  databaseURL: 'https://e-com-c9ae6.firebaseio.com',
  projectId: 'e-com-c9ae6',
  storageBucket: 'e-com-c9ae6.appspot.com',
  messagingSenderId: '364971813999',
  appId: '1:364971813999:web:a07b87a3ad31f04b2db19a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
