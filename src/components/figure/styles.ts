import styled from 'styled-components'

export const Div = styled.div`
  box-sizing: content-box;
  display: inline-box;
  white-space: nowrap;
  margin: 1px;
  width: x;
  height: y;
`
export const StyledFigure = styled.figure`
  box-sizing: content-box;
  flex: 1;
  border: 1px solid #666;
  border-radius: 6px;
  background: #aaa;
  display: grid;
  justify-items: center;
  width: x;
  height: y;
`
export const Img = styled.img`
  box-sizing: border-box;
  padding: 4px;
  display: block;
  border: 8px solid;
  border-top: blue;
  border-left: blue;
  border-bottom: yellow;
  border-right: yellow;
  background: white;
  max-width: x;
  max-height: y;
  margin-bottom: 4px;
`
export const Figcaption = styled.figcaption`
  color: white;
  font-size: 0.8rem;
`
