export const NEW_GAME = "game/NEW";
export default function newGame(mapCode) {
  return {
    type: NEW_GAME,
    mapCode
  };
}
