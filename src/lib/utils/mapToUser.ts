export function mapToUser(data: any, id: string): User {
	return {
		id,
		firstName: data.firstName ?? '',
		lastName: data.lastName ?? '',
		createdAt: data.createdAt ?? -1,
		lastActive: data.lastActive ?? -1,
		phoneNumber: data.phoneNumber ?? ''
	};
}
