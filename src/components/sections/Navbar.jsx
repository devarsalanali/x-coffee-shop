import React from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import './style.css'

import { AccountBalanceWalletOutlined, SearchSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export default function Navbar() {
  const connect = () => {
    console.log('Connected')
  }

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='brand'>
          <Link to='/' className='brand__container'>
            <img src={logo} alt='Logo' className='logo' />
            <span>Coffee Shop X</span>
          </Link>
        </div>
        <div className='nav'>
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
        </div>
        <div className='cta'>
          <Button
            label='Connect Wallet'
            variant='outlined'
            icon={<AccountBalanceWalletOutlined />}
            onClick={connect}
          />
        </div>
      </div>
    </div>
  )
}
