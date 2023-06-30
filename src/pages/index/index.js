import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';

export default function Index() {

    return (
        <>
            <HelmetComponent title="Início" />
            <div className="container-md py-3 ">
                <Title title="Nossas postagens..." />
            </div>
            <div id="instafeed" className=""></div>
            <Instafeed />
        </>
    )
}