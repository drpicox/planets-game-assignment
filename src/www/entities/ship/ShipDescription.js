import React from "react";
import { Card } from "react-bootstrap";

export default function ShipDescription({ entity }) {
  const { name, population } = entity;

  return (
    <>
      <Card.Header data-testid="name">
        Ship: <span>{name}</span>
      </Card.Header>
      <Card.Body>
        {population != null && (
          <div data-testid="population">
            <strong>Population</strong>: {population}.
          </div>
        )}
      </Card.Body>
    </>
  );
}
