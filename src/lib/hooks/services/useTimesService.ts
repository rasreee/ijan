import { useCollection } from '@hooks';
import useFirestore from '@hooks/useFirestore';
import TimesService from '@services/TimesService';

export default function useTimesService(): TimesService {
	const collection = useCollection('times');
	return new TimesService(collection);
}
