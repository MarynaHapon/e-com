// Core
import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore'

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
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collection) => {
  const transformCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth)
    }, reject);
  })
};

export default firebase;
