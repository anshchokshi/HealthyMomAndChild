import firebase from "firebase/app";

export async function getFetalGrowthData(week_number, in_inches=true) {
  const db = firebase.firestore()
  const docRef = db.collection("FetalGrowth").doc(`week${week_number}`)
  const document = await docRef.get()
  const { length: lengthIn, weight: weightOz } = document.data()
  return { length: lengthIn, weight: weightOz }
}

export async function getFetalDevelopmentImage(week_number) {
  if (!(11 <= week_number && week_number <= 42)) {
    return null
  }
  const storage = firebase.storage()
  const pathRef = storage.ref(`FetalDevelopment/week${week_number}.png`);
  return await pathRef.getDownloadURL()
}