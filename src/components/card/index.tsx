import * as React from 'react'

interface Props {
  title: string,
  description: string,
  imgUrl: string
}

const Card = ({ title, description, imgUrl }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgUrl} />
      <p>{description}</p>
    </div>
  )
}

export default Card