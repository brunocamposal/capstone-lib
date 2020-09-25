import * as React from 'react'

interface InputProps {
  id?: string
  type: string
  value?: string
  placeholder?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  id,
  value,
  type,
  placeholder,
  name,
  onChange
}: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  )
}

export default Input
