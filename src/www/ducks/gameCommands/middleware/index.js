import { SAVE_COMMANDS } from "../actions/saveCommands";
import whenSaveCommands from "./whenSaveCommands";

export default store => next => action => {
  next(action);

  switch (action.type) {
    case SAVE_COMMANDS:
      return whenSaveCommands(store, action);
    default: // nothing
  }
};
