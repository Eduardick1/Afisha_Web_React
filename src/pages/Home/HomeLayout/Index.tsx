import React, { useEffect } from "react";
import styles from "./index.module.scss";
import CategoryLayout from "../../../components/CategoryLayout";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import PRE_LOADER_SKELETON from "../../../utils/PRE_LOADER_SKELETON";
import { fetchBanners } from "../../../Redux/bannersSlice";
import { LIMIT_PER_PAGE } from "../../../utils/TYPES";

export default function HomeLayout() {
  const dispatch = useAppDispatch();
  const { banners, isLoading } = useAppSelector((state) => state.banners);
  const { category, Page } = useAppSelector(
    (state) => state.sessionStore.filter
  );

  useEffect(() => {
    dispatch(fetchBanners({ category, Page }));
  }, [dispatch, category, Page]);

  return (
    <>
      {isLoading ? (
        <div className={styles.Layout_container}>
          <PRE_LOADER_SKELETON number={LIMIT_PER_PAGE} />
        </div>
      ) : (
        <div className={styles.Layout_container}>
          <CategoryLayout banners={banners} />
        </div>
      )}
    </>
  );
}
