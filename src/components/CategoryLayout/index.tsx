import React from "react";
import CardWrapper from "../CardWrapper";
import { IPlace } from "../../utils/TYPES";

export default function Layout({ banners }: { banners: IPlace[] }) {
  return (
    <>
      {banners &&
        banners.map((card) => (
          <CardWrapper key={card.id} card={card}></CardWrapper>
        ))}
    </>
  );
}
