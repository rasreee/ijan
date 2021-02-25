import { AuthStore } from '@stores';

export default class RootStore {
	authStore: AuthStore;
	constructor() {
		this.authStore = new AuthStore(this);
	}
}
