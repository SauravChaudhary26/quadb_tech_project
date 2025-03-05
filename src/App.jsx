import { Provider, useSelector } from "react-redux";
import store from "./redux/Store";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";


function AppContent() {


  
  const theme = useSelector((state) => state.theme.theme); // Get theme from Redux

  return (
    <div className={theme === "dark" ? "dark bg-black text-white" : "bg-white text-gray-900"}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <Home />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
