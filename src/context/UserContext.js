import { createContext } from "react";
import { firebase } from '../firebase'

export const UserContext = createContext({
  userProfile: null,
  setUserProfile: () => {}
});

export async function getUserProfile(id) {
  const document = await firebase.firestore().collection('users').doc(id).get()
  return document.data()
}
