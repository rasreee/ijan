import firebase from 'firebase/app';
import Users from './Users';

const instance = firebase.auth();

const Auth = {
	login: async (email: string, password: string): Promise<void> => {
		console.log('logging in with email: ' + email);
		try {
			await instance
				.signInWithEmailAndPassword(email, password)
				.then((creds) => {
					if (!creds.user) return;
					const now = Date.now();
					return Users.create({
						id: creds.user.uid,
						firstName: '',
						lastName: '',
						createdAt: now,
						lastActive: now
					});
				});
		} catch (err) {
			console.error(err);
			throw new Error('Error! Could not login. Details: ' + err);
		}
	},
	register: async (email: string, password: string): Promise<void> => {
		console.log('registering with email: ' + email);
		try {
			await instance
				.createUserWithEmailAndPassword(email, password)
				.then((creds) => {
					if (!creds.user) return;
					const now = Date.now();
					return Users.create({
						id: creds.user.uid,
						firstName: '',
						lastName: '',
						createdAt: now,
						lastActive: now
					});
				});
		} catch (err) {
			console.error(err);
			throw new Error('Error! Could not sign up. Details: ' + err);
		}
	}
};

export default Auth;
