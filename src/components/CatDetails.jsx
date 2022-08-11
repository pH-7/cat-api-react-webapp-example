import { Card, ListGroup } from "react-bootstrap";

const CatDetails = ({ catDetails }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{catDetails?.breeds[0]?.name}</Card.Title>
        <p>{catDetails?.breeds[0]?.description}</p>

        <Card.Header>Information</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Life Span: {catDetails?.breeds[0]?.life_span}
          </ListGroup.Item>

          <ListGroup.Item>
            Origin: {catDetails?.breeds[0]?.origin}
          </ListGroup.Item>

          <ListGroup.Item>
            Origin: {catDetails?.breeds[0]?.temperament}
          </ListGroup.Item>
        </ListGroup>

        <Card.Img
          src={catDetails.url}
          alt={`Cat photo, breed ${catDetails.name}`}
          width={catDetails.width}
          height={240}
          className="rounded"
        />
        <p className="text-center mt-2">
          <a
            className="text-muted"
            href={`${catDetails?.breeds[0]?.wikipedia_url}`}
          >
            Wikipedia
          </a>
        </p>
      </Card.Body>
    </Card>
  );
};

export default CatDetails;
