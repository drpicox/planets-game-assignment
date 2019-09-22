import { FETCH_GAME } from "../actions/fetchGame";
import { LOGIN_GAME } from "../actions/loginGame";
import { NEW_GAME } from "../actions/newGame";
import whenFetchGame from "./whenFetchGame";
import whenLoginGame from "./whenLoginGame";
import whenNewGame from "./whenNewGame";
import { COMPILE_GAME } from "../actions/compileGame";
import whenCompileGame from "./whenCompileGame";

export default store => next => action => {
  next(action);

  switch (action.type) {
    case COMPILE_GAME:
      return whenCompileGame(store, action);
    case FETCH_GAME:
      return whenFetchGame(store, action);
    case LOGIN_GAME:
      return whenLoginGame(store, action);
    case NEW_GAME:
      return whenNewGame(store, action);
    default: // nothing
  }
};
