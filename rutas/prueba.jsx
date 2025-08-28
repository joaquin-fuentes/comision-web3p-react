import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner, Alert, Badge } from "react-bootstrap";

const API_URL = "https://thesimpsonsapi.com/api/characters?page=1";
const CDN_BASE = "https://cdn.thesimpsonsapi.com";

// Helper para armar la URL completa de la imagen.
// La API devuelve portrait_path relativo ("/character/21.webp")
// y acá lo convertimos a una URL absoluta.

const CharacterSection = () => {
  // ✅ Guardamos SOLO data.results
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // ✅ Función definida dentro del useEffect y llamada "ahí nomás"
    async function fetchCharacters() {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Guardamos el array que viene en "results"
        setCharacters(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
        setErrorMsg(
          "No se pudieron cargar los personajes. Intenta nuevamente."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters(); // ← llamada inmediata
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
                  src={`${CDN_BASE}/500/character/${ch.id}.webp`}
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

                  {/* Botón para integrar favoritos más adelante */}
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
