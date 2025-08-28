import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner, Alert, Badge } from "react-bootstrap";
import { getCharacters, portraitUrl } from "../services/simpsons"; // ⬅️ nuevo import

const CharacterSection = () => {
  const [characters, setCharacters] = useState([]); // solo results[]
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchCharacters() {        // ⬅️ función dentro del useEffect
      setLoading(true);
      setErrorMsg("");
      try {
        const results = await getCharacters(1); // ⬅️ consulta desde el service
        setCharacters(results);                 // guardamos data.results
      } catch (err) {
        console.error(err);
        setErrorMsg("No se pudieron cargar los personajes. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters(); // llamada inmediata
  }, []);

  return (
    <div className="border border-warning rounded p-3 bg-light">
      <h2 className="mb-3">Listado de personajes</h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" role="status" />
        </div>
      )}

      {errorMsg && (
        <Alert variant="danger" className="my-3">
          {errorMsg}
        </Alert>
      )}

      {!loading && !errorMsg && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {characters.map((ch) => (
            <Col key={ch.id}>
              <Card className="h-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={portraitUrl(ch.id)}  {/* ⬅️ solo pasás el ID */}
                  alt={ch.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x300?text=Simpsons";
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex justify-content-between align-items-start">
                    <span className="fw-bold">{ch.name}</span>
                    <Badge bg={ch.status === "Alive" ? "success" : "secondary"}>
                      {ch.status || "—"}
                    </Badge>
                  </Card.Title>
                  <Card.Text className="text-muted mb-2">
                    <strong>Ocupación:</strong> {ch.occupation || "—"}
                    <br />
                    <strong>Edad:</strong> {ch.age ?? "—"}
                  </Card.Text>
                  {/* <Button variant="warning" className="mt-auto rounded-pill">Agregar a favoritos ⭐</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CharacterSection;
