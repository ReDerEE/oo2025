import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function Menu() {
  const { t, i18n } = useTranslation()
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>{t('nav.decathlon')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/player"}>{t('nav.players')}</Nav.Link>
            <Nav.Link as={Link} to={"/points"}>{t('nav.points')}</Nav.Link>
            {/* <Nav.Link as={Link} to={"/orders"}>Orders</Nav.Link> */}
            <NavDropdown title="Management" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/manage/player"}>{t('nav.manage-player')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/manage/results"}>
              {t('nav.manage-results')}
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to={"/"}>Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/"}>
                Separated link
              </NavDropdown.Item>  */}
            </NavDropdown>
            <Nav.Link as={Link} to={"/map"}>{t('nav.map')}</Nav.Link>
           
          </Nav>
          {/* <Nav>
            <Nav.Link as={Link} to={"/"}>More deets</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={"/"}>
              Dank memes
            </Nav.Link>
          </Nav> */}
          <Nav>
          <NavDropdown title={t('nav.lang')} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Button} onClick={()=>i18n.changeLanguage('et')}>Eesti</NavDropdown.Item>
              <NavDropdown.Item as={Button} onClick={()=>i18n.changeLanguage('en')}>English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;