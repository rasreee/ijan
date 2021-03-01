import Time from '@models/Time';
import { AuthStore, RootStore } from '@stores';
import CollectionStore from './CollectionStore';

export default class TimesStore extends CollectionStore<Time> {
	constructor(root: RootStore) {
		super(root);
	}
}
