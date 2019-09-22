import getEntitiesByCoordinates from "./getEntitiesByCoordinates";

const EMPTY = [];
export default function listEntitiesAtCoordinate(state, { row, column }) {
  return getEntitiesByCoordinates(state)[`${row},${column}`] || EMPTY;
}
