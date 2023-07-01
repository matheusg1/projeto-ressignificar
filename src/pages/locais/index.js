import { useEffect, useState } from 'react';
import Fade from '../../components/fadeComponent';
import TitleComponent from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';
export default function AtendimentoPresencial() {
    return (
        <>
            <HelmetComponent title="Locais" />
            <Fade />
            <div className="fade">
            <TitleComponent title="Locais com atendimento presencial"/>
                <div className="container-md py-3">
                    <div className="fs-5">
                        <p className="fs-5 p-2 glass">Campo Mourão (acima de 06 anos)</p>
                        <p className="fs-5 p-2">Terra Boa (acima de 06 anos)</p>
                        <p className="fs-5 p-2">Maringá (acima de 12 anos)</p>
                        <p className="fs-5 p-2 d-block">Mamborê (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-pink">Londrina (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-yellow">Barbosa Ferraz (acima de 06 anos)</p>
                        <p className="fs-5 p-2 d-block gradient-blue">Corumbataí (acima de 12 anos)</p>
                    </div>
                </div>
            </div>
        </>
    )
}