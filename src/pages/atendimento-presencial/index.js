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
                    <div class="fs-5">
                        <p class="fs-5 p-2 local-atendimento-1">Campo Mourão (acima de 06 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-2">Terra Boa (acima de 06 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-3">Maringá (acima de 12 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-1">Mamborê (acima de 06 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-2">Londrina (acima de 06 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-3">Barbosa Ferraz (acima de 06 anos)</p>
                        <p class="fs-5 p-2 local-atendimento-1">Corumbataí (acima de 12 anos)</p>
                    </div>
                </div>
            </div>
        </>
    )
}