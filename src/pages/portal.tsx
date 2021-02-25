import React, { useState } from 'react';
import { Spacing } from '@atoms';
import { Form, Page } from '@containers';
import { RowCentered } from '@bases';
import { ToggleButton } from '@molecules';
import { Auth, Emails } from '@services';
import { useRouter } from 'next/router';

type State = {
	email: string;
	password: string;
	confirmPassword: string;
	isLoading: boolean;
	error: string;
};

const initialState: State = {
	email: '',
	password: '',
	confirmPassword: '',
	isLoading: false,
	error: ''
};

const PortalPage = () => {
	const router = useRouter();
	const [isLogin, setShowLogin] = useState(true);
	const [state, setState] = useState<State>(initialState);

	const trySubmitLogin = async () => {
		console.log('trySubmitLogin: ', state);
		setState((current) => ({ ...current, isLoading: true }));
		try {
			await Auth.login(state.email, state.password);
			router.push('/home');
		} catch (error) {
			console.error('Error on trySubmitLogin: ', error);
			setState((current) => ({
				...current,
				isLoading: false,
				error: error.message
			}));
		}
	};

	const checkIsValid = (): boolean => {
		const { email, password, confirmPassword } = state;
		if (isLogin) return email.length > 0 && password.length > 0;
		else
			return (
				email.length > 0 &&
				password.length > 0 &&
				confirmPassword.length > 0 &&
				password === confirmPassword
			);
	};

	const trySubmitRegister = async () => {
		console.log('trySubmitRegister: ', state);
		const isValid = checkIsValid();
		if (!isValid) {
			return setState((current) => ({
				...current,
				error: 'Please enter a valid email and passwords'
			}));
		}
		setState((current) => ({ ...current, isLoading: true }));

		const exists = await Emails.checkExists(state.email);
		if (!exists) {
			return setState((current) => ({
				...current,
				error:
					'This email address is unauthorized to register for an account. Please send an email to lesley.hanna98@gmail.com detailing your issue.'
			}));
		}

		try {
			await Auth.register(state.email, state.password);
			router.push('/home');
		} catch (error) {
			console.error('Error on trySubmitRegister: ', error);
			setState((current) => ({
				...current,
				isLoading: false,
				error: error.message
			}));
		}
	};

	const toggle = () => setShowLogin(!isLogin);

	const updateState: InputChangeEventHandler = ({ name, value }) => {
		setState((current) => ({ ...current, [name]: value }));
	};

	return (
		<Page
			title="Portal"
			heading="Portal (Employees Only)"
			description="If you've finished onboarding and already registered your account, you can go ahead and login with your email and password. Otherwise, you can register for an account."
		>
			<RowCentered>
				<ToggleButton
					label="Login"
					onToggle={toggle}
					disabled={!isLogin}
				/>
				<Spacing width={24} />
				<ToggleButton
					label="Register"
					onToggle={toggle}
					disabled={isLogin}
				/>
			</RowCentered>

			{isLogin && (
				<Page.Section>
					<Form error={state.error}>
						<Form.Input
							name="email"
							label="Email"
							onChange={updateState}
							value={state.email}
							required
						/>
						<Form.Input
							name="password"
							label="Password"
							onChange={updateState}
							value={state.password}
							required
						/>
						<Form.Button
							onClick={(e) => {
								e.preventDefault();
								trySubmitLogin();
							}}
							isLoading={state.isLoading}
						>
							submit
						</Form.Button>
					</Form>
				</Page.Section>
			)}
			{!isLogin && (
				<Page.Section>
					<Form error={state.error}>
						<Form.Input
							name="email"
							label="Email"
							onChange={updateState}
							value={state.email}
							required
						/>
						<Form.Input
							name="password"
							label="Password"
							onChange={updateState}
							value={state.password}
							required
						/>
						<Form.Input
							name="confirmPassword"
							label="Confirm Password"
							onChange={updateState}
							value={state.confirmPassword}
							required
						/>
						<Form.Button
							onClick={(e) => {
								e.preventDefault();
								trySubmitRegister();
							}}
							isLoading={state.isLoading}
						>
							submit
						</Form.Button>
					</Form>
				</Page.Section>
			)}
		</Page>
	);
};

export default PortalPage;
