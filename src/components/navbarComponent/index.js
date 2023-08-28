import { React, useState, useEffect } from "react";
import logoNavbar from '../../img/logo-navbar.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import { supabase, MensagemErro } from '../../services/apiServices'

export default function Navbar() {
    const { user, setUser } = useAuth();
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

    async function logout() {
        let { error } = await supabase.auth.signOut()
        
        if (!error) {
            setUser('')
            navigate('/login');
        }
        else {
            MensagemErro("Falha ao deslogar")
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-white">
            <div className="container-fluid">
                <Link to="/">
                    <img id="img-logo" className="ms-lg-4" src={logoNavbar} alt="Logotipo do projeto, desenho de uma lâmpada com uma borboleta sobreposta" />
                </Link>
                <h1><Link className="navbar-brand ps-lg-3" to="/">Projeto Ressignificar</Link></h1>
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
                        {user && (
                            <li className={`nav-item ${borderMenu}`} >
                                <Link className="nav-link" to="/menu">Menu</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            {user ? (
                                <Link className="nav-link" to="/login" onClick={logout}>Deslogar</Link>
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}