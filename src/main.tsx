import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "bootswatch/dist/sandstone/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title="React and Typescript"/>
  </React.StrictMode>,
)
