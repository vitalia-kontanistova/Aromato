import axios from "axios";

const instance = axios.create({
  baseURL: "https://",
  withCredentials: true,
  //   headers: { "API-KEY": "104e209f-65fb-44e1-a272-296426fdf9f9" },
});

export const usersAPI = {
  registrate(name, email, pass) {
    return instance
      .post(`users`, { regData: JSON.stringify({ name, email, pass }) })
      .then((response) => response.data);
  },
};
