import React from "react";

export default function FooterComponent() {
    var anoAtual = new Date().getFullYear()

    return (
        <>
        <div className="container">
            <div className='d-flex flex-column align-items-center justify-content-center text-secondary border-top border-white fs-6 mx-5 mt-5 mb-2 pt-3 footer'>
                <div>© {anoAtual} Projeto Ressignificar</div>
                <div>Desenvolvido por <a className='text-info-emphasis' target="_blank" href="https://github.com/matheusg1">Matheus G.</a></div>
            </div>
            </div>
        </>
    );
}