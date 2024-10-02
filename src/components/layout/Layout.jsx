import { BrowserRouter } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      {children}
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Layout;
