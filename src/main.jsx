import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import GlobalProvider from './provider/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
     <App />
    </GlobalProvider>
  </StrictMode>,
)
