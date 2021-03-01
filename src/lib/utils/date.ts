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
