export const COMPILE_GAME = "game/COMPILE";
export default function compileGame(playerId) {
  return {
    type: COMPILE_GAME,
    playerId,
  };
}
