import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploder";
import ImageFileInput from "./component/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();

// 컴포넌트 생성(dependency injection)
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
