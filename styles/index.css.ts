import { style, createVar } from '@vanilla-extract/css'
import { vars } from '@theme'

export const xPos = createVar()
export const yPos = createVar()

export const myStyle = style({
  color: vars.color.brand,
})

export const vennSVG = style({
  position: 'relative',
  top: '300px',
  left: '300px',
})

export const vennUnion = style({
  fill: 'white',
  transition: '0.3s ease-in',
  stroke: 'rgba(255, 255, 255, 0)',
  strokeWidth: '6px',
  ':hover': {
    filter: 'drop-shadow(3px 0px 10px rgb(30 30 60 / 0.25))',
    stroke: 'rgba(255, 255, 255, 0.5)',
  },
})
