import React from 'react';

export default function ItemLocalAtendimento({local, idadeMinima}) {
    return (
        <>
            <div className='d-flex flex-column flex-sm-column flex-md-row align-items-center p-2 mb-2 border-0 fs-3 fade-local glass'>
                <div className='fw-medium pe-3'>{local}</div>
                <div className='fw-light'>({idadeMinima})</div>
            </div>
        </>
    )
}