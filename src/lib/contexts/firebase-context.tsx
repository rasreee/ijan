import { createContext, ReactNode } from "react";

export type IFirebaseContext = {
  firebase: FirebaseApp | null;
};

export const FirebaseContext = createContext<IFirebaseContext>({
  firebase: null,
});

export function FirebaseProvider({
  children,
  client,
}: {
  children: ReactNode;
  client: FirebaseApp;
}) {
  return (
    <FirebaseContext.Provider value={client}>
      {children}
    </FirebaseContext.Provider>
  );
}
