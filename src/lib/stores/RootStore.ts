import TimesService from '@services/TimesService';
import { AuthStore } from '@stores';
import TimesStore from './TimesStore';
type Props = {
	timesService: TimesService;
};
export default class RootStore {
	timesService: TimesService;
	authStore: AuthStore;
	times: TimesStore;
	constructor({ timesService }: Props) {
		this.timesService = timesService;
		this.authStore = new AuthStore(this);
		this.times = new TimesStore(this);
	}
}
