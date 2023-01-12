import axios from "axios";

export const createCustomer = async (body) => {
    return await axios.post('/customer', body)
};  