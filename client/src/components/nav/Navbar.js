import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { CgDarkMode } from 'react-icons/cg';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import './Navbar.scss';
import Favorites from '../favorites/Favorites';
import MobileSearchBar from './MobileSearchBar';

const Navbar = ({ setTheme, theme, setSearchItem, setGridView, gridView }) => {
	// favorites dropdown state
	const [expand, setExpand] = useState(false);
	// search bar state
	const [item, setItem] = useState('');

	// import favs counter from store
	const favs = useSelector((state) => state.favs);
	// import maxBid
	const maxBid = useSelector((state) => state.maxBid);

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

	const handleChange = (e) => {
		// covert user input to lowercase
		let lowerCase = e.target.value.toLowerCase();
		// replace spaces in input with "+"
		let noSpaces = lowerCase.replace(/ /g, '+');
		setItem(noSpaces);
	};

	// set the search item on click
	const onClick = (e) => {
		e.preventDefault();
		console.log(item);
		setSearchItem(item);
	};

	// have search bar animate to the navbar on scroll
	window.onscroll = function () {
		if (window.pageYOffset > 0) {
			document.querySelector('#input').classList.add('scrolled');
			document.querySelector('#input').classList.remove('scrolled-2');
			document.querySelector('.categories').classList.add('hide');
			document.querySelector('.max-bid').classList.remove('invisible');
		} else {
			document.querySelector('#input').classList.add('scrolled-2');
			document.querySelector('#input').classList.remove('scrolled');
			document.querySelector('.categories').classList.remove('hide');
			document.querySelector('.max-bid').classList.add('invisible');
		}
	};

	return (
		<nav>
			<div className='logo'> Sellable </div>
			<div className='links'>
				<MobileSearchBar
					handleChange={handleChange}
					onClick={onClick}
					retrieved={retrieved}
					removeFavorite={removeFavorite}
				/>
				<div className='input' id='input'>
					<div className='input-box'>
						<form>
							<input
								type='text'
								onChange={handleChange}
								placeholder='Search for an item...'
							/>
							<button type='submit' onClick={onClick}>
								<AiOutlineSearch />
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className='user-controls'>
				<BsGrid3X3GapFill
					onClick={() => setGridView(!gridView)}
					className='toggle-view'
				/>
				<CgDarkMode onClick={() => setTheme(!theme)} />
				<MdFavorite onClick={() => setExpand(!expand)} />
				{/* favorites dropdown */}
				<Favorites
					retrieved={retrieved}
					expand={expand}
					removeFavorite={removeFavorite}
				/>
			</div>
			<div className='m-user-controls'>
				<CgDarkMode onClick={() => setTheme(!theme)} />
				<MdFavorite onClick={() => setExpand(!expand)} />
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
