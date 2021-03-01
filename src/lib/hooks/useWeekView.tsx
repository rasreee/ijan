import React from 'react';
import WeekViewModel from 'vms/WeekViewModel';

export const WeekViewContext = React.createContext<WeekViewModel | null>(null);

export default function useWeekView() {
	const ctx = React.useContext(WeekViewContext);
	if (!ctx) throw new Error('useWeekView must be called within provider');
	return ctx;
}
