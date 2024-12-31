import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './Fonts.css'
import './Colors.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)