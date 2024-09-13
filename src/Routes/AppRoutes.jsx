import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Details from "../pages/Detail";
import Favs from "../pages/Favs";
import PageNotFound from "../pages/PageNotFound";
import App from "../App";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Details />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
