import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { PublicRoutes } from './routes/AppRoutes';
import { NavBar } from './pages/Main/navbar';
import { Footer } from './pages/Main/footer';
import { PrivateRoutes } from './routes/PrivateRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
        <PublicRoutes />
      <Footer/>
       <PrivateRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
