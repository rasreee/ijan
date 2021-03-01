import { RootStore } from '@stores';
import { action, makeObservable, observable } from 'mobx';

export interface ICollectionStore<T> {
	/** global store */
	root: RootStore;
	/** List of type T */
	list: T[];
	/** Action for setting entire list */
	setList: (val: T[]) => T[];
}

export default class CollectionStore<T> implements ICollectionStore<T> {
	root: RootStore;
	list: T[] = [];

	constructor(root: RootStore) {
		this.root = root;
		makeObservable(this, {
			root: false,
			list: observable,
			setList: action
		});
	}
	setList = (list: T[]) => (this.list = list);
}
