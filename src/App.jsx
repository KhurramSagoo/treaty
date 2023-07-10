import "./App.scss";
import Header from "./components/Header";
import Sample from "./components/Sample";
import SlidesCarousels from "./components/SlidesCarousels;";
import TopNav from "./components/TopNav";
import "./Style/bootstrap-dist/css/bootstrap-grid.css";
import "./Style/bootstrap-dist/css/bootstrap.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Material from "../src/components/Material";
import Center from "./components/Center";
import IconCard from "./components/IconCard";
import Contact from "./components/Contact";
import Nav2 from './components/Nav2'
import Footer from "./components/Footer";

// import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    <Nav2 />
      {/* <TopNav /> */}
      <SlidesCarousels />
      {/* <Header /> */}
      {/* <Sample/> */}
      {/* <Material /> */}
      <Center />
      <IconCard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
