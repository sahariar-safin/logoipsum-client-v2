import axios from 'axios';
import { createContext, useEffect, useReducer, useState } from 'react';
import { getMe, SignInApi, SignUpApi, socialAuthApi } from '../apis/auth';


// set session
const setSession = (token) => {
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
    } else {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const init = async () => {
            try {
                const serviceToken = window.localStorage.getItem('token');
                if (serviceToken) {
                    setSession(serviceToken);
                    const response = await getMe();
                    const { user } = response.data;
                    setUser(user);
                    setIsLoggedIn(true);
                    setIsInitialized(true);
                } else {
                    setIsLoggedIn(false);
                    setIsInitialized(true);
                }
            } catch (err) {
                setSession(null);
                setIsLoggedIn(false);
                setUser(null)
                setIsInitialized(true);
            }
        };

        init();
    }, []);

    const LoginController = async (body) => {
        // todo: this flow need to be recode as it not verified
        const { data } = await SignInApi(body);
        if (data.success) {
            setSession(data.token);
            setUser(data.user);
            setIsLoggedIn(true);
        }
    };

    const RegisterController = async (body) => {
        // todo: this flow need to be recode as it not verified
        const { data } = await SignUpApi(body);
        if (data.success) {
            setSession(data.token);
            setUser(data.user);
            setIsLoggedIn(true);
        }
    };

    const logout = () => {
        setSession(null);
        setIsLoggedIn(false);
        setUser(null)
    };

    // social sign in
    const socialSignIn = async (accessToken) => {
        const { data } = await socialAuthApi({ accessToken: accessToken });
        setSession(data.token);
        setUser(data.user);
        setIsLoggedIn(true);
    }


    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                isInitialized,
                user,
                LoginController,
                RegisterController,
                logout,
                socialSignIn
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;