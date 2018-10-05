import Constants from "../config/api";

export default class Tip {
  getDataFromApi() {
    return fetch(Constants.API).then(res => res.json());
  }
}
