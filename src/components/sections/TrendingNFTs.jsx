import React from 'react'
import TrendingTable from '../elements/TrendingTable'
import Button from '../elements/Button'
import ToggleTab from '../elements/ToggleTab'
import './style.css'

const trendTopOptions = [
  {
    option: 'Trending',
  },
  {
    option: 'Top',
  },
]
const dateOptions = [
  {
    option: '24 hrs',
  },
  {
    option: '3 days',
  },
  {
    option: '1 week',
  },
  {
    option: 'All time',
  },
]

export default function TrendingNfts() {
  return (
    <div className='trending'>
      <div className='container'>
        <h2>
          Trending <span className='highlight'>NFTs</span>
        </h2>
        <div className='row space-between justify-center'>
          <ToggleTab options={trendTopOptions} />
          <ToggleTab options={dateOptions} />
          <Button label='View All' variant='outlined' />
        </div>

        <div className='row table-row'>
          <TrendingTable />
          <TrendingTable />
        </div>
      </div>
    </div>
  )
}
