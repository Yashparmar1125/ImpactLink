import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const googleAuthVolunteer = (code) =>
  api.get(`/volunteer/google/login?code=${code}`);
export const googleAuthNgo = (code) =>
  api.get(`/ngo/google/login?code=${code}`);
export const googleAuthRegister = (code) => {
  api.get(`/volunteer/google/register?code=${code}`);
};
