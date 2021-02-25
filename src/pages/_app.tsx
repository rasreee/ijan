import { AuthStoreProvider, FirebaseProvider } from '@contexts';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, tokens } from 'ui/styled/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<ThemeProvider theme={tokens}>
				<GlobalStyle />
				<FirebaseProvider>
					<AuthStoreProvider>
						<Component {...pageProps} />
					</AuthStoreProvider>
				</FirebaseProvider>
			</ThemeProvider>
		</React.StrictMode>
	);
}
