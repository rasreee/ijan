import Time from '@models/Time';
import TimesService from '@services/TimesService';
import TimesStore from '@stores/TimesStore';
import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction
} from 'mobx';

export default class WeekViewModel {
	clockedIn: boolean;
	times: TimesStore;
	currentTime: Time | null = null;

	constructor({ clockedIn, times }: WeekViewModelProps) {
		this.clockedIn = clockedIn;
		this.times = times;
		this.times.hydrate();
		this.currentTime = times[0];
		makeObservable(this, {
			clockedIn: observable,
			times: false,
			clockIn: action,
			clockOut: action,
			addTime: action,
			replaceTime: action,
			currentTime: observable,
			setCurrentTime: action,
			setClockedIn: action,
			buttonText: computed
		});
	}

	addTime = (time: Time) => {
		const list = this.times.list;
		list.push(time);
		this.times.setList(list);
	};

	replaceTime = (time: Time) => {
		let list = this.times.list;
		list = list.filter((item) => item.id !== time.id);
		list.push(time);
		this.times.setList(list);
	};

	setClockedIn = (val: boolean) => (this.clockedIn = val);

	clockIn = async () => {
		try {
			const userId = this.times.root.authStore.currentUser?.id ?? '';
			const result = await this.times.root.timesService.clockIn(userId);
			if (!result) {
				return;
			}
			runInAction(() => {
				this.addTime(result);
				this.setCurrentTime(result);
				this.setClockedIn(true);
			});
		} catch (e) {
			console.error(e);
		}
	};

	clockOut = async () => {
		if (!this.currentTime) return;
		try {
			const result = await this.times.root.timesService.clockOut(
				this.currentTime
			);
			if (!result) {
				return;
			}
			runInAction(() => {
				this.replaceTime(result);
				this.setClockedIn(false);
				this.setCurrentTime(null);
			});
		} catch (e) {
			console.error(e);
		}
	};

	setCurrentTime = (time: Time | null) => (this.currentTime = time);

	get buttonText(): string {
		return this.clockedIn ? 'CLOCK OUT' : 'CLOCK IN';
	}
}

interface WeekViewModelProps {
	clockedIn: boolean;
	times: TimesStore;
}
