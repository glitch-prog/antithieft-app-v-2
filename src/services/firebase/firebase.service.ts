import firestore from '@react-native-firebase/firestore';

export class FirebaseService {
  addToHistory(email: string, action: string) {
    firestore().collection('history').add({
      user: email,
      action: action,
      time: new Date().toJSON(),
    });
  }
}
