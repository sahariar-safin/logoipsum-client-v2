import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./assets/styles/globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";
// axios.defaults.baseURL = 'https://logoipsum-server-production.up.railway.app/api/v1';
axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.headers.common['Authorization'] = `Bearer ${ localStorage.getItem("token") }`;
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (Number(error.response.status) === 401) {
    localStorage.clear();
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
