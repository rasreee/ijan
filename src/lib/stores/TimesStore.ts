import Time from '@models/Time';
import { AuthStore, RootStore } from '@stores';
import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction
} from 'mobx';
import CollectionStore from './CollectionStore';
import Status from './status';

export default class TimesStore extends CollectionStore<Time> {
	errorMessage = '';
	loading = false;

	constructor(root: RootStore) {
		super(root);
		makeObservable(this, {
			hydrate: action,
			loading: observable,
			done: computed,
			setLoading: observable,
			errorMessage: observable,
			error: computed,
			setErrorMessage: action
		});
	}
	hydrate = async () => {
		const userId = this.root.authStore.currentUser?.id ?? '';
		console.log('💜 hydrating Times');
		this.setLoading(true);
		try {
			const result = await this.root.timesService.getAll(userId);
			runInAction(() => {
				this.setList(result);
				console.log('💜 DONE hydrating');
				this.setLoading(false);
			});
		} catch (err) {
			console.error(err);
			runInAction(() => {
				this.setErrorMessage('ERROR');
				this.setLoading(false);
				console.log('㊗️ ERROR hydrating');
			});
		}
	};

	setLoading = (val: boolean) => (this.loading = val);

	get error(): boolean {
		return this.errorMessage !== '' && !this.loading;
	}
	get done(): boolean {
		return !this.error && !this.loading;
	}

	setErrorMessage = (msg: string) => (this.errorMessage = msg);
}
