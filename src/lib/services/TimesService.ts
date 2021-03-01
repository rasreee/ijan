import firebase from 'firebase/app';
import Time from '@models/Time';

export default class TimesService {
	times: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
	constructor(
		collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
	) {
		this.times = collection;
	}
	clockIn = async (userId: string): Promise<Time | undefined> => {
		if (!userId) return Promise.resolve(undefined);
		try {
			const epoch = Date.now();
			const data = { start: epoch, end: -1, period: 1, userId: userId };
			const ref = await this.times.add(data);
			return { ...data, id: ref.id };
		} catch (err) {
			return Promise.resolve(undefined);
		}
	};
	clockOut = async (time: Time): Promise<Time | undefined> => {
		if (!time.id) return Promise.resolve(undefined);
		const { id, ...rest } = time;
		try {
			const epoch = Date.now();
			const ref = this.times.doc(id);
			const snapshot = await ref.get();
			if (!snapshot.exists) return Promise.resolve(undefined);
			await ref.update({ end: epoch });
			return { ...time, end: epoch };
		} catch (err) {
			return Promise.resolve(undefined);
		}
	};
}
