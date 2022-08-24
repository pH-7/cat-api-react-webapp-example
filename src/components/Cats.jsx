import { API_KEY, API_URL } from "../constants/appDetails";
import CatDetails from "./CatDetails";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Cats = () => {
  const maximumCatsPerPage = 20;
  const apiUrl = `${API_URL}images/search?breed_ids=beng&limit=${maximumCatsPerPage}`;

  const [cats, setCats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const requestCats = async () => {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    };

    setIsLoading(true);

    try {
      const apiResponse = await fetch(apiUrl, { headers });
      const jsonResult = await apiResponse.json();

      // Loging for debugging
      console.log(jsonResult);

      setCats(jsonResult);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
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
          ) : (
            <>
              {Object.values(cats).map((cat) => (
                <Col key={cat.id} md={3} className="p-1">
                  <CatDetails catDetails={cat} />
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cats;
