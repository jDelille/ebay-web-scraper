import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	background: '#F9F9F9',
	card: '#ECECEE',
	font: '#424246',
	input: '#FFFFFF',
	favorites: '#FFFFFF',
	boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
};

export const darkTheme = {
	background: '#16171B',
	card: '#222327',
	font: '#E9E9E9',
	input: '#27272A',
	favorites: '#121216',
	boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px',
};

export const GlobalStyles = createGlobalStyle`
.App,
 nav,
.home
	 {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.font};
 }
	nav {
		box-shadow: ${(props) => props.theme.boxShadow}
	}
	.grid-card,
	.list-card,
	.search-container,
	.favorite-card
	 {
  background-color: ${(props) => props.theme.card};
  color: ${(props) => props.theme.font};
 }
	form,
	input {
	 background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.font};
	}
	.favorites {
		background-color: ${(props) => props.theme.favorites};
	}

`;
