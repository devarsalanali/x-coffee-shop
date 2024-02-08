import React from 'react'
import { NftCard } from '../elements'

export const PopularNfts = () => {
  return (
    <div className='popular'>
      <div className='container'>
        <h2>Popular</h2>
        <div className='row'>
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </div>
    </div>
  )
}
