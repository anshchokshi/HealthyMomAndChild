import { createContext } from "react";
import { firebase } from '../firebase'

export const UserContext = createContext({
  userProfile: null,
  setUserProfile: () => {}
});

export async function getUserProfile(id) {
  try {
    const userDocRef = firebase.firestore().collection('users').doc(id)
    const userDoc = await userDocRef.get()
    const userProfile = userDoc.data()
    try {
      const pregnantProfileDoc = await userDocRef.collection('pregnant').doc(id).get()
      userProfile.pregnantProfile = pregnantProfileDoc.data()
    } catch (error) {
      console.warn("User has no pregnant profile")
    }
    return userProfile
  } catch (error) {
    console.error(error)
    return null
  }
}
