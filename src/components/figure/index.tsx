import React from 'react'
import { StyledFigure, Img, Figcaption } from './styles'

interface FigProps {
  src: string
  alt: string
  x?: number | string
  y?: number | string
}

// const Figure = ({ src, alt, x, y }: FigProps) => {
//   const maxWidth: string = x + 'px'
//   const maxHeight: string = y + 'px'

  const Figure = ({ src, alt, x = '100%', y = '100%' }: FigProps) => {
  const maxWidth: string = x ? x + 'px' : '100%'
  const maxHeight: number | string = y ? y + 'px' : '100%'
    
  const style = { maxWidth, maxHeight }
  return (
    <Div>
      <StyledFigure>
        <Img src={src} alt={alt} {{x || y} && style={style}} />
        <Figcaption>&ldquo;{alt}&rdquo;</Figcaption>
      </StyledFigure>
    </Div>
  )
}

export default Figure
