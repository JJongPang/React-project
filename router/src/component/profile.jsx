import React from "react";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  const histroy = useHistory();
  return (
    <>
      <h1>Profile</h1>
      <button
        onClick={() => {
          histroy.push("/");
        }}
      >
        Go do Home
      </button>
    </>
  );
};

export default Profile;
