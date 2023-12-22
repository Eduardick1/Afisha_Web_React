import React, { useEffect } from "react";
import CardWrapper from "../../CardWrapper";
import styles from "./index.module.scss";
import { IPlace } from "../../../utils/TYPES";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import { fetchFollowers } from "../../../Redux/followedSlice";

export default function AddBlock() {
  const { banners, title } = useAppSelector((state) => state.follow);
  const { idsFollowed } = useAppSelector(
    (state) => state.localStore.IDSfollowers
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFollowers());
  }, [idsFollowed]);
  return (
    <>
      {banners.length > 0 ? (
        <section className={styles.Add_block_container}>
          <h3 className={styles.Add_block_Title}>{title}:</h3>
          <div className={styles.Add_block_cards_container}>
            {banners.map((banner) => (
              <CardWrapper key={banner.id + title} card={banner}></CardWrapper>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
