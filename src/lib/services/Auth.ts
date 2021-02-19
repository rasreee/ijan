import firebase from "firebase/app";

const instance = firebase.auth();

const Auth = {
  login: async (email: string, password: string): Promise<void> => {
    console.log("logging in with email: " + email);
    try {
      await instance.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      throw new Error("Error! Could not login. Details: " + err);
    }
  },
  register: async (email: string, password: string): Promise<void> => {
    console.log("registering with email: " + email);
    try {
      await instance.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      throw new Error("Error! Could not sign up. Details: " + err);
    }
  },
};

export default Auth;
