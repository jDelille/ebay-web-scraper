import React, { useState, useEffect } from 'react';
import domain from '../util/domain';
import Card from '../components/card/Card';
import '../styles/Page.scss';
import { useSelector } from 'react-redux';



function Home({ searchItem, setSearchItem, gridView }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  // import favs counter from store
  const favs = useSelector((state) => state.favs);

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

  return (
    <div className="home">
      <div className={gridView ? "grid-card-container" : 'list-card-container'} >
        {
          arr.map((item, index) => {
            return <Card item={item} index={index} key={index} gridView={gridView} />;
          })
        }
      </div>
    </div >
  )

}

export default Home;