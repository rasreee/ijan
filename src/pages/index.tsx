import React from 'react';
import { Page } from '@containers';
import { Image } from '@atoms';
import IconPaths from 'ui/styled/theme/icon-paths';
import { useAuthStore } from '@hooks';
const dev = process.env.NODE_ENV !== 'production';
const IndexPage = () => {
	const store = useAuthStore();

	return (
		<Page title="iJan | Home">
			<Page.Section>
				<Image src={IconPaths.brand} />
				<Page.Description>
					For all your home or commercial cleaning needs .
				</Page.Description>
			</Page.Section>
		</Page>
	);
};

export default IndexPage;
