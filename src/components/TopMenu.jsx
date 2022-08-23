import {
  APP_NAME,
  AUTHOR_WEBSITE,
  CONTACT_EMAIL,
} from "../constants/appDetails";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={`mailto:${CONTACT_EMAIL}`}>Contact</Nav.Link>
          <Nav.Link href={`${AUTHOR_WEBSITE}`}>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
