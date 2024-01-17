import './GlobalStyles.scss'
import { createTheme } from '@mui/material'

type GlobalStylesProps = {
  children: React.ReactElement
}
export const customerTheme = createTheme({
  palette: {
    primary: {
      main: '#e52125'
    }
  }
})

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return children
}

export default GlobalStyles
