import * as React from 'react'
import * as Styled from "./styles"

interface Props {
  children: string
}

const Grid = ({ children }: Props) => {
  return <Styled.Teste> {children} </Styled.Teste>
}

export default Grid
