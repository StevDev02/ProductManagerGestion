import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBNSlzjqnqKUZD47MLXC3fcyjF8VP-Lb6g",
  authDomain: "product-controller-manager.firebaseapp.com",
  projectId: "product-controller-manager",
  storageBucket: "product-controller-manager.appspot.com",
  messagingSenderId: "809154804599",
  appId: "1:809154804599:web:3df1096c89890a0a54ff72",
  measurementId: "G-2MSW5B2R3K"
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