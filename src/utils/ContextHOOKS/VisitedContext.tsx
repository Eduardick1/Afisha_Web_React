import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";
import { IPlace, childProp } from "../TYPES";

interface IVisited {
  VisitedEvents: IPlace[];
  setVisitedEvents: Dispatch<SetStateAction<IPlace[]>>;
}

const VisitedContext = createContext<IVisited | null>(null);

export const VisitedContextProvider = ({ children }: childProp) => {
  const [VisitedEvents, setVisitedEvents] = useState<IPlace[]>([]);
  return (
    <VisitedContext.Provider value={{ VisitedEvents, setVisitedEvents }}>
      {children}
    </VisitedContext.Provider>
  );
};

export function useVisited() {
  const context = useContext(VisitedContext);
  if (!context) {
    throw new Error("You can use context only inside Followed.Provider");
  }
  return context;
}
