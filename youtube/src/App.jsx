import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/Video_List";

const App = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBg7t4jIo0SPuwAsi8CO8EMCFSFG5KBYMk",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
};

export default App;
