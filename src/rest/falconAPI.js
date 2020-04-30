import Axios from "axios";

export const getToken = () => {
  return Axios.post("https://findfalcone.herokuapp.com/token");
};

export default {
  fetchPlanets: () => {
    return Axios.get("https://findfalcone.herokuapp.com/planets");
  },
  fetchVeichels: () => {
    return Axios.get("https://findfalcone.herokuapp.com/vehicles");
  },
  findfalcone: postData => {
    return getToken().then(res => {
      return Axios.post("https://findfalcone.herokuapp.com/find", {
        token: res.token,
        ...postData
      });
    });
  }
};
