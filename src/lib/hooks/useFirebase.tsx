import { FirebaseContext, IFirebaseContext } from "@contexts";
import { useContext, useEffect, useState } from "react";

export default function useFirebase() {
  const [firebase, setFirebase] = useState<FirebaseApp>(null);
  const [loadingFirebase, setLoadingFirebase] = useState(true);
  const context = useContext<IFirebaseContext>(FirebaseContext);

  useEffect(() => {
    if (context && context.firebase) {
      setLoadingFirebase(false);
      setFirebase(context.firebase);
    } else setLoadingFirebase(true);
    return () => console.log("🔥 firebase: ", firebase);
  }, [context]);

  return { firebase, loadingFirebase };
}
