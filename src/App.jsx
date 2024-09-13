import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import {
  ContextGlobal
} from "./global.context";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ContextGlobal).contextValue;

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
