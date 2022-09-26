import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <Container className='justify-content-center mt-5 mb-5'>
            <hr />
            <Row>
                <Col md={3}>
                    Column One
                </Col>
                <Col md={3}>
                    Column 2
                </Col>
                <Col md={{span: 3, offset: 3}}>
                    Column 3
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
