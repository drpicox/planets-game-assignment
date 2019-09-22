import getGame from "./getGame";

const EMPTY = [];
export default function listEntities(state) {
  const game = getGame(state);
  return (game && game.entities) || EMPTY;
}
