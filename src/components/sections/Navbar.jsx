import React, { useState } from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import './style.css'

import { AccountBalanceWalletOutlined, SearchSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const connect = () => {
    console.log('Connected')
  }

  return (
    <header className='navbar'>
      <nav className='navbar-container'>
        <div className='brand'>
          <Link to='/' className='brand__container'>
            <img src={logo} alt='Logo' className='logo' />
            <span>CoffeeShopX</span>
          </Link>
        </div>
        <button
          className='toggle'
          type='button'
          aria-controls='navbar-default'
          onClick={toggleOpen}
        >
          {/* <span className='sr-only'>Open main menu</span> */}
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        <div id='navbar-default' className={` nav ${!isOpen ? 'hidden' : ''} `}>
          <Link to='/explore' className='nav__Item'>
            Explore
          </Link>
          <Link to='/create' className='nav__Item'>
            Create
          </Link>
          <Input
            type='text'
            name='search-term'
            placeholder='Search items , collections and accounts'
            id='search'
            icon={<SearchSharp />}
            onChange={connect}
          />
          <div className='cta'>
            <Button
              label='Connect Wallet'
              variant='outlined'
              icon={<AccountBalanceWalletOutlined />}
              onClick={connect}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
