import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a, button, input {
		transition: all 0.3s ease-in-out;
	}
`;