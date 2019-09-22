import api from "../../../lib/api";
import { replaceAlert } from "../../alert/actions/replaceAlert";

export default async function whenNewGame(store, action) {
  const { mapCode } = action;
  try {
    await api.put("/api/v1/game", { mapCode });
  } catch (e) {
    store.dispatch(replaceAlert(e.data.message));
  }
}
