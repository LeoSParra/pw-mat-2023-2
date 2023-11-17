import React from 'react'
import './App.css'
import HeaderBar from './ui/HeaderBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme'
import Box from '@mui/material/Box'

function App() {

  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{
          width: '100vw',     // toda a largura da janela
          minHeight: '100vh',  // no mínimo, toda a altura da janela
          // cinza escuro, no modo dark
          backgroundColor: 'background.default' 
        }}>
          <HeaderBar />
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/cars" element={ <CarList/> } />
            <Route path="/costumers" element ={ <CostumerList/> } />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
    </>
  )
}

export default App
