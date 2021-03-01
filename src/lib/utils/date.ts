const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];
export const getMonth = (x: number): string => {
	return MONTHS[x];
};

export const getDay = (x: number): string => {
	return DAYS[x];
};

export const getClockValue = () => {
	const date = new Date();
	const month = getMonth(date.getMonth());
	const day = getDay(date.getDay());
	return day + ', ' + month + ' ' + date.getDate();
};

export function getToday() {
	return getClockValue();
}

function getMinute(dt: Date) {
	let result = '';
	const minute = dt.getMinutes();
	if (minute < 10) {
		result = '0' + `${minute}`;
	} else {
		result = `${minute}`;
	}
	return result;
}

export function getTimeString(epoch: number) {
	if (epoch === -1) return '';
	const dt = new Date(epoch);
	const hour = dt.getHours();
	const minute = getMinute(dt);
	const ampm = hour >= 12 ? 'pm' : 'am';
	return `${hour}:${minute} ${ampm}`;
}
