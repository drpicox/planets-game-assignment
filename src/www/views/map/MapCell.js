import React, { useMemo } from "react";
import { css } from "emotion";
import useSelect from "../../lib/useSelect";
import { CELL_WIDTH, CELL_HEIGHT } from "./mapConstants";
import listEntitiesAtCoordinate from "../../ducks/game/selectors/listEntitiesAtCoordinate";
import getEntitiesAtCoordinateByType from "../../ducks/game/selectors/getEntitiesByCoordinatesByType";
import getPlayerId from "../../ducks/game/selectors/getPlayerId";
import useDispatch from "../../lib/useDispatch";
import { setView } from "../../ducks/view/actions/setView";

const cellClassName = css`
  width: ${CELL_WIDTH}em;
  height: ${CELL_HEIGHT}em;
  border: solid 1px rgba(0, 0, 0, 0.5);

  &.yours {
    background: blue;
  }
`;

export default function MapCell({ row, column }) {
  const byType = useSelect(getEntitiesAtCoordinateByType, { row, column });
  const entities = useSelect(listEntitiesAtCoordinate, { row, column });
  const playerId = useSelect(getPlayerId);
  const seeCell = useDispatch(setView, { coordinates: { row, column } });

  return useMemo(() => {
    const style = {
      width: `${CELL_WIDTH}em`,
      height: `${CELL_HEIGHT}em`,
      left: `${CELL_WIDTH * (column - 1)}em`,
      top: `${CELL_HEIGHT * (row - 1)}em`,
      position: "absolute",
    };

    const contents = [];
    if (byType["star"]) {
      contents.push(
        <span data-testid="star" key="star">
          *
        </span>,
      );
    }
    if (byType["ship"]) {
      contents.push(
        <span data-testid="ships" key="ships">
          »
        </span>,
      );
    }

    let className = cellClassName;
    if (entities.some(e => e.playerId === playerId)) {
      className += " yours";
    }

    return (
      <div
        data-testid={`${row},${column}`}
        style={style}
        className={className}
        onClick={seeCell}
        title={`${row},${column}`}
      >
        {contents}
      </div>
    );
  }, [row, column, byType, entities, playerId, seeCell]);
}
