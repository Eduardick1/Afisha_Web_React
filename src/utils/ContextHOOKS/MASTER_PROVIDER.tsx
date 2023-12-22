import React from "react";
import { childProp } from "../TYPES";
import { VisitedContextProvider } from "./VisitedContext";
import { FollowedContextProvider } from "./FollowedContext";

export default function MasterContextProvider({ children }: childProp) {
  return (
    <FollowedContextProvider>
      <VisitedContextProvider>{children}</VisitedContextProvider>
    </FollowedContextProvider>
  );
}
