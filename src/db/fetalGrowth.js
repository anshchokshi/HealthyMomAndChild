import firebase from "firebase/app";

async function getFetalGrowthDataFromDatabase(week_number) {
  const db = firebase.firestore()
  const docRef = db.collection("FetalGrowth").doc(`week${week_number}`)
  const document = await docRef.get()
  const { length: lengthIn, weight: weightOz } = document.data()
  return { lengthIn, weightOz }
}

export async function getFetalGrowthData(i) {
    const { lengthIn, weightOz } = await getFetalGrowthDataFromDatabase(i)
    return {lengthIn, weightOz, weightPounds: weightOz / 16, weightGrams: weightOz * 28.35}
  }


