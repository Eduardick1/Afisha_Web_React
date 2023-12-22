import React from "react";
import styles from "./index.module.scss";
import { IPropsBtn } from "../../utils/TYPES";
import { WEB, Ifacebook, Iinstagram, Itwitter } from "./icons";

export default function ButtonWeb({ name, link, purchase }: IPropsBtn) {
  const ICON = () => {
    switch (name) {
      case "facebook":
        return Ifacebook;
      case "twitter":
        return Itwitter;
      case "instagram":
        return Iinstagram;
      default:
        return WEB;
    }
  };
  return (
    <a href={link} target="blank" className={styles.Btn}>
      {!purchase ? ICON() : null}
      <span>{name}</span>
    </a>
  );
}
