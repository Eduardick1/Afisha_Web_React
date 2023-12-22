import React from "react";
import styles from "./index.module.scss";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../Redux/store";

export default function HomeTitle() {
  const [SearchParams] = useSearchParams("All");
  const { category } = useAppSelector((state) => state.sessionStore.filter);

  const title = () => {
    switch (category) {
      case "All":
        return "Events";
      case "Clubs":
        return "Parties";
      case "Kids":
        return "Events for kids";
      default:
        return category;
    }
  };
  return (
    <div className={styles.homeTitle_container}>
      <h1 className={styles.homeTitle}>Upcoming {title()?.toLowerCase()}</h1>
    </div>
  );
}
