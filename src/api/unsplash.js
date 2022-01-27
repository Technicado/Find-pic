import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZMMRFEi6187I7zYM2OPw9iBbQulVgUgIcT9WCOggjLg",
  },
});
