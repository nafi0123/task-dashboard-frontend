import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Login = () => {
  const [email, setEmail] = useState("user1@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const  axiosSecure = useAxiosSecure(); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
 
      const response = await  axiosSecure.post("/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        login(response.data); 
        navigate("/dashboard"); 
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid email or password! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
      >
     
        <div className="bg-[#065f46] p-10 text-white text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-md"
          >
            <span className="text-2xl font-bold">🚀</span>
          </motion.div>
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome Back</h2>
          <p className="text-emerald-100/80 mt-2 font-medium">Please enter your details</p>
        </div>

        <form onSubmit={handleLogin} className="p-10 space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-[#065f46]/10 focus:border-[#065f46] outline-none transition-all bg-gray-50/50"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-[#065f46]/10 focus:border-[#065f46] outline-none transition-all bg-gray-50/50"
              placeholder="••••••••"
              required
            />
          </div>

   
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#065f46] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-900/30 hover:bg-[#047857] transition-all flex items-center justify-center disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </div>
            ) : "Sign In"}
          </motion.button>

          <p className="text-center text-sm text-gray-500 font-medium">
            Don't have an account? <span className="text-[#065f46] cursor-pointer hover:underline">Contact Admin</span>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;