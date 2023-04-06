import React, { useState } from 'react'
import FormDrawer from '../../FormDrawer/FormDrawer'

const SettingsProvider = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () =>  setIsOpen(prev => !prev)
  return (
    <div>
      <button onClick={toggleDrawer} >open</button>
     <FormDrawer {...{isOpen, toggleDrawer}} />
    </div>
  )
}

export default SettingsProvider
