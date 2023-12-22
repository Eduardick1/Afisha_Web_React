import React from "react";
import PRE_LOADER_SKELETON from "../../../../utils/PRE_LOADER_SKELETON";
import { setPage } from "../../../../Redux/EventsSlice";
import { useAppDispatch, useAppSelector } from "../../../../Redux/store";
import { Pagination, Stack } from "@mui/material";

export default function BtnShowmore() {
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector((state) => state.banners);
  const { total } = useAppSelector((state) => state.pagination);
  const { Page } = useAppSelector((state) => state.sessionStore.filter);

  return (
    <>
      {isLoading || isError ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PRE_LOADER_SKELETON
            number={1}
            css={{
              height: "3rem",
              width: "15rem",
            }}
          />
        </div>
      ) : (
        <Stack justifyContent="center" alignItems="center" color="#fff">
          <Pagination
            onChange={(e: React.ChangeEvent<unknown>, value: number) => {
              dispatch(setPage(value));
            }}
            count={total}
            page={Page}
            defaultPage={Page}
            size="large"
            shape="rounded"
            variant="text"
          />
        </Stack>
      )}
    </>
  );
}
