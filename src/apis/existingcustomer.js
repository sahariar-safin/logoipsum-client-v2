import axios from "axios";

export const existingCustomer = async (body) => {
    return await axios.post('/existing-customer', body)
};  