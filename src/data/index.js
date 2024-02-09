import image1 from '../assets/images/hero/slide-1.png'
import image2 from '../assets/images/hero/slide-2.png'
import image3 from '../assets/images/hero/slide-3.png'

import { CategoryCard, NftCard } from '../components/elements'

export const images = [image1, image2, image3]

export const trendTopOptions = [
  {
    option: 'Trending',
  },
  {
    option: 'Top',
  },
]

export const dateOptions = [
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

export const popularSlides = [
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
  <NftCard />,
]

export const categorySlides = [
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
  <CategoryCard />,
]
