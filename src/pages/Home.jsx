import React from 'react'
import {
  Categories,
  Hero,
  PopularNfts,
  TrendingNfts,
} from '../components/sections'

export const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <TrendingNfts />
      <PopularNfts />
      <Categories />
    </div>
  )
}
