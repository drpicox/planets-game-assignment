import React from "react";
import useSelect from "../../lib/useSelect";
import getPlayerId from "../../ducks/game/selectors/getPlayerId";
import useDispatch from "../../lib/useDispatch";
import { saveCommands } from "../../ducks/gameCommands/actions/saveCommands";
import logoutGame from "../../ducks/game/actions/logoutGame";
import compileGame from "../../ducks/game/actions/compileGame";

export default function GameView() {
  const playerId = useSelect(getPlayerId);
  const save = useDispatch(saveCommands);
  const compile = useDispatch(compileGame, playerId);
  const logout = useDispatch(logoutGame);

  if (!playerId) return "There is no game loaded";
  return (
    <div>
      <button onClick={save}>Save game</button>
      <button onClick={compile}>Compile game</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
