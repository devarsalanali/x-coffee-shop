import React from 'react'
import './style.css'

export const Input = ({
  type,
  name,
  placeholder,
  value,
  id,
  onChange,
  icon,
}) => {
  const inputIcon = icon // Render the icon if provided
    ? icon
    : null

  return (
    <div className='input'>
      {inputIcon}
      <input
        className='input-field'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  )
}
