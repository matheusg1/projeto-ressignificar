import { React, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import InstagramPost from '../instagramPostComponent';
import imgPlaceholder from '../../img/placeholder.png';
import logoInstagram from '../../img/logo-instagram.png';

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
        try {
            const { data } = await axios.get(url);
            setFeedList(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInstaFeed();
    }, []);
    // "IMAGE", "CAROUSEL_ALBUM", "VIDEO"
    return (
        <section className={styles.container}>
            {feedList.length > 0 &&
                <>
                    {feedList.map(item => {
                        if (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") {
                            return (
                                <InstagramPost post={item} />
                            );
                        } else /*if (item.media_type === "VIDEO") */ {
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
                                            <a href="">
                                                <img className='mb-1'
                                                    src={logoInstagram}
                                                    alt="Ícone com logo do Instagram"
                                                    height="16px">
                                                </img>
                                            </a>
                                        </div>
                                        <p className="fs-6 fw-normal ">{abreviaLegenda(item.caption)}</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </>
            }
            {feedList.length == 0 &&
                <>
                    {[...Array(8)].map(() =>
                        <div className={`${styles.item} rounded-3 shadow fade-post opacity-50`}>
                            <a href="https://www.instagram.com/pro.ressignificar" target="_blank">
                                <img src={imgPlaceholder} alt="Imagem do Instagram do Projeto Ressignificar" />
                            </a>
                            <div className='d-flex flex-column px-3 py-3'>
                                <p aria-hidden="true">
                                    <a href="https://www.instagram.com/pro.ressignificar" target="_blank">
                                        <span class="placeholder col-8"></span>
                                    </a>
                                </p>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7 me-1"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4 me-1"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                    <span class="placeholder col-4 me-1"></span>
                                    <span class="placeholder col-6"></span>
                                </p>
                            </div>
                        </div>
                    )}
                </>
            }
        </section>
    );
}