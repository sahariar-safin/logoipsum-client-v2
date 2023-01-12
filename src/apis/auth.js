import axios from "axios";

// SignInApi
export const SignInApi = async (body) => {
    return await axios.post(`/auth/login`, body);
};

// SignUpApi
export const SignUpApi = async (body) => {
    return await axios.post(`/auth/register`, body);
};

// socialAuthApi
export const socialAuthApi = async (body) => {
    const response = await axios.post("/auth/login/social", body);
    return response;
};

// get me 
export const getMe = async (body) => {
    const response = await axios.get('/auth/me');
    return response;
}