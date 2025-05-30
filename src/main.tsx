import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </StrictMode>
)
