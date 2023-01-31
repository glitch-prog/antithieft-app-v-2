import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export class FirebaseService {
  addToHistory(email: string, action: string) {
    firestore()
      .collection('history')
      .add({
        user: email,
        action: action,
        time: new Date().toJSON(),
      })
      .then(() => {
        console.log('User added!');
      });
  }
}
