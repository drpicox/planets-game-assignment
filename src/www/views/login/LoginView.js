import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import useInput from "../../lib/useInput";
import useSubmitDispatch from "../../lib/useSubmitDispatch";
import loginGame from "../../ducks/game/actions/loginGame";

export default function LoginView() {
  const [playerId, onPlayerId] = useInput("");
  const login = useSubmitDispatch(loginGame, playerId);

  return (
    <Container>
      <br />
      <br />
      <h1>Log in to play</h1>
      <br />
      <Row>
        <Col md={4}>
          <Form onSubmit={login}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={playerId}
                onChange={onPlayerId}
                placeholder="Enter username"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
