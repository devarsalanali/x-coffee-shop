import React from 'react'
import { Button, ToggleTab, TrendingTable } from '../elements'
import { trendTopOptions, dateOptions } from '../../data'
export const TrendingNfts = () => {
  return (
    <div className='trending'>
      <div className='container'>
        <h2>
          Trending <span className='highlight'>NFTs</span>
        </h2>
        <div className='row space-between'>
          <div>
            <ToggleTab options={trendTopOptions} />
          </div>
          <div>
            <div className='row'>
              <ToggleTab options={dateOptions} />
              <Button label='View All' variant='primary' />
            </div>
          </div>
        </div>

        <div className='row'>
          <TrendingTable />
          <TrendingTable />
        </div>
      </div>
    </div>
  )
}
