import React from "react";
import Logo from "../../../utils/Logo";
import { RiSearchLine } from "react-icons/ri";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import { setAuth } from "../../../Redux/authSlice";

export default function Header() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.HEADER}>
      <Link to="/" style={{ height: "100%" }}>
        <Logo />
      </Link>
      <span
        className={styles.Auth}
        style={{}}
        onClick={() => !isAuth && dispatch(setAuth(!isAuth))}
      >
        {isAuth ? <Link to="Auth">Sign In</Link> : "Sign Out"}
      </span>
    </header>
  );
}
