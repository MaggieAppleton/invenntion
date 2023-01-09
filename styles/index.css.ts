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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none', 
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: vars.color.gray6,
  width: '80px',
  height: '80px',
})

export const circleTransition = style({
  transition: '1s'
})

export const animateCircle1 = style({
  transform: 'translateX(-24px)'
})

export const animateCircle2 = style({
  transform: 'translateX(24px)'
})

export const vennSVG = style({
  minWidth: `${vennWidth}px`,
  position: 'absolute',
})

export const ShareButton = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  padding: '0.4rem 0.6rem',
  border: 'none',
  backgroundColor: 'transparent',
  justifyContent: 'center',
  gridGap: '0.4rem',
  color: vars.color.gray5,
  borderRadius: '4px',
  transition: '0.2s ease-in',
  ':hover': {
    color: vars.color.gray7,
    cursor: 'pointer',
    backgroundColor: vars.color.gray1,
  }
})

export const HelpButton = style({
  position: 'absolute',
  left: '1rem',
  bottom: '1rem',
  fontSize: '14px',
  display: 'flex',
  padding: '0.4rem 0.6rem',
  alignItems: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  justifyContent: 'center',
  gridGap: '0.4rem',
  color: vars.color.gray5,
  borderRadius: '4px',
  transition: '0.2s ease-in',
  ':hover': {
    color: vars.color.gray7,
    cursor: 'pointer',
    backgroundColor: vars.color.gray1,
  }
})


export const conceptInput = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  resize: 'none',
  textAlign: 'center',
  padding: '12px 16px',
  fontFamily: 'inherit',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0px 6px 15px 2px rgba(50,20,50, 0.1)',
  color: vars.color.gray8,
  '::placeholder': {
    color: vars.color.gray4,
  },
})

export const firstConceptInput = style({
  left: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})

export const secondConceptInput = style({
  right: 'calc(25% - 92px)', // 92px is half the width of the union intersection
})
