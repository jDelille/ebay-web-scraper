import React from 'react';
import './Favorites.scss';
const Favorites = ({ expand, retrieved, removeFavorite }) => {
	return (
		<div className={expand ? 'favorites' : 'hide'}>
			Favorites
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
						</div>
						<div className='remove'>
							<p onClick={() => removeFavorite(index)}> X </p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Favorites;
