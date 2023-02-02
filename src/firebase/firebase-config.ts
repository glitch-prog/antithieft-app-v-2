import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7K6ATSXJpKtjoHTlKYDD8sVcUg1MMJKw',
  authDomain: 'node-js-66b48.firebaseapp.com',
  projectId: 'node-js-66b48',
  storageBucket: 'node-js-66b48.appspot.com',
  messagingSenderId: '570917669756',
  appId: '1:570917669756:web:3f13de15e8a15276c132f9',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
