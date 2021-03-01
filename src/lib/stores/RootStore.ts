import { AuthStore } from '@stores';
import TimesStore from './TimesStore';

export default class RootStore {
	authStore: AuthStore;
	times: TimesStore;
	constructor() {
		this.authStore = new AuthStore(this);
		this.times = new TimesStore(this);
	}
}
