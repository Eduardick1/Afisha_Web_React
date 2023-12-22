import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as ReactLogo } from "../../data/epic-drugs.svg";

export default function Logo() {
  return (
    <div className={styles.container_logo}>
      <ReactLogo className={styles.Logo} />
    </div>
  );
}
