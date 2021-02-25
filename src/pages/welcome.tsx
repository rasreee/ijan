import { Form, Page } from '@containers';
import { useAuthStore, useUserService } from '@hooks';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';

const initialState = {
	firstName: '',
	lastName: '',
	phoneNumber: ''
};

const WelcomePage = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const authStore = useAuthStore();
	const { updateUser } = useUserService();

	const router = useRouter();

	if (!authStore.currentUser) {
		router.push('/');
		return null;
	}

	const id = authStore.currentUser.id;

	const updateState: InputChangeEventHandler = ({ name, value }) => {
		setState((current) => ({ ...current, [name]: value }));
	};

	const checkIsValid = () => {
		return state.firstName && state.lastName && state.phoneNumber;
	};

	const trySubmit = async () => {
		setLoading(true);
		const isValid = checkIsValid();
		if (!isValid) {
			setLoading(false);
			return setState((current) => ({
				...current,
				error: 'Please enter all fields.'
			}));
		}
		try {
			await updateUser({
				...state,
				id
			});
			router.push('/home');
		} catch (error) {
			console.error('Error on trySubmitRegister: ', error);
			setLoading(true);
			setState((current) => ({
				...current,
				error: error.message
			}));
		}
	};

	return (
		<Page
			title="Welcome"
			heading="Welcome!"
			description="Almost done getting set up - fill out the following and then you're done."
		>
			<Page.Section>
				<Form.Input
					name="firstName"
					label="First Name"
					onChange={updateState}
					value={state.firstName}
					required
				/>
				<Form.Input
					name="lastName"
					label="Last Name"
					onChange={updateState}
					value={state.lastName}
					required
				/>
				<Form.Input
					name="phoneNumber"
					label="Phone Number"
					onChange={updateState}
					value={state.phoneNumber}
					required
				/>
				<Form.Button onClick={trySubmit} isLoading={loading}>
					submit
				</Form.Button>
			</Page.Section>
		</Page>
	);
};

export default WelcomePage;
