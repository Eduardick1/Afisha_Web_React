import React from "react";
import SortComponent from "../../../components/SortComponent";
import HomeTitle from "./HomeTitle";
import SortDateComponent from "../../../components/SortDateComponent";
import styles from "./index.module.scss";

export default function HomeHeadComponents() {
  return (
    <div className={styles.homeHead}>
      <SortComponent />
      <HomeTitle />
      <SortDateComponent />
    </div>
  );
}
