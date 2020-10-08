import React from "react";
import { useState } from "react";
import { useImperativeHandle } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "jong",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "whdgus92",
      message: "go go go",
      fileName: "jong",
      fileURL: null,
    },
    {
      id: "2",
      name: "kong",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "whdgus92",
      message: "go go go",
      fileName: "jong",
      fileURL: "jong.png",
    },
    {
      id: "3",
      name: "long",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "whdgus92",
      message: "go go go",
      fileName: "jong",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
