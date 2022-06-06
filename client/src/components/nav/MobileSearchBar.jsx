import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import './Navbar.scss'
const MobileSearchBar = ({ handleChange, onClick }) => {
 return (
  <div className='mobile-input' id='mobile-input'>
   <div className='m-input-box'>
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

 )
}

export default MobileSearchBar