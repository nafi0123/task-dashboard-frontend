import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
 
    }
    setLoading(false);
  }, []);


  const login = (data) => {
    setToken(data.token);
    setUser({ id: data.id, email: data.email });
    localStorage.setItem("token", data.token);
  };


  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const authInfo = {
    user,
    token,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;