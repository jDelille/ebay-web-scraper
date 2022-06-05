import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import './Card.scss';
const Card = ({ item, index, loading, gridView }) => {

  // import favs counter from store
  const favs = useSelector((state) => state.favs);

  // import dispatch
  const dispatch = useDispatch();
  // import from action-creators.
  const { updateFavorites } = bindActionCreators(actionCreators, dispatch);

  // store favorites in local storage
  function addFavorite() {
    updateFavorites(favs + 1)
    // get user-favorites
    const favorites = localStorage.getItem('user-favorites')
    // check if available or set an empty array
    const favoritesData = favorites ? JSON.parse(favorites) : [];
    // save new favorites
    localStorage.setItem('user-favorites', JSON.stringify([...favoritesData, item]))
  }

  const { title, image, price, bids, time, condition, shippingCost } = item

  // don't show this image
  let hideImg = 'https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png'
  if (image !== hideImg)
    return (
      <div className={gridView ? 'grid-card' : 'list-card'} key={index}>
        {!loading ? (
          <>
            <div className='img'>
              <img src={image} alt='' />
            </div>
            <div className="info">

              <p className='title'>{title}</p>
              <p className='condition'>{condition}</p>
              <p className="price">{price}</p>
              <p className="bids">{bids} {time}</p>

              <p className="shipping">{shippingCost}</p>
              {/* <button className="favorite" onClick={addFavorite}>Add Favorite</button> */}
            </div></>
        ) : (
          <h1> Loading... </h1>
        )}



      </div>
    )
}

export default Card