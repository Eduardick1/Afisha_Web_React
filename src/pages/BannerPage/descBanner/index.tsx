import React from "react";
import styles from "../index.module.scss";
import { IPlace } from "../../../utils/TYPES";
import ButtonWeb from "../../../components/ButtonWeb";

export default function DescBanner(banner: IPlace) {
  const PlaceDate = (date: string) =>
    new Date(date).toLocaleDateString("en-us", {
      day: "numeric",
      month: "long",
    });
  const PlaceTime = (time: string) => time.split("-");
  return (
    <>
      {banner.name && (
        <>
          <br />
          <h2 style={{ fontSize: "4rem" }}>{banner.name.toUpperCase()}</h2>
          <br />
          <br />
        </>
      )}

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {banner.event && <p style={{ fontSize: "2rem" }}>{banner.event} </p>}
        {banner.date && (
          <>
            <br />
            <p style={{ fontSize: "2rem" }}> {PlaceDate(banner.date)}</p>
            <br />
            <br />
          </>
        )}
      </div>
      <br />
      <div style={{ display: "flex", gap: "1rem" }}>
        {banner.artists &&
          banner.artists.map((artist) => (
            <p key={artist}>{artist.toUpperCase()}</p>
          ))}
      </div>
      <br />

      <div style={{ display: "flex", gap: "1rem" }}>
        {banner.price && (
          <>
            <p>
              {banner.price === "free entry"
                ? banner.price
                : `Entry: ${banner.price}`}
            </p>
            <br />
            <br />
          </>
        )}
        {banner.drinks && (
          <>
            <br />
            <p> Drinks: {banner.drinks}</p>
          </>
        )}
        {banner.dresscode && (
          <>
            <p>Dresscode: {banner.dresscode}</p>
            <br />
            <br />
          </>
        )}
      </div>

      {banner.time && (
        <>
          <p>
            Open from: {PlaceTime(banner.time)[0]} till:{" "}
            {PlaceTime(banner.time)[1]}
          </p>
          <br />
          <br />
        </>
      )}

      {banner.addinfo && (
        <>
          <p>{banner.addinfo}</p>
          <br />
          <br />
        </>
      )}

      <div className={styles.Single_desc_btns_web}>
        {banner.web &&
          banner.web.map((site) => (
            <ButtonWeb
              key={"btn" + banner.id + site}
              name={site.name}
              link={site.link}
              purchase={false}
            />
          ))}
      </div>
    </>
  );
}
