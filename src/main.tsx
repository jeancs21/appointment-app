import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterApp from './routes/RouterApp.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>,
)
