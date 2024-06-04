import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBwv8uZuvX-2O8Q-_25L4ZQnpCBFhl1W6w",
  authDomain: "productmanagergestion-e0256.firebaseapp.com",
  projectId: "productmanagergestion-e0256",
  storageBucket: "productmanagergestion-e0256.appspot.com",
  messagingSenderId: "337587949960",
  appId: "1:337587949960:web:4dc6706267bf392610aa3d",
  measurementId: "G-JMGJ9BPM72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);

export async function uplodaImageToFirebaseStorage(file, name) {
    const storageRef = ref(storage, name)

    await uploadBytes(storageRef, file)

    const urlImage = await getDownloadURL(storageRef)

    return urlImage
}