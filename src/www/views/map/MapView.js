import React, { useMemo } from "react";
import useSelect from "../../lib/useSelect";
import getMap from "../../ducks/game/selectors/getMap";
import listMapCoordinates from "../../ducks/game/selectors/listMapCoordinates";
import { CELL_WIDTH, CELL_HEIGHT } from "./mapConstants";
import MapCell from "./MapCell";

export default function MapView() {
  const map = useSelect(getMap);
  const coordinates = useSelect(listMapCoordinates);

  return useMemo(() => {
    const style = {
      width: `${CELL_WIDTH * map.columns}em`,
      height: `${CELL_HEIGHT * map.rows}em`,
      position: "relative",
      background: "rgba(255,255,255,.1)",
      margin: "1em auto 0",
    };

    return (
      <div data-testid="map-of-the-game" style={style}>
        {coordinates.map(({ row, column }) => (
          <MapCell row={row} column={column} key={`${row},${column}`} />
        ))}
      </div>
    );
  }, [map, coordinates]);
}
