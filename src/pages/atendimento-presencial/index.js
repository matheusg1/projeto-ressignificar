import { useEffect, useState } from 'react';
import FadeAnimation from '../../components/fadeAnimation';

export default function AtendimentoPresencial() {
    return (
        <>
            <FadeAnimation />
            <div className="fade">
                <div className="container-md py-3 ">
                    <h1 className="display-1 about-heading mt-2 mb-5">
                        Atendimento presencial
                    </h1>
                    <div className="fs-5">
                        <p className="fs-5 p-2 gradient-blue">Campo Mourão (acima de 06 anos)</p>
                        <p className="fs-5 p-2 gradient-pink">Terra Boa (acima de 06 anos)</p>
                        <p className="fs-5 p-2 gradient-yellow">Maringá (acima de 12 anos)</p>
                        <p className="fs-5 p-2 gradient-blue">Mamborê (acima de 06 anos)</p>
                        <p className="fs-5 p-2 gradient-pink">Londrina (acima de 06 anos)</p>
                        <p className="fs-5 p-2 gradient-yellow">Barbosa Ferraz (acima de 06 anos)</p>
                        <p className="fs-5 p-2 gradient-blue">Corumbataí (acima de 12 anos)</p>
                    </div>
                </div>
            </div>
        </>
    )
}