// config.js
const BASE_URL = process.env.VITE_APP_BASE_URL || "http://13.233.9.241:4001";

console.log(BASE_URL);

console.log("process.env", process.env.VITE_APP_BASE_URL);

export default BASE_URL;
