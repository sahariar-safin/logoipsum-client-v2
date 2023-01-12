import axios from "axios";

export const planshare = async (body) => {
  return await axios.post("/plan-share-form", body);
};
