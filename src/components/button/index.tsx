import * as React from 'react'
import * as Styled from './styles'

interface Props {
  children: string
  onClick?: () => void
  color?: string
}

const Button = ({ children, onClick, color}: Props) => {
  return <Styled.Button color={color} onClick={onClick}> {children} </Styled.Button>
}

export default Button
