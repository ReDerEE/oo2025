import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
            <Nav.Link as={Link} to={"/arrays"}>Arrays</Nav.Link>
            <Nav.Link as={Link} to={"/orders"}>Orders</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/manage/products"}>Manage products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/manage/categories"}>
                Manage categories
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to={"/"}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/"}>
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/"}>More deets</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={"/"}>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;