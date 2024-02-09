import React from 'react'
import { Slider } from '../elements'
import { popularSlides } from '../../data'
export const PopularNfts = () => {
  return (
    <div className='popular'>
      <div className='container'>
        <h2>Popular</h2>
        <div className='row'>
          <Slider slides={popularSlides} />
        </div>
      </div>
    </div>
  )
}
