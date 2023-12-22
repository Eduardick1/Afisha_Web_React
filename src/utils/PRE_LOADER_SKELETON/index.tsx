import { CSSProperties } from "react";

interface ISKELETON {
  number: number;
  css?: CSSProperties;
}

export default function PRE_LOADER_SKELETON({ number, css }: ISKELETON) {
  return (
    <>
      {Array(number)
        .fill(" ")
        .map((card, index) => (
          <div
            style={{
              ...css,
              borderRadius: "1rem",
              animation: "SKELETON-LOADING 1s linear infinite alternate",
            }}
            key={index}
          >
            {card}
          </div>
        ))}
    </>
  );
}
