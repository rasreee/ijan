import Time from '@models/Time';
import mapToTime from '@utils/mapToTime';
import firebase from 'firebase';

export default function mapQuerySnapshot(list: QuerySnapshot): Time[] {
	if (list.empty) return [];

	return list.docs.map(mapQueryDocumentSnapshot);
}

export function mapQueryDocumentSnapshot(
	snapshot: QueryDocumentSnapshot
): Time {
	const data = snapshot.data();
	return mapToTime(snapshot.id, data);
}
