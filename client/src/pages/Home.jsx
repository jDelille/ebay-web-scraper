import React, { useState, useEffect } from 'react';
import domain from '../util/domain';
import Card from '../components/card/Card';
import '../styles/Page.scss';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';



function Home({ searchItem, setSearchItem, gridView }) {
  // store the fetched data here
  const [data, setData] = useState([]);
  // if fetched data is loading set to true
  const [loading, setLoading] = useState(false)

  console.log(data)

  // import favs counter
  const favs = useSelector((state) => state.favs);
  // import maxBid
  const maxBid = useSelector((state) => state.maxBid);

  // import dispatch
  const dispatch = useDispatch();
  // import from action-creators.
  const { setMaxBid } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setLoading(true)
    try {
      fetch(`${domain}/results/${searchItem}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false)
        });
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchItem]);

  // map through the fetched data and store in array arr.
  let arr = [];
  data.map((item) => {
    return item.title !== '' && arr.push(item);
  });

  // get favorites from local storage
  // fav counter, will have useEffect run each time it changes
  const [retrieved, setRetrieved] = useState([])
  useEffect(() => {
    setRetrieved(JSON.parse(localStorage.getItem('user-favorites')));
  }, [favs])

  // get current favs and compare to products on page
  let currentFavs = []
  retrieved?.map((item) => {
    return currentFavs.push(item.title)
  })

  // get the highest bid and the highest priced item
  let maxBidsArray = []
  data.map((item) => {
    return maxBidsArray.push(parseInt(item.bids.substring(0, 2)))
  })
  // only set max bid if it is true
  if (maxBidsArray[1]) setMaxBid(maxBidsArray[1])

  return (
    <div className="home">
      <div className={gridView ? "grid-card-container" : 'list-card-container'} >
        {
          arr?.map((item, index) => {
            return <Card item={item} index={index} key={index} gridView={gridView} currentFavs={currentFavs} retrieved={retrieved} />;
          })
        }
      </div>
    </div >
  )

}

export default Home;