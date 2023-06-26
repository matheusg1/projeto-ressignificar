import React from "react";
import logoNavbar from '../../img/logo-navbar.png';
import { Link } from 'react-router-dom';

/*console.log(process.env.INSTAGRAM_API_KEY);
console.log(`${process.env.INSTAGRAM_API_KEY}`);*/

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container-fluid">
                <img id="img-logo" className="ms-lg-4" src={logoNavbar} />
                <Link className="navbar-brand ps-4" to="/">Projeto Ressignificar</Link>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Inscrição
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="inscricao-psicologico.html">Acompanhamento psicológico</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="inscricao-nutricional.html">Acompanhamento nutricional</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="inscricao-psiquiatrico.html">Acompanhamento psiquiátrico</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link text-black" href="/feedback">Dar feedback</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}