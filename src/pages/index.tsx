import React from 'react';
import { Page } from '@containers';
import { Button, Image, Spacing } from '@atoms';
import IconPaths from 'ui/styled/theme/icon-paths';
import { useAuthStore } from '@hooks';
import { useRouter } from 'next/router';
const dev = process.env.NODE_ENV !== 'production';
const IndexPage = () => {
	const { currentUser } = useAuthStore();
	const { push } = useRouter();

	return (
		<Page title="iJan | Home">
			<Page.Section>
				<Image src={IconPaths.brand} />
				<Page.Description>
					For all your home or commercial cleaning needs .
				</Page.Description>
				<Spacing height={44} />
				{currentUser && (
					<Button
						text="Return to Portal"
						primary
						onClick={(e) => {
							push('/home');
						}}
					/>
				)}
			</Page.Section>
		</Page>
	);
};

export default IndexPage;
