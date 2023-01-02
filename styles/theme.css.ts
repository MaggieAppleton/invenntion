import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    active: 'hsba(240, 76%, 94%, 1)',
    activeBackground: 'hsba(240, 76%, 94%, 0.1)',
    gray1: 'hsba(240, 2%, 92%, 1)',
    gray2: 'hsba(240, 5%, 84%, 1)',
    gray3: 'hsba(240, 9%, 76%, 1)',
    gray4: 'hsba(240, 12%, 69%, 1)',
    gray5: 'hsba(240, 16%, 61%, 1)',
    gray6: 'hsba(240, 22%, 53%, 1)',
    gray7: 'hsba(240, 25%, 43%, 1)',
    gray8: 'hsba(240, 25%, 30%, 1)',
  },
})
