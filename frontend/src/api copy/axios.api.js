import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export const googleLogin = (auth_token) => {
  api.post(
    "/api/auth/google/login",
    { auth_token },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
