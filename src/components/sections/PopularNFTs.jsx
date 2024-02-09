import React from 'react'
import { Slider } from '../elements/Slider'
import { NftCard } from '../elements/NftCard'
import './style.css'

export const popularSlides = [
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
]

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
