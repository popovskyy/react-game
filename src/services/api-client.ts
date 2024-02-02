import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6cbed0250e814e22a1d9d737efe3181a",
  },
});
