import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
