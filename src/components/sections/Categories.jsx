import React from 'react'
import { CategoryCard, Slider } from '../elements'
import { categorySlides } from '../../data'
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
