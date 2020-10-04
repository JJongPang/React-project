import React from "react";
import VideoItem from "../video_item/Video_Item";
import styles from "./Video_List.module.css";

const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
