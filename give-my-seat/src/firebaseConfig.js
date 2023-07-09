import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseConfig from "util/config";

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const userCred = signInWithPopup(auth, new GoogleAuthProvider());

export { userCred };
export default auth;
