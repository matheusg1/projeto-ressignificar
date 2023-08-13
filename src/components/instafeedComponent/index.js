import { React, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import InstagramPost from '../instagramPostComponent';

import logoInstagram from '../../img/logo-instagram.png'

export default function InstaFeed() {

    function abreviaLegenda(legenda) {

        const tamanhoMaximo = 160;

        if (legenda != null) {
            if (legenda.length > tamanhoMaximo) {
                return legenda.slice(0, tamanhoMaximo) + '...';
            }
        }

        return legenda;
    }

    const [feedList, setFeedList] = useState([]);

    async function getInstaFeed() {
        const token = process.env.REACT_APP_INSTAGRAM_API_KEY;
        const fields = "media_url,media_type,permalink,caption,children";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&children&limit=12`;

        const { data } = await axios.get(url);
        setFeedList(data.data);
    }

    useEffect(() => {
        getInstaFeed();
    }, []);
    // "IMAGE", "CAROUSEL_ALBUM", "VIDEO"
    return (
        <section className={styles.container}>
            {feedList.map(item => {
                if (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") {
                    return (
                        <InstagramPost post={item} />
                    );
                } else /*if (item.media_type === "VIDEO")*/ {
                    return (
                        <div className={`${styles.item} rounded-3 shadow fade-post`} key={item.id}>
                            <div className='text-center'>
                                <video controls>
                                    <source src={item.media_url}></source>
                                </video>
                            </div>
                            <div className='d-flex flex-column px-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className="fs-6 fw-semibold my-3">
                                        <a key={item.id} href={item.permalink} target="_blank" className={`${styles.item} text-black`}>Projeto Ressignificar</a>
                                    </p>
                                    <a href=""><img className='mb-1' src={logoInstagram} height="16px"></img></a>
                                </div>
                                <p className="fs-6 fw-normal ">{abreviaLegenda(item.caption)}</p>
                            </div>
                        </div>
                    );
                }
            })}
        </section >
    );
}