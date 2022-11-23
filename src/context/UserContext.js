import { createContext } from "react";
import { firebase } from '../firebase'

export const UserContext = createContext({
  userProfile: null,
  refetchUserProfile: () => {}
});

async function getUserProfileFromDatabase(id) {
  // Gets the user profile from the database
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

export function createFetchUserProfile(setUserProfile) {
  // Returns a function that fetches the user profile and sets it with the setter
  return () => {
    (async () => {
      const auth = firebase.auth()
      const id = auth.currentUser?.email
      if (id == null) { return }
      const userProfile = await getUserProfileFromDatabase(id)
      console.log(userProfile)
      setUserProfile(userProfile)
    })()
  }
}