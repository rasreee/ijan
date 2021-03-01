import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';

const dev = process.env.NODE_ENV !== 'production';
const TEST_USER: User = {
	id: 'yHfjWurWhyXBHPfRajKcfvbjfGN2',
	firstName: 'Lesley',
	lastName: 'Chang',
	lastActive: 1234,
	createdAt: 1234,
	phoneNumber: '1231231234'
};
export default class AuthStore {
	currentUser: User | null = null;

	constructor(root: RootStore) {
		// console.log('🍗 AuthStore: initializing!');
		if (dev) this.setCurrentUser(TEST_USER);
		makeAutoObservable(this);
	}

	setCurrentUser = (user: User | null) => {
		// console.log('🍗 AuthStore.setCurrentUser: ' + JSON.stringify(user));
		this.currentUser = user;
	};
}
