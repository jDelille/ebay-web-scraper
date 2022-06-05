import React, { useState, useEffect } from 'react';
import domain from '../util/domain';
import Card from '../components/card/Card';
import '../styles/Page.scss';
import { useSelector } from 'react-redux';



function Home() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState('')
  const [searchItem, setSearchItem] = useState('xbox')
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

  const handleChange = (e) => {
    // covert user input to lowercase
    let lowerCase = e.target.value.toLowerCase();
    // replace spaces in input with "+"
    let noSpaces = lowerCase.replace(/ /g, "+")
    setItem(noSpaces)
  }

  // set the search item on click
  const onClick = (e) => {
    e.preventDefault();
    console.log(item)
    setSearchItem(item)
  };

  // get favorites from local storage
  // fav counter, will have useEffect run each time it changes
  const [fav, setFav] = useState(0)
  const [retrieved, setRetrieved] = useState([])
  useEffect(() => {
    setRetrieved(JSON.parse(localStorage.getItem('user-favorites')));
  }, [favs])


  // remove favorite from local storage
  function removeFavorite(index) {
    setFav(fav - 1)
    retrieved.splice(index, 1)
    localStorage.setItem('user-favorites', JSON.stringify(retrieved))
  }

  // have search bar animate to the navbar on scroll 


  return (
    <div className="home">
      <div className="search-container">
        <p> Search for any item and see what its being sold for</p>
        <div className="input">
          <input type="text" onChange={handleChange} />
          <button onClick={onClick}>Search</button>
        </div>
      </div>
      <div className="card-container">
        {arr.map((item, index) => {
          return <Card item={item} index={index} key={index} setFav={setFav} fav={fav} />;
        })}
      </div>
    </div>
  )

}

export default Home;