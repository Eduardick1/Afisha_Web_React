import React from "react";
import styles from "../index.module.scss";

interface IbannerIMG {
  images: string[];
  idBanner: string;
}

export default function ImgBanner({ images, idBanner }: IbannerIMG) {
  return (
    <>
      {images.map((img, index) => (
        <img
          loading="lazy"
          className={styles.Single_img}
          key={idBanner + index}
          src={img}
          alt={idBanner + " image"}
        />
      ))}
    </>
  );
}
