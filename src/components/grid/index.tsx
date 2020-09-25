import * as React from 'react'
import * as Styled from './styles'

interface GridProps {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return <Styled.Grid> {children} </Styled.Grid>
}

export default Grid
