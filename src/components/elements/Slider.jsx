import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './style.css'

export default function Slider({ slides }) {
  const [width, setWidth] = useState()
  const slider = useRef()

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
  }, [])
  return (
    <motion.div ref={slider} className='slider' whileTap='grabbing'>
      <motion.div
        className='inner-slider'
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
      >
        {slides?.map((slide, index) => {
          return (
            <motion.div key={index} className='slider__Item'>
              {slide}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
