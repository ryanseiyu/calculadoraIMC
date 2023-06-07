import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'

// import {PI as numeroPI, GTM_BRASIL} from './teste.js'
// import nomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {numeroPI} <br></br>
    {nomes} */}
    <App />
  </React.StrictMode>,
)
