import React from "react";
import { Form, Card } from "react-bootstrap";
import useCommandInput from "../../ducks/gameCommands/hooks/useCommandInput";

export default function StarCommand({ entity }) {
  const [shipName, onShipName] = useCommandInput(entity.id, "BuildShip");

  return (
    <>
      <Card.Body>
        <Form.Group controlId="newShipName">
          <Form.Label>New ship name</Form.Label>
          <Form.Control
            type="text"
            value={shipName}
            onChange={onShipName}
            placeholder="Ships name"
          />
        </Form.Group>
      </Card.Body>
    </>
  );
}
