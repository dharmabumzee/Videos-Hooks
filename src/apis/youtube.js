import axios from "axios";

const KEY = "AIzaSyBeBfSSIDT3xq4B-TL46nHjT8Ma0skll9Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  },
});
