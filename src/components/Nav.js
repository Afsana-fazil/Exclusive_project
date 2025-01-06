import React, { useState } from 'react';
import './Nav.css';

function Nav({ setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const toggleSearchInput = () => {
    setSearchVisible(!searchVisible); 
  };

  return (
    <>
      <div className='container'>
        <div className='shop wrapper'>
          <div className='sale'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <button>ShopNow</button>
          </div>
          <form>
            <select>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
            </select>
          </form>
        </div>
      </div>

      <div className='main'>
        <div className='nav wrapper'>
          <h1 className='left'>Exclusive</h1>

          <div className='menu'>
            <button className='menu-toggle' onClick={toggleMenu}>
              ☰
            </button>

            <ul className={`middle ${menuOpen ? 'show' : ''}`}>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Sign Up</a></li>
            </ul>
          </div>

          <div className='right'>
            <div className='search'>
              <input
                type='text'
                placeholder='What are you looking for?'
                onChange={handleSearchChange}
                className={searchVisible ? 'show' : 'hide'} 
              />
              <img
                src='/assets/Component 2.png'
                alt='search'
                onClick={toggleSearchInput} 
                className='search-icon'
              />
            </div>
            <ul>
              <li><a href='#'><img src='/assets/wishlist.png' /></a></li>
              <li><a href='#'><img src='/assets/cart-icon.webp' /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
