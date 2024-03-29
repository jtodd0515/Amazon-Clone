import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  />

        <div className='header__search'>
            <input className='header_searchInput' type='text' />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header__nav'>
          <div className='header_option'>
            <span className='header__optionLineOne'>
              Hello
            </span>
            <span className='header__optionLineTwo'>
              Sign In
            </span>
          </div>

          <div className='header_option'>
            <span className='header__optionLineOne'>
              Returns
            </span>
            <span className='header__optionLineTwo'>
              & Orders
            </span>
          </div>

          <div className='header_option'>
            <span className='header__optionLineOne'>
              Your
            </span>
            <span className='header__optionLineTwo'>
              Prime
            </span>
          </div>

          <div className='header_optionCart'>
            <ShoppingCart />
            <span className='header__optionLineTwo header__cartCount'>
              0
            </span>
          </div>

        </div>
    </div>
  )
}

export default Header
