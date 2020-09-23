import * as React from 'react'
import { StyledFigure, Img, Figcaption } from './styles'

interface FigProps {
  src: string
  alt: string
  x?: number | string
  y?: number | string
}

const Figure = ({ src, alt, x, y }: FigProps) => {
  const maxWidth: string = x ? x + 'px' : '100%'
  const maxHeight: number | string = y ? y + 'px' : '100%'
  const style = { maxWidth, maxHeight }
  return (
    <StyledFigure>
      <Img src={src} alt={alt} style={style} />
      <Figcaption>&ldquo;{alt}&rdquo;</Figcaption>
    </StyledFigure>
  )
}

export default Figure
