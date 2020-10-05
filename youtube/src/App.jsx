import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search-header/Search_Header";
import VideoList from "./components/video_list/Video_List";
import styles from "./App.module.css";

const App = ({ youtube }) => {
  const [videos, setVideo] = useState([]);

  const search = (query) => {
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
      <VideoList videos={videos} />;
    </div>
  );
};

export default App;
