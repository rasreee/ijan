import React from 'react';
import { ReactNode } from 'react';
import WeekViewModel from 'vms/WeekViewModel';

export const WeekViewContext = React.createContext<WeekViewModel | undefined>(
	undefined
);

export function WeekViewProvider({ children }: { children: ReactNode }) {
	const vm = new WeekViewModel({ buttonText: 'Clock in' });

	return (
		<WeekViewContext.Provider value={vm}>
			{children}
		</WeekViewContext.Provider>
	);
}
