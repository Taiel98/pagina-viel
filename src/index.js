import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Routes/Inicio';
import SobreNosotros from './Routes/SobreNosotros';
import Ministerios from './Routes/Ministerios';
import PreguntasFrecuentes from './Routes/PreguntasFrecuentes';
import Contactanos from './Routes/Contactanos';
import ClubBiblico from './Routes/ClubBiblico';
import Escuelita from './Routes/Escuelita';
import HoritaFeliz from './Routes/HoritaFeliz';
import Jovenes from './Routes/Jovenes';
import ReunionDeHombres from './Routes/ReunionDeHombres';
import ReunionFemenina from './Routes/ReunionFemenina';
import Alabanza from './Routes/Alabanza';
import Matrimonios from './Routes/Matrimonios';
import Mayordomia from './Routes/Mayordomia';
import ReunionOracion from './Routes/ReunionOracion';
import ServicioDesayuno from './Routes/ServicioDesayuno';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Inicio/>}/>
          <Route path='Inicio' element={<Inicio/>}/>
          <Route path='SobreNosotros' element={<SobreNosotros/>}/>
          <Route path='Ministerios' element={<Ministerios/>}/>
          <Route path='PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
          <Route path='Contactanos' element={<Contactanos/>}/>
          <Route path='ClubBiblico' element={<ClubBiblico/>}/>
          <Route path='Escuelita' element={<Escuelita/>}/>
          <Route path='HoritaFeliz' element={<HoritaFeliz/>}/>
          <Route path='Jovenes' element={<Jovenes/>}/>
          <Route path='ReunionHombres' element={<ReunionDeHombres/>}/>
          <Route path='ReunionFemenina' element={<ReunionFemenina/>}/>
          <Route path='Alabanza' element={<Alabanza/>}/>
          <Route path='Matrimonios' element={<Matrimonios/>}/>
          <Route path='Mayordomia' element={<Mayordomia/>}/>
          <Route path='ReunionOracion' element={<ReunionOracion/>}/>
          <Route path='ServicioDesayuno' element={<ServicioDesayuno/>}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
