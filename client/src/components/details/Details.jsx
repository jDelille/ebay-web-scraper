// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import domain from '../../util/domain';

// const Details = ({ detailUrl }) => {

//  const [data, setData] = useState([]);

//  useEffect(() => {
//   axios.get(`${domain}/details?endpoint=${detailUrl}`)
//    .then((res) => res.json())
//    .then((data) => {
//     setData(data);
//    });
//  }, []);

//  console.log(data)

//  console.log(detailUrl)


//  return (
//   <div>Details</div>
//  )
// }

// export default Details