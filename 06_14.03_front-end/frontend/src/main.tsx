import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import 'leaflet/dist/leaflet.css'
import { BrowserRouter } from 'react-router-dom'
import './i18n';



//navigeerimiseks (URL'ide vahetamiseks)
// 1.npm i react-router-dom
//2. impotirda BrowserRouter ja ümbritseda see <App/> tag'i ümber
//3. teha seoseid failide ja URL'ide vahel App.tsx failis
// localhost:5173/cart --> Cart.tsx
// localhost:5173/login --> Login.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
