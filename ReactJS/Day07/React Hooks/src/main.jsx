import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sum from './Sum.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Sum/>
    </>
 
)
