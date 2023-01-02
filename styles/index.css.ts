import { style, createVar } from '@vanilla-extract/css'
import { vars } from '@theme'

const vennWidth = 1200

export const xPos = createVar()
export const yPos = createVar()

export const myStyle = style({
  color: vars.color.active,
})

export const vennWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '6rem'
})

export const vennSizer = style({
  width: `${vennWidth}px`,
  height: `${vennWidth / 2}px`,
  position: 'relative',
})

export const generateButton = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const vennSVG = style({
  minWidth: `${vennWidth}px`,
  position: 'absolute',
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

export const ShareButton = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '14px'
})

export const HelpButton = style({
  position: 'absolute',
  left: '1rem',
  bottom: '1rem',
  fontSize: '14px'
})


export const conceptInput = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  resize: 'none',
  textAlign: 'center',
  padding: '12px 16px',
  fontFamily: 'inherit',
  border: `1px solid ${vars.color.gray3}`,
  borderRadius: '4px',
  boxShadow: '0px 6px 15px 2px rgba(50,50,90, 0.1)',
})

export const firstConceptInput = style({
  left: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})

export const secondConceptInput = style({
  right: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})
