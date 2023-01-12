import axios from "axios";

export const taxpartner = async (body) => {
  return await axios.post("/tax-partner", body);
};