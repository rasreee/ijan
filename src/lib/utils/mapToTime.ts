import Time from '@models/Time';

export default function mapToTime(data: any): Time {
	return {
		id: data.id ?? '',
		userId: data.userId ?? '',
		start: data.start ?? -1,
		end: data.end ?? -1,
		period: 1
	};
}
