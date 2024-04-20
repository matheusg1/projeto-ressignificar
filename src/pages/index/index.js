import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import Fade from '../../components/fadeComponent';

export default function Index() {
    return (
        <>
            {/* <HelmetComponent title="Início" /> */}
            <Fade />
            <Title title="Início" />
            <div className='d-flex justify-content-center gap-5'>
                <img className="col-6 rounded-5" src="https://images.pexels.com/photos/3960563/pexels-photo-3960563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className='fs-3 col-3 text-primary'>
                    O objetivo do Projeto Ressignificar é proporcionar acesso a atendimentos psicológicos de acordo com as condições socioeconômicas de cada paciente. Assim sendo, o projeto vem com o intuito de facilitar o acesso à atendimentos psicológicos, tornando possível a oportunidade de cuidar da saúde mental.
                </div>
            </div>
        </>
    )
}