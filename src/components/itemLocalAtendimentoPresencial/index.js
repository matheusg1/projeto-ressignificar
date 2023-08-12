import React from 'react';

export default function ItemLocalAtendimento(props) {
    return (
        <>
            <div className='d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center p-2 mb-2 glass shadow-sm border-0 fs-4'>
                <div className='fw-medium pe-3'>{props.local}</div>
                <div className='fw-light'>({props.idadeMinima})</div>
            </div>
        </>
    )
}