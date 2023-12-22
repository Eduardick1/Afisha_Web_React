import {
  Dispatch,
  useState,
  useContext,
  createContext,
  SetStateAction,
} from "react";
import { IPlace, childProp } from "../TYPES";

interface IFollowed {
  followedEvents: IPlace[];
  setFollowedEvents: Dispatch<SetStateAction<IPlace[]>>;
}

const FollowedContext = createContext<IFollowed | null>(null);

export const FollowedContextProvider = ({ children }: childProp) => {
  const [followedEvents, setFollowedEvents] = useState<IPlace[]>([]);

  return (
    <FollowedContext.Provider value={{ followedEvents, setFollowedEvents }}>
      {children}
    </FollowedContext.Provider>
  );
};

export function useFollowed() {
  const context = useContext(FollowedContext);
  if (!context) {
    throw new Error("You can use context only inside Followed.Provider");
  }
  return context;
}
