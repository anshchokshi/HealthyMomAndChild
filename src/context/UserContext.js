import { createContext } from "react";
import { firebase } from '../firebase'

export const UserContext = createContext({
  userProfile: null,
  setUserProfile: () => {}
});

export async function getUserProfile(id) {
  const userDocRef = firebase.firestore().collection('users').doc(id)
  const userDoc = await userDocRef.get()
  const userProfile = userDoc.data()
  const pregnantProfileDoc = await userDocRef.collection('pregnant').doc(id).get()
  userProfile.pregnantProfile = pregnantProfileDoc.data()
  return userProfile
}
