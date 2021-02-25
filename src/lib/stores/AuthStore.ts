import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';

export default class AuthStore {
	currentUser: User | null = null;
	constructor(root: RootStore) {
		// console.log('🍗 AuthStore: initializing!');
		makeAutoObservable(this);
	}

	setCurrentUser = (user: User) => {
		// console.log('🍗 AuthStore.setCurrentUser: ' + JSON.stringify(user));
		this.currentUser = user;
	};
}
