/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "../index.module.scss";
import { debounce } from "lodash";
import { IPlace } from "../../../utils/TYPES";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import { removeFollowers, addFollowers } from "../../../Redux/FollowedIDS";

export default function CardAtributes({ card }: { card: IPlace }) {
  const { idsFollowed } = useAppSelector(
    (state) => state.localStore.IDSfollowers
  );
  const dispatch = useAppDispatch();

  let DD = new Date(card.date).toLocaleString("default", { day: "2-digit" });
  let MM = new Date(card.date).toLocaleString("default", { month: "short" });

  const debouncedSetFollow = debounce(() => {
    idsFollowed.includes(card.id)
      ? dispatch(removeFollowers(card.id))
      : dispatch(addFollowers(card.id));
  }, 150);

  return (
    <div className={styles.popUP_container}>
      <header className={styles.popUP_header}>
        <span className={styles.popUp_header_date}>
          <span className={styles.popUp_header_date_day}>{DD}</span>
          <span className={styles.popUp_header_date_month}>{MM}</span>
        </span>
        <span className={styles.popUp_header_like}>
          <svg
            className={
              idsFollowed.includes(card.id)
                ? styles.popUp_header_like_svg_followed
                : styles.popUp_header_like_svg
            }
            onClick={(e) => {
              e.stopPropagation();
              return debouncedSetFollow();
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={"transparent"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </header>
      <footer className={styles.popUP_footer}>
        <div className={styles.popUP_desc}>
          <h1 className={styles.popUp_desc_title}>{card.event}</h1>
          <p className={styles.popUP_desc_location}>{card.place}</p>
        </div>
      </footer>
    </div>
  );
}
