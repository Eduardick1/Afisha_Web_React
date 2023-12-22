import React from "react";
import styles from "../index.module.scss";

export default function RegComp() {
  return (
    <>
      <div className="">
        <label>Email address</label>
        <input type="email" className="" placeholder="Enter email" />
      </div>
      <div className="">
        <label>Password</label>
        <input type="password" className="" placeholder="Enter password" />
      </div>
    </>
  );
}
