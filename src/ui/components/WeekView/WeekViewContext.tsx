import { useTimesStore } from '@hooks/data';
import useTimesService from '@hooks/services/useTimesService';
import React from 'react';
import { ReactNode } from 'react';
import WeekViewModel from 'vms/WeekViewModel';

export const WeekViewContext = React.createContext<WeekViewModel | undefined>(
	undefined
);

export function WeekViewProvider({ children }: { children: ReactNode }) {
	const times = useTimesStore();
	const service = useTimesService();
	const vm = new WeekViewModel({ clockedIn: false, times, service });

	return (
		<WeekViewContext.Provider value={vm}>
			{children}
		</WeekViewContext.Provider>
	);
}
