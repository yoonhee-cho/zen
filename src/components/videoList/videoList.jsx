import React from 'react';
import VideoItem from '../videoItem/videoItem'
import styles from './videoList.module.css'

const VideoList = (props) => {
    return (
        <ul className={styles.videolist}>
           {props.videos.map((video) => {
               return <VideoItem video={video} />
            })
           }
        </ul>
    );
};

export default VideoList;