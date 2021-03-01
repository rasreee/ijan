import { action, makeObservable, observable } from 'mobx';

export default class WeekViewModel {
	clockedIn: boolean;

	constructor({ clockedIn }: WeekViewModelProps) {
		this.clockedIn = clockedIn;
		makeObservable(this, { clockedIn: observable, toggle: action });
	}

	toggle = () => (this.clockedIn = !this.clockedIn);
}

interface WeekViewModelProps {
	clockedIn: boolean;
}
