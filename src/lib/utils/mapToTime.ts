import Time from '@models/Time';

export default function mapToTime(id: string, data: DocumentData): Time {
	return {
		id,
		userId: data.userId ?? '',
		start: data.start ?? -1,
		end: data.end ?? -1,
		period: data.period ?? 1
	};
}
