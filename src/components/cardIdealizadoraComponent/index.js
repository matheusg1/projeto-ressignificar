import React from 'react';

export default function CardIdealizadora(props) {
    return (
        <>
            <div className="py-4 px-3 d-flex flex-column col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-4 about-card">
                <img className="rounded-circle align-self-center mb-3" width="189px" src={props.img} alt={`Foto da psicóloga ${props.nome}`} />
                <div className="border-start border-dark ps-3">
                    <p className="fw-semibold mb-0">{props.nome}</p>
                    <p className="fw-medium mb-0">{props.crp}</p>
                    <p className="fw-medium mb-0">{props.titulo}</p>
                </div>
                <p className="mt-3 ps-2">{props.descricao}</p>
            </div>
        </>
    )
}