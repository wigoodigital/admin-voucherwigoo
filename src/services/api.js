import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3003/",
    baseURL2: "https://api.voucherwigoo.com.br/"
});

export default api;