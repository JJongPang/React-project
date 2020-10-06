import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./service/firebase";
import Login from "./component/login/login";

const App = () => {
  return <Login />;
};

export default App;
