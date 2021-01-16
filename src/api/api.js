import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.libralibre.online:9000/main/",
  withCredentials: true,
});

export const usersAPI = {
  getUsers() {
    return instance
      .get(`subscriptions/VitaVitaChikaChika`)
      .then((response) => response.data);
  },
  registrate(regData) {
    return instance
      .post(`subscriptions`, { regData })
      .then((response) => response.data);
  },
  getIP() {
    return axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => response.data);
  },
};
