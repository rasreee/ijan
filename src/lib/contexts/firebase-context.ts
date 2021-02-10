import firebase from "firebase";
import { createContext } from "react";
interface IFirebaseContext {
  firebase: typeof firebase;
}
const FirebaseContext = createContext<IFirebaseContext | null>(null);

export default FirebaseContext;
