import { API_KEY, API_URL } from "../constants/appDetails";
import CatDetails from "./CatDetails";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Cats = () => {
  const maximumCatsPerPage = 20;
  const apiUrl = `${API_URL}images/search?breed_ids=beng&limit=${maximumCatsPerPage}`;

  const [cats, setCats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestCats = async () => {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    };

    try {
      setIsLoading(true);

      const apiResponse = await fetch(apiUrl, { headers });
      const jsonResult = await apiResponse.json();

      // Logging for debugging
      console.log('cats result', jsonResult);

      setCats(jsonResult);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCats();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {isLoading ? (
            <Spinner animation="grow" />
          ) : cats ? (
            <>
              {Object.values(cats).map((cat) => (
                <Col key={cat.id} md={3} className="p-1">
                  <CatDetails catDetails={cat} />
                </Col>
              ))}
            </>
           ) : (
            <h3 className='text-center text-danger fw-bold'>
              Impossible to retrieve cats
            </h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cats;
