import React, { useEffect, useLayoutEffect } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { fetchSingleBanner } from "../../Redux/SingleSlice";
import PRE_LOADER_SKELETON from "../../utils/PRE_LOADER_SKELETON";
import ImgBanner from "./ImgBanner";
import DescBanner from "./descBanner";
// import { useVisited } from "../../utils/ContextHOOKS/VisitedContext";

export default function Banner() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // const { VisitedEvents, setVisitedEvents } = useVisited();
  const { banner, isLoading } = useAppSelector((state) => state.single);

  useEffect(() => {
    id && dispatch(fetchSingleBanner({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // useLayoutEffect(() => {
  //   if (banner && !VisitedEvents.includes(banner)) {
  //     setVisitedEvents((prev) => [...prev, banner]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id]);
  return (
    <div className={styles.Single_container}>
      <div className={styles.Single_wrapper_img}>
        {isLoading ? (
          <PRE_LOADER_SKELETON
            number={1}
            css={{ height: "80dvh", width: "20rem" }}
          />
        ) : banner ? (
          <ImgBanner images={banner.images} idBanner={banner.id} />
        ) : null}
      </div>
      <div className={styles.Single_desc_container}>
        {isLoading ? (
          <PRE_LOADER_SKELETON
            number={6}
            css={{ height: "1rem", width: "100%", marginBottom: "1rem" }}
          />
        ) : banner ? (
          <DescBanner {...banner} />
        ) : null}
      </div>
    </div>
  );
}
