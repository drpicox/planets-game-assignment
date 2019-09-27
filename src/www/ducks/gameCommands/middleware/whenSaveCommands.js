import getCommands from "../selectors/getCommands";
import getPlayerId from "../../game/selectors/getPlayerId";
import api from "../../../lib/api";
import { replaceAlert } from "../../alert/actions/replaceAlert";

export default async function whenSaveCommands(store, action) {
  const state = store.getState();
  const commandsTree = getCommands(state);
  const playerId = getPlayerId(state);

  const commands = Object.keys(commandsTree).flatMap(entityId =>
    Object.values(commandsTree[entityId]),
  );

  await api.put(`/api/v1/players/${playerId}/commands`, commands);
  store.dispatch(replaceAlert("Game saved"));
}
