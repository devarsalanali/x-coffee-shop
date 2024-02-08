import React from 'react'
import { Table } from '../elements'

export const TrendingNfts = () => {
  return (
    <div className='trending'>
      <div className='container'>
        <h2>
          Trending <span className='highlight'>NFTs</span>
        </h2>
        <Table />
      </div>
    </div>
  )
}
