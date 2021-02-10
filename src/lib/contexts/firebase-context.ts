import firebase from "firebase";
import { createContext } from "react";

export type IFirebaseContext = {
  firebase: typeof firebase;
} | null;

export const FirebaseContext = createContext<IFirebaseContext>(null);
