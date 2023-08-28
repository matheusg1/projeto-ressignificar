import React from 'react';

export default function CardIdealizadora({img, nome, crp, titulo, descricao}) {
    return (
        <>
            <div className="py-4 px-3 d-flex flex-column col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-4 shadow-sm about-card">
                <img className="rounded-circle align-self-center mb-3"
                    width="189px"
                    src={img}
                    alt={`Foto da psicóloga ${nome}`}
                />
                <div className="border-start border-dark ps-3">
                    <p className="fw-semibold mb-0">{nome}</p>
                    <p className="fw-medium mb-0">{crp}</p>
                    <p className="fw-medium mb-0">{titulo}</p>
                </div>
                <p className="mt-3 ps-2">{descricao}</p>
            </div>
        </>
    )
}