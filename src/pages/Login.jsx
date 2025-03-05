import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ username: "testuser" }));
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 text-white px-6 py-2 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;

