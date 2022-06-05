import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { CgDarkMode } from 'react-icons/cg';
import './Navbar.scss';
import Favorites from '../favorites/Favorites';

const Navbar = ({ setTheme, theme }) => {
	const [expand, setExpand] = useState(false);

	// import favs counter from store
	const favs = useSelector((state) => state.favs);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateFavorites } = bindActionCreators(actionCreators, dispatch);

	// get favorites from local storage
	const [retrieved, setRetrieved] = useState([]);
	useEffect(() => {
		setRetrieved(JSON.parse(localStorage.getItem('user-favorites')));
	}, [expand, favs]);

	// remove favorite from local storage
	function removeFavorite(index) {
		updateFavorites(favs - 1);
		retrieved.splice(index, 1);
		localStorage.setItem('user-favorites', JSON.stringify(retrieved));
	}

	return (
		<nav>
			<div className='logo'> Ebay Scraper </div>
			<div className='links'>
				<div className="link"></div>
			</div>
			<div className='user-controls'>
				<CgDarkMode onClick={() => setTheme(!theme)} />
				<div className='toggle-expand' onClick={() => setExpand(!expand)}>
					Expand
				</div>
				{/* favorites dropdown */}
				<Favorites
					retrieved={retrieved}
					expand={expand}
					removeFavorite={removeFavorite}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
