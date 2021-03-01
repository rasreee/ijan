import { action, makeObservable, observable } from 'mobx';

export default class WeekViewModel {
	buttonText: string;

	constructor({ buttonText }: WeekViewModelProps) {
		this.buttonText = buttonText;
		makeObservable(this, { buttonText: observable, toggle: action });
	}

	toggle = () => {
		const text = getOpposite(this.buttonText);
		this.buttonText = text;
	};
}

interface WeekViewModelProps {
	buttonText: string;
}

const getOpposite = (buttonText: string) => {
	return buttonText === 'Clock in' ? 'Clock out' : 'Clock in';
};
