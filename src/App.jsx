// src/App.jsx
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/Store";
import Layout from "./Layout";

function AppContent() {
  const theme = useSelector((state) => state.theme.theme);
  // The outer container toggles the dark class so Tailwind's dark: styles work as expected.
  return (
    <div className={theme === "dark" ? "dark bg-black text-white" : "bg-white text-gray-900"}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
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
