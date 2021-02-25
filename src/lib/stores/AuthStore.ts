import { makeAutoObservable } from 'mobx';

export default class AuthStore {
	currentUser: User | null = null;
	constructor() {
		makeAutoObservable(this);
	}

	setCurrentUser = (user: User) => (this.currentUser = user);
}
