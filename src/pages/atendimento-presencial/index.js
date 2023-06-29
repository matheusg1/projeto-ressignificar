import { useEffect, useState } from 'react';
import FadeAnimation from '../../components/fadeComponent';
import TitleComponent from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';
export default function AtendimentoPresencial() {
    return (
        <>
        <HelmetComponent title="Atendimento Presencial"/>
            <FadeAnimation />
            <div className="fade">
                <div className="container-md py-3">
                    <TitleComponent title="Atendimento presencial"/>
                    <div className="fs-5 ">
                        <div className="fs-5  p-2 d-block gradient-yellow">Campo Mourão (acima de 06 anos)</div>
                        <p className="fs-5 p-2 d-block">Terra Boa (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-yellow">Maringá (acima de 12 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-blue">Mamborê (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-pink">Londrina (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-yellow">Barbosa Ferraz (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-blue">Corumbataí (acima de 12 anos)</p>
                    </div>
                </div>
            </div>
        </>
    )
}