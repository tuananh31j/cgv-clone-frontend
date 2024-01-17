import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './components/GlobalStyles/index.tsx'
import { customerTheme } from './components/GlobalStyles/index.tsx'
import { ThemeProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles>
      <ThemeProvider theme={customerTheme}>
        <App />
      </ThemeProvider>
    </GlobalStyles>
  </React.StrictMode>
)
