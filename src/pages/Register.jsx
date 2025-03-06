import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Store base64-encoded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = () => {
    if (username.trim() === "" || !photo) {
      alert("Please enter a username and upload a profile photo.");
      return;
    }

    dispatch(login({ username, photo }));
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input type="file" accept="image/*" onChange={handlePhotoChange} className="border p-2 rounded w-64" />
      {photo && <img src={photo} alt="Profile Preview" className="h-16 w-16 rounded-full" />}
      <button onClick={handleRegister} className="bg-blue-500 text-white px-6 py-2 rounded">
        Register
      </button>
    </div>
  );
};

export default Register;
