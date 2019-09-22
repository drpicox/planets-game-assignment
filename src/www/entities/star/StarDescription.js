import React from "react";
import { Card } from "react-bootstrap";

export default function StarDescription({ entity }) {
  const { name, population, playerId } = entity;

  return (
    <>
      <Card.Header data-testid="name">
        Star: <span>{name}</span>
      </Card.Header>
      <Card.Body>
        {playerId && (
          <div data-testid="owner">
            <strong>Owner</strong>: {playerId}.
          </div>
        )}
        {population != null && (
          <div data-testid="population">
            <strong>Population</strong>: {population}.
          </div>
        )}
      </Card.Body>
    </>
  );
}
