import React, { useEffect, useRef } from 'react';
//import Instafeed from './instafeed.min.j';
import Instafeed from '../../components/instafeedComponent';
import FadeAnimation from '../../components/fadeAnimation';

export default function Index() {

    return (
        <>
            <div className="container-md py-3">
                <h1 className="display-1 about-heading mt-2">Últimas postagens</h1>
            </div>
            <div id="instafeed" className="mt-md-2 mt-lg-5 mt-xl-5 mt-xxl-5"></div>
            <Instafeed />
        </>
    )
}