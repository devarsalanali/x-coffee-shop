import React from 'react'
import Hero from '../components/sections/Hero'
import TrendingNfts from '../components/sections/TrendingNfts'
import PopularNfts from '../components/sections/PopularNfts'
import Categories from '../components/sections/Categories'
import './style.css'

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
