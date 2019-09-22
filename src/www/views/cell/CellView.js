import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useSelect from "../../lib/useSelect";
import getView from "../../ducks/view/selectors/getView";
import useDispatch from "../../lib/useDispatch";
import { setView } from "../../ducks/view/actions/setView";
import listEntitiesAtCoordinate from "../../ducks/game/selectors/listEntitiesAtCoordinate";
import Entities from "../../entities/Entities";

export default function CellView() {
  const back = useDispatch(setView, { coordinates: null });
  const coordinates = useSelect(getView, "coordinates");
  const entities = useSelect(listEntitiesAtCoordinate, coordinates);

  return useMemo(() => {
    return (
      <Container data-testid="cell-entities">
        <br />
        <Row>
          <Col md={4}>
            <button onClick={back}>Back</button>
            <Entities entities={entities} />
          </Col>
        </Row>
      </Container>
    );
  }, [entities, back]);
}
