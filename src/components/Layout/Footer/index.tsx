import React, { memo } from "react";
import Logo from "../../../utils/Logo";
import styles from "./index.module.scss";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>All rights protected LICENSE</p>
    </footer>
  );
});
export default Footer;
