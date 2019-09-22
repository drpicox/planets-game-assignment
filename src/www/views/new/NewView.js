import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import useInput from "../../lib/useInput";
import useSubmitDispatch from "../../lib/useSubmitDispatch";
import newGame from "../../ducks/game/actions/newGame";

export default function NewView() {
  const [mapCode, onMapCode] = useInput("");
  const submit = useSubmitDispatch(newGame, mapCode);

  return (
    <Container>
      <br />
      <br />
      <h1>Create a new universe</h1>
      <br />
      <Row>
        <Col md={4}>
          <Form onSubmit={submit}>
            <Form.Group controlId="mapCode">
              <Form.Label>Map code</Form.Label>
              <Form.Control
                type="text"
                value={mapCode}
                onChange={onMapCode}
                placeholder="Enter the map code"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
