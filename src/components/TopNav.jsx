import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";

const TopNav = () => {
  return (
    <>
      <Navbar className="nav w-100 h-auto" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="text w-5 f">
            <span>
              <img src={logo} alt="" />
            </span>
            Treaty
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className=" text-info  text-body-emphasis ">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className=" text-info">
              About
            </Nav.Link>
            <Nav.Link href="#pricing" className=" text-info">
              Services
            </Nav.Link>
            <Nav.Link href="#pricing" className=" text-info fw-semibold fa">
              Contact
            </Nav.Link>
          </Nav>
          <div className="btn">
            <button className="btn btn-outline-info rounded-pill">
              Login/Register
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
