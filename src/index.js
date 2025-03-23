import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
