import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './style.css'

export const ToggleTab = ({ options }) => {
  const [value, setValue] = React.useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        className='tab'
        value={value}
        onChange={handleChange}
        aria-label='wrapped label tabs example'
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
      >
        {options.map((option, index) => (
          <Tab value={index} label={option.option} wrapped />
        ))}
      </Tabs>
    </Box>
  )
}
