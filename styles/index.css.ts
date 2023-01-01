import { style, createVar } from '@vanilla-extract/css'
import { vars } from '@theme'

export const xPos = createVar()
export const yPos = createVar()

export const myStyle = style({
  color: vars.color.brand,
})

export const circleWrapper = style({
  position: 'relative',
})

export const circle = style({
  position: 'absolute',
  borderRadius: '50%',
  width: '400px',
  height: '400px',
  backgroundColor: vars.color.brand,
})

export const firstCircle = style({
  backgroundColor: vars.color.brand,
})

export const secondCircle = style({
  backgroundColor: 'green',
  left: '250px',
  background: `radial-gradient(farthest-side,white 100%,transparent) 
   ${xPos} ${yPos}/ /* position */
   400px 400px /* size */
   no-repeat fixed #E78481`,
  transition: '1s',

  // selectors: {
  //   [`${circleWrapper}:hover &`]: {
  //     left: '100px',
  //   },
  // },
})
