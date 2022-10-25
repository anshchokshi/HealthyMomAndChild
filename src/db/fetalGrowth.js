import firebase from "firebase/app";

export async function getFetalGrowthData(week_number, in_inches=true) {
  const db = firebase.firestore()
  const docRef = db.collection("FetalGrowth").doc(`week${week_number}`)
  const document = await docRef.get()
  const { length: lengthIn, weight: weightOz } = document.data()
  return { length: lengthIn, weight: weightOz }
}
