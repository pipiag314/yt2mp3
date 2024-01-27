import axios from "axios";
import { parseIdFromLink } from "../utils";

export const fetchYtToMp3 = async (url) => {
  const parsedId = parseIdFromLink(url);
  const options = {
    method: "GET",
    url: import.meta.env.VITE_RAPID_API_URL,
    params: { id: parsedId },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  try {
    // console.log(typeof parsedId)
    if(!parsedId) alert("Nothing is found!");
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
