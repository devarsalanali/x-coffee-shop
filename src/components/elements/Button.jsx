import React from 'react'
import './style.css'

export const Button = ({ label, variant, icon, onClick, disabled }) => {
  const buttonTypes = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    outlined: 'btn-outlined',
  }

  const buttonIcon = icon ? ( // Render the icon if provided
    <span className='button-icon'>{icon}</span>
  ) : null

  const buttonText = label // Render the text if provided

  return (
    <button
      className={`button ${buttonTypes[variant]} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
      {buttonIcon}
    </button>
  )
}
