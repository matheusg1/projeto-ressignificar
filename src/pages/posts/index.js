import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import Fade from '../../components/fadeComponent';

export default function Posts() {
    return (
        <>
            {/* <HelmetComponent title="Início" /> */}
            <Fade />         
                <Title title="Nossos posts" className="primary-blue"/>
                <div id="instafeed" className=""></div>
                <Instafeed />
        
        </>
    )
}