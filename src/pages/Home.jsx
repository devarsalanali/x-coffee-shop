import React from 'react'
import {
  Categories,
  Hero,
  PopularNFTs,
  TrendingNFTs,
} from '../components/sections'

export const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <TrendingNFTs />
      <PopularNFTs />
      <Categories />
    </div>
  )
}
