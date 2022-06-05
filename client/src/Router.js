import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Themes.js';
const Router = () => {
	const [theme, setTheme] = useState(false);
	const [searchItem, setSearchItem] = useState('fender+stratocaster');
	// card view (grid or list view)
	const [gridView, setGridView] = useState(false);
	// STYLED COMPONENT
	const StyledApp = styled.div``;

	return (
		<BrowserRouter>
			<ThemeProvider theme={!theme ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Navbar
					theme={theme}
					setTheme={setTheme}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					gridView={gridView}
					setGridView={setGridView}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								setSearchItem={setSearchItem}
								searchItem={searchItem}
								gridView={gridView}
							/>
						}></Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
