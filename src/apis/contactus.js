import axios from "axios";

export const contactus = async (body) => {
    return await axios.post("/contact-us", body)
}