import React from 'react';

export default function ItemLocalAtendimento(props) {
    return (
        <>
            <div className='d-flex flex-column flex-sm-column flex-md-row align-items-center p-2 mb-2 border-0 fs-3 fade-item glass'>
                <div className='fw-medium pe-3'>{props.local}</div>
                <div className='fw-light'>({props.idadeMinima})</div>
            </div>
        </>
    )
}