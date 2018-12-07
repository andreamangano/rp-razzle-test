export const remBase = 16

export const palettes = {
  basic: {
    primary: 'yellow',
    secondary: 'blue',
  },
  mood: {
    best: 'green',
    good: 'lightblue',
    bad: 'red',
  },
}

export const zIndex = {
  overthetop: 99999,
  modal: 7000,
  navbar: 6000,
  sidebar: 5000,
  popover: 4000,
  overlay: 3000,
  inpage: 1000,
  standard: 1,
  below: -1,
  bottomless: -99999,
}

export default {
  remBase,
  palettes,
  zIndex,
}