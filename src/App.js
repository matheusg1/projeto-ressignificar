import React from "react";
import AppRoutes from './routes';
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './styles/main.css';
import Navbar from './components/navbarComponent';
import FooterComponent from "./components/footerComponent";

function App() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <AppRoutes />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;