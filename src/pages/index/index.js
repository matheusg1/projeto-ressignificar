import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';
import Fade from '../../components/fadeComponent';

export default function Index() {
    return (
        <>
            <HelmetComponent title="Início" />
            <Fade />         
                <Title title="Nossos posts" />
                <div id="instafeed" className=""></div>
                <Instafeed />
        
        </>
    )
}