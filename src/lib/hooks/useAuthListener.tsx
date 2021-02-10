import firebase from "firebase";
import { useState, useEffect, useContext } from "react";

import { FirebaseContext, IFirebaseContext } from "@contexts";
import { isNull } from "lodash";

/** Auth state hook */
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser") ?? "")
  );
  const context = useContext<IFirebaseContext>(FirebaseContext);
  useEffect(() => {
    if (isNull(context)) return setUser(null);
    const { firebase } = context;
    const listener = firebase
      .auth()
      .onAuthStateChanged((authUser: firebase.User | null) => {
        console.log("authUser: " + authUser);
        if (authUser) {
          localStorage.setItem("authUsera: ", JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem("authUser");
          setUser(null);
        }
      });

    return () => listener();
  }, [context]);

  return { user };
}
