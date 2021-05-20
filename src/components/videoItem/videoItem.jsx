import React from 'react';
import styles from './videoItem.module.css'

const videoItem = ({video : {snippet}}) => {
    return (
        <li className={styles.container}>
            <div className={styles.videoitem}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="thumbnail"></img>

                <div className={styles.metadata}>
                    <p className={styles.title}> {snippet.title} </p> 
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default videoItem;