import React from 'react'
import { StyledFigure, Img, Figcaption } from './styles'

interface FigProps {
  src: string
  alt: string
  x?: number | string
  y?: number | string
}

const Figure = ({ src, alt, x, y }: FigProps) => {
  return (
    <StyledFigure>
      <Img src={src} alt={alt} width={x} height={y} />
      <Figcaption>&ldquo;{alt}&rdquo;</Figcaption>
    </StyledFigure>
  )
}

export default Figure