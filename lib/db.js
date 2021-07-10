import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  console.log("data :>> ", data);
  const site = firestore.collection("sites").doc();

  site.set(data);

  return site;
}

export function deleteSite(data) {
  console.log(data);
}
