import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '@containers';
import { Span, Button } from '@atoms';

const AboutPage = () => {
	const router = useRouter();
	return (
		<Page
			title="About iJan"
			heading="About iJan"
			description="[INSERT ABOUT DESCRIPTION]"
		>
			<Span>Have any questions (i.e. pricing, logistics, etc.)</Span>
			<Button
				onClick={(e) => {
					e.preventDefault();
					router.push('/contact');
				}}
			>
				<Button.Label>SHOOT US A MESSAGE</Button.Label>
			</Button>
		</Page>
	);
};
export default AboutPage;
