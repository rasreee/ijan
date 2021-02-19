import { useFirebase } from "@hooks";

let instance: FirebaseAuth | undefined;
export default async function useLogin(
  email: string,
  password: string
): Promise<void> {
  if (!instance) {
    instance = useFirebase().firebase.auth();
  }
  console.log("logging in with email: " + email);
  try {
    await instance.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw new Error("Error! Could not login. Details: " + err);
  }
}
