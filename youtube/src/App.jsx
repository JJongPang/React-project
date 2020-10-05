import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search-header/Search_Header";
import VideoList from "./components/video_list/Video_List";
import styles from "./App.module.css";
import Video_Detail from "./components/video_detail/Video_Detail";

const App = ({ youtube }) => {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideo(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideo(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Video_Detail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
          ;
        </div>
      </section>
    </div>
  );
};

export default App;
