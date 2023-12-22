import axios from "axios";
import { IPlace } from "./TYPES";

export async function fetchFollowedBanners(): Promise<IPlace[]> {
  try {
    const responce = await axios.get("http://localhost:3000/followed");
    if (responce.statusText !== "OK") {
      throw new Error("fetching error");
    }
    return responce.data;
  } catch {
    return [];
  }
}

export async function saveFollowedBanners(banners: IPlace[]) {
  console.log("start saving followers");
  const responce = await axios.put("http://localhost:3000/followed", banners);
  console.log("followers saved");
  console.log(responce);
}
