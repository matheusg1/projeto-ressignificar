import { React, useState, useEffect } from "react";
import logoNavbar from '../../img/logo-navbar.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [borderMenu, setBorderMenu] = useState('');


    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);


    useEffect(() => {
        if (windowWidth >= 992) {
            setBorderMenu('border-start border-white');
            return;
        }

        setBorderMenu('');

    }, [windowWidth]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-white">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img id="img-logo" className="ms-lg-4" 
                    src={logoNavbar} 
                    alt="Logotipo do projeto, desenho de uma lâmpada com uma borboleta sobreposta" />
                    <h1 className="fw-normal fs-5 ps-lg-3 align-self-center mb-0">Projeto Ressignificar</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Inscrição
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/acompanhamento-psicologico" >Acompanhamento psicológico</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/acompanhamento-psiquiatrico" >Acompanhamento psiquiátrico</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/acompanhamento-nutricional" >Acompanhamento nutricional</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/atendimento-presencial">Locais</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dar-feedback" >Dar feedback</Link>
                        </li>                                            
                    </ul>
                </div>
            </div>
        </nav >
    );
}