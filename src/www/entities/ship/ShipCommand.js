import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import useCommandInput from "../../ducks/gameCommands/hooks/useCommandInput";
import MoveShipCommand from "./MoveShipCommand";

export default function ShipCommand({ entity }) {
  const [load, onLoad] = useCommandInput(entity.id, "LoadShip");

  return (
    <ListGroup>
      <ListGroup.Item>
        <Form.Group controlId="shipLoad">
          <Form.Label>Load</Form.Label>
          <Form.Control
            value={load}
            onChange={onLoad}
            placeholder="Ships name"
          />
        </Form.Group>
      </ListGroup.Item>
      <MoveShipCommand entity={entity} />
    </ListGroup>
  );
}
