import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Favorites.scss';
const Favorites = ({ expand, retrieved, removeFavorite }) => {
	return (
		<div className={expand ? 'favorites' : 'hide'}>
			{retrieved?.map((item, index) => {
				return (
					<div className='favorite-card'>
						<div className='img-wrapper'>
							<img src={item.image} alt='' />
						</div>
						<div className='text'>
							<p> {item.title} </p>
							<div className='price'>
								<p>{item.price}</p>
							</div>
							<div className='bids'>
								<p>{item.bids}</p>
							</div>
						</div>
						<div className='remove'>
							<AiOutlineClose
								className='remove-icon'
								onClick={() => removeFavorite(index)}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Favorites;
