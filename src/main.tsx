import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterApp from './routes/RouterApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
