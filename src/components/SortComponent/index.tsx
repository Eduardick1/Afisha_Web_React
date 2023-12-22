import React from "react";

import styles from "./index.module.scss";
import { CATEGORIES } from "../../utils/TYPES";
import { setCategory, setPage } from "../../Redux/EventsSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
export default function SortComponent() {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.sessionStore.filter);
  const { isLoading } = useAppSelector((state) => state.banners);
  return (
    <Dropdown>
      <div className={styles.DropDown}>
        <MenuButton
          disabled={isLoading}
          className={styles.DropDown_item_active}
        >
          sort: {category}
        </MenuButton>
        <Menu className={styles.DropDown_list}>
          {CATEGORIES.filter((item) => item !== category).map((item, index) => (
            <MenuItem
              key={index + item}
              className={styles.DropDown_item}
              onClick={() => {
                dispatch(setCategory(item));
                dispatch(setPage(0));
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Dropdown>
  );
}
