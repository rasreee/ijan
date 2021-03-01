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
	status = Status.LOADING;
	errorMessage = '';

	constructor(root: RootStore) {
		super(root);
		makeObservable(this, {
			hydrate: false,
			status: observable,
			setStatus: action,
			error: computed,
			loading: computed,
			done: computed,
			errorMessage: observable,
			setErrorMessage: action
		});
	}
	hydrate = async (userId: string) => {
		this.setStatus(Status.LOADING);
		try {
			const result = await this.root.timesService.getAll(userId);
			runInAction(() => {
				this.setList(result);
				this.setStatus(Status.ERROR);
			});
		} catch (err) {
			console.error(err);
			runInAction(() => {
				this.setStatus(Status.ERROR);
			});
		}
	};
	setStatus = (status: Status) => this.status;

	get loading(): boolean {
		return this.status === Status.LOADING;
	}
	get error(): boolean {
		return this.status === Status.ERROR;
	}
	get done(): boolean {
		return this.status === Status.DONE;
	}

	setErrorMessage = (msg: string) => (this.errorMessage = msg);
}
