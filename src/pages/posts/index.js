import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import Title from '../../components/titleComponent';
import Fade from '../../components/fadeComponent';

export default function Posts() {
    return (
        <>
            {/* <HelmetComponent title="Início" /> */}
            <Fade />         
                <Title title="Nossos posts" />
                <div id="instafeed" className=""></div>
                <Instafeed />
        
        </>
    )
}