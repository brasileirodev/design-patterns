import axios, { AxiosInstance } from "axios";

const ApiClient = (() => {
  let instance: AxiosInstance | null = null;

  const createInstance = (): AxiosInstance => {
    return axios.create({
      baseURL: "https://api.example.com",
      headers: { "Content-Type": "application/json" },
    });
  };

  return {
    getInstance: (): AxiosInstance => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage Example
const api = ApiClient.getInstance();

api
  .get("/data")
  .then((response) => console.log("API Data:", response.data))
  .catch((error) => console.error("API Error:", error));

export default ApiClient;
