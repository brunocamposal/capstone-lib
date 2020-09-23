import * as React from 'react'
import * as Styled from './styles'

interface ColProps {
  children: string
  width: number
  backgroundColor: string
}

const Col = ({ children, width, backgroundColor }: ColProps) => {
  return (
    <Styled.Col width={width} backgroundColor={backgroundColor}>
      {children}
    </Styled.Col>
  )
}

export default Col
