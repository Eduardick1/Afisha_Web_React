import React, { memo } from "react";
import styles from "./index.module.scss";
import { IPlace } from "../../utils/TYPES";
import { useNavigate } from "react-router-dom";
import CardAtributes from "./CardAtributes";

const CardWrapper = ({ card }: { card: IPlace }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card_wrapper}
      onClick={() => {
        navigate("/" + card.id);
        window.scroll({ left: 0, top: 0, behavior: "smooth" });
      }}
    >
      <CardAtributes card={card} />
      {card.images.map((img, index) => (
        <img
          key={`${index}${card.id}`}
          className={styles.card}
          src={img}
          alt={card.id}
          loading="lazy"
        ></img>
      ))}
    </div>
  );
};

export default CardWrapper;
