import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const histroy = useHistory();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          histroy.push("/profile");
        }}
      >
        Go do Profile
      </button>
    </>
  );
};

export default Home;
