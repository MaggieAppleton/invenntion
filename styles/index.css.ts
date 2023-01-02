import { style, createVar } from '@vanilla-extract/css'
import { vars } from '@theme'

export const xPos = createVar()
export const yPos = createVar()

export const myStyle = style({
  color: vars.color.brand,
})

export const vennWrapper = style({
  display: 'flex',
  justifyContent: 'center',
})

export const vennSizer = style({
  width: '1200px',
  height: '600px',
  position: 'relative',
})

export const generateButton = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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

export const conceptInput = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  resize: 'none',
})

export const firstConceptInput = style({
  left: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})

export const secondConceptInput = style({
  right: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})
