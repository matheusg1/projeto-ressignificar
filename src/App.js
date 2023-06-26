import React from "react";
import logo from './logo.svg';
import AppRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './styles/main.css';
import Navbar from './components/Navbar';

function App() {
  /*console.log(process.env.REACT_APP_INSTAGRAM_API_KEY)*/
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
