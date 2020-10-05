import React from "react";
import styles from "./Video_Detail.module.css";

const Video_Detail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default Video_Detail;
