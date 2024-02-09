import React from 'react'
import { Input } from '../components/elements/Input'
import { ToggleTab } from '../components/elements/ToggleTab'
import { NftCard } from '../components/elements/NftCard'
import './style.css'

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

export const ExploreNfts = () => {
  return (
    <div className='explore'>
      <div className='container'>
        <h1 className='text-center'>
          Explore <span className='highlight'>NFTs</span>
          <div className='row .p-12 space-between align-stretch'>
            <ToggleTab options={dateOptions} />
            <Input
              type='text'
              name='search-term'
              placeholder='Search items , collections and accounts'
            />
          </div>
          <div className='row .p-12'>
            <div className='col p-12 w-300'>
              <h6>Filter</h6>
              <div className='divider'></div>
            </div>
            <div className='col p-12'>
              <div className='row p-12 .p-12'>
                <NftCard />
                <NftCard />
                <NftCard />
              </div>
              <div className='row p-12 .p-12'>
                <NftCard />
                <NftCard />
                <NftCard />
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  )
}
