import { AsyncStorage } from 'AsyncStorage';

import {auth} from 'firebase/auth';

import 'firebase/firestore';

export const isLogged = async () => {
  const userAuth = await AsyncStorage.getItem('userAuth');
  console.log('isLogged :: value ', JSON.stringify(userAuth !== null));
  return userAuth !== null;

};

export const setUserAuth = async (uid) => {
  await AsyncStorage.setItem('userAuth', uid);
};

export const getUserAuth = async () => {
  const userAuth = await AsyncStorage.getItem('userAuth');
  return userAuth;
};

export const cleanUserAuth = async () => {
  await AsyncStorage.removeItem('userAuth');
};

export const signUp = async (data) => {
  const {email, password, name} = data

  try {
      const userInfos = await auth().createUserWithEmailAndPassword(
          email,
          password,
      );
      setUserAuth(userInfos.user.uid);

      await firestore()
      .collection('users')
      .doc(userInfos.user.uid)
      .set({
          name,
      })

      return {registerSuccess: true}


  }   catch (e) {
      Alert.alert('Erro ao criar usuário', e.message);
      return {registerSuccess: false}
  }
}
