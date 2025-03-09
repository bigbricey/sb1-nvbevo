import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { initializeGA } from './utils/analytics'

// Initialize Google Analytics with your measurement ID
// Properly configured GA4 tracking ID
initializeGA('G-LFP5VJ3QMG')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
