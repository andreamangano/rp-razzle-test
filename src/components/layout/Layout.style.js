import {css} from 'styled-components'
import {zIndex} from '../../config/theme'
import MEDIA_QUERY from '../../utils/styles/mediaQueries'

export const layout = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`

export const top = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  flex-shrink: 1;
  background-color: white;
  position: relative;
  z-index: ${zIndex.navbar};
`

export const content = css`
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
`

export const main = css`
  box-sizing: border-box;
  flex-grow: 1;
  padding: 1.5rem 1rem;
`

export const side = css`
  box-sizing: border-box;
  flex-shrink: 1;
  background-color: white;
  z-index: ${zIndex.navbar + 2};
  position: fixed;
  bottom: 0;
  top: 0;
  display: none;

  ${p => p.showMobileSide && `
    display: block;
  `}

  ${
    MEDIA_QUERY.LG`
      z-index: ${zIndex.sidebar};
      position: relative;
      width: auto;
      display: block;
    `
  }
`