import React from 'react'
import './style.css'

import Categories from '../components/sections/Categories'
import TrendingNfts from '../components/sections/TrendingNfts'
import PopularNfts from '../components/sections/PopularNfts'
import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <TrendingNfts />
      <PopularNfts />
      <Categories />
    </div>
  )
}
