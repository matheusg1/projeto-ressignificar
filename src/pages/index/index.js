import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';

export default function Index() {
    return (
        <>
            <HelmetComponent title="Início" />
            <Title title="Nossos posts"/>
            <div id="instafeed" className=""></div>
            <Instafeed />
        </>
    )
}