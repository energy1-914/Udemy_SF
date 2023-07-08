import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "util/config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app );

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
export default auth;
