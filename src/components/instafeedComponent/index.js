import { React, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import InstagramPost from '../instagramPostComponent';

export default function InstaFeed() {

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

    const [feedList, setFeedList] = useState([]);

    async function getInstaFeed() {
        const token = process.env.REACT_APP_INSTAGRAM_API_KEY;
        const fields = "media_url,media_type,permalink,caption,children";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&children&limit=15`;

        const { data } = await axios.get(url);
        setFeedList(data.data);
    }

    useEffect(() => {
        getInstaFeed();
    }, []);

    return (
        <section className={styles.container}>
            {feedList.map(item => {
                if (item.media_type === "IMAGE") {
                    return (
                        <InstagramPost post={item} />
                    );
                } else if (item.media_type === "VIDEO") {
                    return (
                        <div className={`${styles.item} rounded-3 shadow text-center`}>
                            <a key={item.id} href={item.permalink} target="_blank" className={styles.item}>
                                <video controls>
                                    <source src={item.media_url}></source>
                                    <p className="fs-6 fw-medium pt-4 px-2">{abreviaLegenda(item.caption)}</p>
                                </video>
                            </a>
                        </div>
                    );
                } else /*if (item.media_type === "CAROUSEL_ALBUM")*/ {
                    return (
                        
                        <>
                            <div className={`${styles.item} rounded-3 shadow`}>
                                <a key={item.id} href={item.permalink} target="_blank" >
                                    <img src={item.media_url} />
                                </a>
                                <div className='d-flex flex-column px-2'>
                                    <a key={item.id} href={item.permalink} target="_blank">
                                        <p className="fs-6 fw-semibold my-3 text-black">Projeto Ressignificar</p>
                                    </a>
                                    <p className="fs-6 fw-normal">{abreviaLegenda(item.caption)}</p>
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </section>
    );
}