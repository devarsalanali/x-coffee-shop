import React from 'react'
import { Button } from '../ui'
import { Carousel } from '../layout'

import image1 from '../../assets/images/hero/slide-1.png'
import image2 from '../../assets/images/hero/slide-2.png'
import image3 from '../../assets/images/hero/slide-3.png'

const images = [image1, image2, image3]

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
        <Carousel images={images} />
      </div>
    </div>
  )
}
