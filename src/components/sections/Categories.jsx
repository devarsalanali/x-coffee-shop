import React from 'react'
import { CategoryCard } from '../elements'

export const Categories = () => {
  return (
    <div className='categories'>
      <div className='container'>
        <h2>
          Explore <span className='highlight'>Categories</span>
        </h2>
        <div className='row'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  )
}
