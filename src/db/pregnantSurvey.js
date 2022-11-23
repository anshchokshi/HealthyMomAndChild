import { firebase } from '../firebase'

export async function submitPregnantProfile(LMP, firstPreg, HBS, EBS, weight, height) {
    // Submit the pregnancy information to the user's profile
    const auth = firebase.auth()
    await firebase.firestore()
      .collection('users')
      .doc(auth.currentUser?.email)
      .update({
        isPregnant: true
      })
      
    return firebase.firestore()
    .collection('users')
    .doc(auth.currentUser?.email)
    .collection('pregnant')
    .doc(auth.currentUser?.email)
    .set({
        LastMenstrualPeriod: LMP,
        FirstPregnancy: firstPreg,
        HBS: HBS,
        EBS: EBS,
        InitialWeight: weight,
        Height: height
        
      })
}