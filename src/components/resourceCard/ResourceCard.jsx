import React from 'react'
import styled from 'styled-components'
import {
  card
} from './ResourceCard.style'

const CardStyled = styled.article`${card}`

const ResourceCard = ({
  title,
  author,
  abstract,
  slug,
  tags,
  publishedAt,
}) => {
  return (
    <CardStyled
      css={card}
    >
      <h4>{title}</h4>
      {
        abstract &&
        <p>{abstract}</p>
      }
      <div>{author} {publishedAt ? publishedAt : ''}</div>
      {
        tags &&
        <div>
          {tags.join(', ')}
        </div>
      }
    </CardStyled>
  )
}

export default ResourceCard