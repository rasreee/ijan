import { RootStore } from '@stores';
import { action, makeObservable, observable } from 'mobx';

export interface ICollectionStore<T> {
	/** global store */
	root: RootStore;
	/** Observable for whether page is loading */
	list: T[];
	/** Action for changing loading state */
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
