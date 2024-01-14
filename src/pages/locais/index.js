import React, { useState, useEffect } from 'react';
import Fade from '../../components/fadeComponent';
import TitleComponent from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';
import ItemLocalAtendimento from '../../components/itemLocalAtendimentoPresencial';
import locaisData from '../../data/locaisData.js'

export default function AtendimentoPresencial() {

    const [locais,setLocais] = useState([]);

    useEffect(() => {
        setLocais(locaisData)
    }, []);
        
    return (
        <>
            <HelmetComponent title="Locais" />
            <div className="d-flex flex-column flex-fill">
                <TitleComponent title="Locais com atendimento presencial" />
                <div className="container-md pb-3 my-auto">
                    <div className="display-6">
                        {locais.length > 0 ? (
                            locais.map(local => (
                                <ItemLocalAtendimento
                                    key={local.id}
                                    local={local.nome}
                                    idadeMinima={`acima de ${local.idadeMinima} anos`}
                                />
                            ))
                        ) : (
                            <p>Carregando locais</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}