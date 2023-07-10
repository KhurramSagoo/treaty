import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";

function Nav2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-auto">
      <Container fluid>
        <Navbar.Brand href="#">
          <span>
            {" "}
            <img src={logo} alt="" />
          </span>
          Treaty
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" ms-auto  my-2 my-lg-0" style={{ maxHeight: "100%" }}>
            <Nav.Link href="#action1" className="text-info nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-info">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="text-info">
              Services
            </Nav.Link>
            <Nav.Link href="#action2" className="text-info">
              {" "}
              Contact
            </Nav.Link>
            <div className="btn ">
              {" "}
              <button className="btn btn-group-lg btn-outline-info rounded-pill ">
                Login/Register
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;
