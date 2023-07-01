import React from 'react';
import styles from '../instafeedComponent/styles.module.css';
import logoInstagram from '../../img/logo-instagram.png'

export default function InstagramPost(props) {
    const { id, permalink, media_url, caption } = props.post;

    function abreviaLegenda(legenda) {

        //const tamanhoMaximo = 180;
        const tamanhoMaximo = 160;

        if (legenda != null) {
            if (legenda.length > tamanhoMaximo) {
                return legenda.slice(0, tamanhoMaximo) + '...';
            }
        }
        return legenda;
    }

    return (
        <div className={`${styles.item} rounded-3 shadow`}>
            <a key={id} href={permalink} target="_blank">
                <img src={media_url} />
            </a>
            <div className='d-flex flex-column px-3'>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <p className="fs-6 fw-semibold my-3"><a className='text-black' key={id} href={permalink} target="_blank">Projeto Ressignificar</a></p>
                    <a className='text-black' key={id} href={permalink} target="_blank">
                        <img className='mb-1' src={logoInstagram} height="16px"></img></a>
                </div>
                <p className="fs-6 fw-normal">{abreviaLegenda(caption)}</p>
            </div>
        </div>
    );
}