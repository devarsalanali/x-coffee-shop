import React from 'react'
import sampleCategoryImage from '../../assets/images/sample-category.png'
import './style.css'

export const CategoryCard = () => {
  return (
    <div className='col category-card'>
      <img
        src={sampleCategoryImage}
        alt='nft-category'
        className='category-card__Image'
      />
      <h3 className='category-card__Title'>Item Name</h3>
    </div>
  )
}
