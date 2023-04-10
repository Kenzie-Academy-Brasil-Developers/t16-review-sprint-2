import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NewsProvider } from './providers/NewsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>  
  </React.StrictMode>,
)



