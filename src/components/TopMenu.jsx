import {Container, Nav, Navbar} from "react-bootstrap";

const TopMenu = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">React Simple App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="mailto:hi@ph7.me">Contact</Nav.Link>
                <Nav.Link href="https://ph7.me/">About</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default TopMenu;
