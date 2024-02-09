import React from 'react'
import { Button } from '../elements/Button'
import { Carousel } from '../elements/Carousel'
import './style.css'

export const Hero = () => {
  const handleClick = () => {}
  return (
    <div className='hero'>
      <div className='container row align-center'>
        <div className='col justify-center flex-grow'>
          <h1>
            Discover
            <br />
            and Trade
            <br />
            <span className='highlight'>NFTs</span>
          </h1>
          <h6>
            Where art meets commerce, bidding for the elite. <br />
            Apply, bid, conquer your NFT auction awaits.
          </h6>
          <div className='row'>
            <Button
              label='Create NFT'
              variant='primary'
              onClick={handleClick}
            />
            <Button
              label='Explore NFTs'
              variant='outlined'
              onClick={handleClick}
            />
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  )
}
