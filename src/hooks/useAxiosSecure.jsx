import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app", 
});

const useAxiosSecure = () => {
  const { token, logout } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });


    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null;

        if (status === 401 || status === 403) {
          await logout(); 
          navigate("/"); 
        }
        return Promise.reject(error);
      }
    );

  
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [token, logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;