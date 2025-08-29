import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back </h1>
        
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={() => navigate("/list")}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
