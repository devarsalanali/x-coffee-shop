import React from 'react'
import { Slider } from '../elements/Slider'
import { CategoryCard } from '../elements/CategoryCard'
import './style.css'

export const categorySlides = [
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
]

export const Categories = () => {
  return (
    <div className='categories'>
      <div className='container'>
        <h2>
          Explore <span className='highlight'>Categories</span>
        </h2>
        <div className='row'>
          <Slider slides={categorySlides} />
        </div>
      </div>
    </div>
  )
}
