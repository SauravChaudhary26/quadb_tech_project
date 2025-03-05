
// src/App.jsx
import { Provider } from "react-redux";
import store from "../src/redux/Store";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
