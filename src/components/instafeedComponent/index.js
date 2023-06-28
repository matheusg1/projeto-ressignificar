import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

export default function InstaFeed() {

    const [feedList, setFeedList] = useState([]);
    console.log(feedList)
    async function getInstaFeed() {
        const token = process.env.REACT_APP_INSTAGRAM_API_KEY;
        const fields = "media_url,media_type,permalink,caption,children";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=12`;

        const { data } = await axios.get(url);
        console.log(data)
        setFeedList(data.data);
    }

    useEffect(() => {
        getInstaFeed();
    }, []);

    /*
    return (
      <section className={styles.container}>
        {feedList.map(item => (
          <a key={item.id} href={item.permalink} target="_blank" className={styles.item}>
            {item.media_type === "IMAGE" ? <img src={item.media_url} /> : (
              <video controls>
                <source src={item.media_url}></source>
              </video>
            )}
          </a>
        ))}
      </section>
    );*/
    return (
        <section className={styles.container}>
            {feedList.map(item => {
                if (item.media_type === "IMAGE") {
                    return (
                        <>
                            <div className={`${styles.item} rounded-3 shadow`}>
                                <a key={item.id} href={item.permalink} target="_blank">
                                    <img src={item.media_url} />
                                </a>
                                <p className="fs-5 pt-4 ps-3">{item.caption}</p>
                            </div>
                        </>
                    );
                } else if (item.media_type === "VIDEO") {
                    return (
                        <a key={item.id} href={item.permalink} target="_blank" className={styles.item}>
                            <video controls>
                                <source src={item.media_url}></source>
                                <p>{item.caption}</p>
                            </video>
                        </a>
                    );
                } else /*if (item.media_type === "CAROUSEL_ALBUM")*/ {
                    return (
                        <>
                            <div className={`${styles.item} rounded-3 shadow`}>
                                <a key={item.id} href={item.permalink} target="_blank" >
                                    <img src={item.media_url} />
                                </a>
                                <p class="pt-4">{item.caption}</p>
                            </div>
                        </>
                    );
                }
            })}
        </section>
    );
}