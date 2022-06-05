import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Themes.js';
const Router = () => {
	const [theme, setTheme] = useState(false);

	// STYLED COMPONENT
	const StyledApp = styled.div``;

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Navbar theme={theme} setTheme={setTheme} />
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
