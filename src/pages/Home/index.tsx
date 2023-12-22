import React from "react";
import HomeHeadComponents from "./HomeHeadComponent";

import HomeLayout from "./HomeLayout/Index";
import BtnShowmore from "./HomeLayout/BTN_showmore";
import styles from "./index.module.scss";

export default function HomePage() {
  return (
    <main className={styles.HOME}>
      <HomeHeadComponents />
      <HomeLayout />
      <BtnShowmore />
    </main>
  );
}
