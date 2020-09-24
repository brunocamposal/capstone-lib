import * as React from 'react'
import { StyledCheckbox } from './styles'

interface Props {
  label: string
  value?: string
  checked?: boolean
  onClick?: () => void
}

const Checkbox = ({ label, value, checked, onClick }: Props) => {
  return (
    <label htmlFor={label}>
      <StyledCheckbox
        type='checkbox'
        className='caps-lib-checkbox'
        name={label}
        value={value}
        onClick={onClick}
        checked={checked}
      />
      {label}
    </label>
  )
}

export default Checkbox
