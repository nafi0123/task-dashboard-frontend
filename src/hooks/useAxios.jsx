import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://task-api-eight-flax.vercel.app' 
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;