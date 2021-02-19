import Head from 'next/head';
import React from 'react';
import { Header, Footer } from '@components';

import {
	Container,
	Heading,
	Description,
	Body,
	Section,
	SectionTitle
} from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	heading?: string;
	description?: string;
	children?: any;
}

export default function Page({
	title,
	heading,
	description = '',
	children,
	...props
}: Props) {
	return (
		<Container {...props}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Header />
			<Body>
				<Heading>{heading}</Heading>
				<Description>{description}</Description>
				{children}
			</Body>
			<Footer />
		</Container>
	);
}
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: any;
	title?: string;
}
Page.Section = function ({ title, children, ...props }: SectionProps) {
	return (
		<Section {...props}>
			<SectionTitle>{title}</SectionTitle>
			<>{children}</>
		</Section>
	);
};

Page.Heading = function ({ children, ...props }: BaseComponentProps) {
	return <Heading {...props}>{children}</Heading>;
};

Page.Description = function ({ children, ...props }: BaseComponentProps) {
	return <Description {...props}>{children}</Description>;
};
