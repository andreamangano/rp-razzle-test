import { rem } from 'polished'
import {remBase} from '../config/theme'

export function convertInRem() {

  if (arguments.length > 1) {
    return Array.prototype.slice.call(arguments).reduce((acc, item) => {
      const toPx = ` ${item}px`;
      return `${acc} ${rem(toPx, remBase)}`;
    }, '');
  }

  return rem(`${arguments[0]}px`, remBase);
}