import { ReactNode } from "react";

export type childProp = {
  children: ReactNode;
};

export type FilterCategory = "All" | "Concerts" | "Clubs" | "Kids";

export const FOLLOWED = "followed";
export const VISITED = "visited";

export const CATEGORIES: FilterCategory[] = [
  "Concerts",
  "Clubs",
  "Kids",
  "All",
];

export type CurrentCategory = Exclude<FilterCategory, "All">;

type Link = {
  name: string;
  link: string;
};

export interface IPlace {
  id: string;
  name: string;
  event: string;
  place: string;
  date: string;
  time: string;
  images: string[];
  artists: string[];
  web: Link[];
  price: string;
  age: number;
  dresscode?: string;
  drinks?: string;
  addinfo: string;
  category: CurrentCategory;
}

export interface fetchProps {
  isLoading: boolean;
  isError: boolean;
}

export interface IState extends fetchProps {
  banners: IPlace[];
}
export interface IsingleState extends fetchProps {
  banner: IPlace | null;
}

export interface IPropsBtn {
  name: string;
  link: string;
  purchase: boolean;
}

export const LIMIT_PER_PAGE = 12;
