import firebase from "firebase/app";

async function getFetalGrowthDataFromDatabase(week_number) {
  const db = firebase.firestore()
  const docRef = db.collection("FetalGrowth").doc(`week${week_number}`)
  const document = await docRef.get()
  const { length: lengthIn, weight: weightOz } = document.data()
  return { lengthIn, weightOz }
}

export async function getFetalGrowthData(week_number) {
  const { lengthIn, weightOz } = await getFetalGrowthDataFromDatabase(week_number)
  return { lengthIn, weightOz, weightPounds: weightOz / 16, weightGrams: weightOz * 28.35 }
}

export async function getFetalDevelopmentImage(week_number) {
  if (!(11 <= week_number && week_number <= 42)) {
    return null
  }
  const storage = firebase.storage()
  const pathRef = storage.ref(`FetalDevelopment/week${week_number}.png`);
  return await pathRef.getDownloadURL()
}