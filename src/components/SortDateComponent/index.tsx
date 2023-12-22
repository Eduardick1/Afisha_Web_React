import React from "react";
import styles from "./index.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setDate } from "../../Redux/EventsSlice";

export default function DatePickerViews() {
  const { date } = useAppSelector((state) => state.sessionStore.filter);
  const dispatch = useAppDispatch();

  return (
    <div style={{ zIndex: "20" }}>
      <DatePicker
        className={styles.picker}
        selected={new Date(date)}
        onChange={(d) => {
          if (d) dispatch(setDate(d));
        }}
      />
    </div>
  );
}
