import axios from "axios";
import is from "is_js";

const instance = axios.create({
  baseURL: "http://www.libralibre.online:9000/main/",
  withCredentials: true,
});

export const usersAPI = {
  registrate({ name, email, phone }) {
    return instance
      .post(`subscriptions`, { Name: name, Email: email, Phone: phone })
      .then((response) => response.data);
  },
  setIP() {
    return axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => response.data);
  },
  setOS() {
    if (is.windows()) return "Windows";
    if (is.mac()) return "MacOS";
    if (is.linux()) return "Linux";
    if (is.android()) return "Android";
    if (is.ios()) return "iOS";
  },
  setBrowser() {
    if (is.ie()) return "IntrnetExplorer";
    if (is.edge()) return "Microsoft Edge";
    if (is.chrome() && is.not.opera()) return "Google Chrome";
    if (is.firefox()) return "Firefox";
    if (is.opera()) return "Opera";
    if (is.safari()) return "Safari";
  },
  sendUserMetaData(userOs, userBrowser, userIp) {
    let metaData = JSON.stringify({ userOs, userBrowser, userIp });
    alert(metaData); // ----
    return instance.post(`counter/VitaVitaChikaChika`, { Data: metaData });
  },

  sendUserData(name, email, phone) {
    let userData = JSON.stringify({ Name: name, Email: email, Phone: phone });
    alert(userData); // ----
    return instance.post(`subscriptions`, userData);
  },
};
