import api from "../../../lib/api";
import { replaceAlert } from "../../alert/actions/replaceAlert";
import replaceGame from "../actions/replaceGame";

export default async function whenCompileGame(store, action) {
  const { playerId } = action;
  const result = await api.post(`/api/v1/players/${playerId}/compile`);
  store.dispatch(replaceAlert("Game compiled"));
  store.dispatch(replaceGame(result));
}
