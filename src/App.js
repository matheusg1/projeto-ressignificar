import React from "react";
import logo from './logo.svg';
import AppRoutes from './routes';
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
//import './assets/css/owl.carousel.min.css';
import './styles/main.css';
import Navbar from './components/navbarComponent';

function App() {
  return (
    <>
      <Navbar />      
      <AppRoutes />
    </>
  );
}

export default App;
