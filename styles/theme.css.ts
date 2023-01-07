import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    active: 'hsla(240, 76%, 94%, 1)',
    activeBackground: 'hsla(240, 76%, 94%, 0.1)',
    gray1: 'hsla(240, 10%, 92%, 0.33)',
    gray2: 'hsla(240, 10%, 84%, 1)',
    gray3: 'hsla(240, 10%, 76%, 1)',
    gray4: 'hsla(240, 12%, 69%, 1)',
    gray5: 'hsla(240, 16%, 61%, 1)',
    gray6: 'hsla(240, 16%, 53%, 1)',
    gray7: 'hsla(240, 16%, 43%, 1)',
    gray8: 'hsla(240, 16%, 30%, 1)',
  },
})
