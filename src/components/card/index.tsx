import * as React from 'react'
import * as Styled from './styles'

interface Props {
  title: string,
  description: string,
  imgUrl: string
}

const Card = ({ title, description, imgUrl }: Props) => {
  return (
    <Styled.Wrapper>
      <h2>{title}</h2>
      <img src={imgUrl} />
      <p>{description}</p>
    </Styled.Wrapper>
  )
}

export default Card