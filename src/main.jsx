import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx';
import Slider1 from './components/Slider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Class01 from './Classes/class01.jsx';
import Class02 from './Classes/Class02.jsx';
import Class03 from './Classes/Class03.jsx';
import Class04 from './Classes/Class04.jsx';
import Class05 from './Classes/Class05.jsx';
import Class06 from './Classes/Class06.jsx';
import Class07 from './Classes/Class07.jsx';

createRoot(document.getElementById('root')).render(

   
    <BrowserRouter>
    <Header/>
    <Slider1/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/class01' element={<Class01 />} />
        <Route path='/class02' element={<Class02 />} />
        <Route path='/class03' element={<Class03 />} />
        <Route path='/class04' element={<Class04 />} />
        <Route path='/class05' element={<Class05 />} />
        <Route path='/class06' element={<Class06 />} />
        <Route path='/class07' element={<Class07 />} />
      </Routes>
    </BrowserRouter>
)
