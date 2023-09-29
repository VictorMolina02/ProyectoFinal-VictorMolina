import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
