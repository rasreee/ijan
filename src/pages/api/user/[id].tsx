import { client } from '@configs';
import { mapToUser } from '@utils';
import { NextApiRequest, NextApiResponse } from 'next';

export async function userHandler(
	{ query }: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = query;
	if (typeof id !== 'string') {
		return res.status(400).send({ message: 'Passed in invalid userId' });
	}
	try {
		const snapshot = await client
			.firestore()
			.collection('users')
			.doc(id)
			.get();
		if (!snapshot.exists) {
			return res.status(400).send({
				message: 'Returned invalid document for userId=' + id
			});
		}
		const data = await snapshot.data();
		const user: User = mapToUser(data, id);
		return res.status(200).send(user);
	} catch (err) {
		console.error(err);
		return res.status(400).send({ message: `${err}` });
	}
}
