import React from "react";
import styles from "../index.module.scss";

export default function LoginComp() {
  return (
    <>
      <div className="mb-3">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
    </>
  );
}
