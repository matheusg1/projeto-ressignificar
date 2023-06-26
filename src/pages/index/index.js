import React, { useEffect, useRef } from 'react';
//import Instafeed from './instafeed.min.j';
import Instafeed from '../../components/instafeedComponent';

export default function Index() {
    //console.log(process.env.REACT_APP_INSTAGRAM_API_KEY)
    return (
        <>
            <div id="instafeed" className="mt-md-2 mt-lg-5 mt-xl-5 mt-xxl-5 owl-carousel owl-theme owl-loaded owl-drag"></div>            
           <Instafeed/> 
        </>
    )
}