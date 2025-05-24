import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Catalog from './catalog/catalog.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Catalog /> {/* Render Catalog as main component */}
  </React.StrictMode>
)