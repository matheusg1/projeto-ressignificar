import React from 'react';
import Instafeed from '../../components/instafeedComponent';
import FadeAnimation from '../../components/fadeAnimation';
import TitleComponent from '../../components/titleComponent';

export default function Index() {

    return (
        <>
            <div className="container-md py-3">
                <TitleComponent title="Nossas postagens..."/>                
            </div>
            <div id="instafeed" className="mt-md-2g mt-xl-5 mt-xxl-5"></div>
            <Instafeed />
        </>
    )
}