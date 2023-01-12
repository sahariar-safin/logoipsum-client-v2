import axios from "axios";

export const taxpartner = async (body) => {
  return await axios.post("/tax-partner", body);
};

export const taxpartnersearch = async (query) => {
  return await axios.get(`/real-tax-partner/${ query }`);
}