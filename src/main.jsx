import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx';
import Slider1 from './components/Slider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Class01 from './Classes/class01.jsx';

createRoot(document.getElementById('root')).render(

   
    <BrowserRouter>
    <Header/>
    <Slider1/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/class01' element={<Class01 />} />

       
      </Routes>
    </BrowserRouter>
)
