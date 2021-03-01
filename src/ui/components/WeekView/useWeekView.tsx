import React from 'react';
import { WeekViewContext } from './WeekViewContext';

export default function useWeekView() {
	const ctx = React.useContext(WeekViewContext);
	if (!ctx) throw new Error('useWeekView must be called within provider');
	return ctx;
}
