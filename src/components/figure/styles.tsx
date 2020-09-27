import styled from 'styled-components'

interface ImgProps {
  x?: number | string
  y?: number | string
}

export const StyledFigure = styled.figure`
  padding: 8px;
  border-radius: 6px;
  background: #888;
  display: inline-grid;
  place-items: center;
`

export const Img = styled.img<ImgProps>`
  padding: 4px;
  border: 1px solid gray;
  background: white;
  margin-bottom: 4px;
  width<: ${(props) => props.x ? props.x + 'px' : '100%' };
  height<: ${(props) => props.y ? props.y + 'px' : '100%' };
`

export const Figcaption = styled.figcaption`
  color: white;
  font-size: 0.8rem;
`