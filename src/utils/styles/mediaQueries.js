import {QUERIES} from '../../config/breakpoints'
import {css} from 'styled-components'
import {convertInRem} from '../../utils'

const medias = Object.keys(QUERIES).reduce(
  (medias, key) => {
    medias[key] = (literals, ...placeholders) =>
      css`
        @media (min-width: ${convertInRem(QUERIES[key])}) {
          ${css(literals, ...placeholders)};
        }
      `.join('');
    return medias;
  },
  {}
);

export default medias;