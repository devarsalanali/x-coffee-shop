import React from 'react'
import Divider from '../elements/Divider'
import SocialIcons from '../elements/SocialIcons'
import './style.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container col'>
        <Divider />
        <div className='row space-between'>
          <div className='info col flex-grow'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet dapibus massa mauris
              sollicitudin sed viverra. Eu pulvinar aliquet ut dictum enim
              convallis quam. Enim ipsum.
            </p>
          </div>
          <div className='footer-nav col '>
            <h3>Marketplace</h3>
            <ul className='footer-menu'>
              <li className='footer-menu-item'>Home</li>
              <li className='footer-menu-item'>Explore</li>
              <li className='footer-menu-item'>Collection</li>
            </ul>
          </div>
          <div className='footer-nav col'>
            <h3>Resource</h3>
            <ul className='footer-menu'>
              <li className='footer-menu-item'>About</li>
              <li className='footer-menu-item'>FAQs</li>
              <li className='footer-menu-item'>Blog</li>
            </ul>
          </div>
          <div className='footer-nav col'>
            <h3>Explore</h3>
            <ul className='footer-menu'>
              <li className='footer-menu-item'>NFT</li>
              <li className='footer-menu-item'>Collections</li>
              <li className='footer-menu-item'>Hot Bids</li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className='row space-between'>
          <div className='footer-copyrights'>
            <p>Copyright 2023 Coffee Shop X</p>
          </div>
          <div className='footer-social'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
