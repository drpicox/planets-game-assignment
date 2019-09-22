import { createSelector } from "reselect";
import getEntitiesByCoordinates from "./getEntitiesByCoordinates";

function makeListMapCoordinates() {
  return createSelector(
    getEntitiesByCoordinates,
    byCoordinates =>
      Object.keys(byCoordinates).map(key => {
        const { row, column } = byCoordinates[key][0];
        return { row, column };
      }),
  );
}

const listMapCoordinates = makeListMapCoordinates();
export default listMapCoordinates;
