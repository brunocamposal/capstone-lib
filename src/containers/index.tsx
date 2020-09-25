import React, { useState } from 'react'
import Checkbox from '../components/checkbox'

const CheckedAction = () => {
  const [checked, setChecked] = useState(false)
  const handleOnClick = () => setChecked(!checked)

  return <Checkbox onClick={handleOnClick} label='' checked={checked} />
}

export default CheckedAction
