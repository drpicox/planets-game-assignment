import { REPLACE_VIEW } from "../actions/replaceView";
import { SET_VIEW } from "../actions/setView";
import reduceReplaceView from "./reduceReplaceView";
import reduceSetView from "./reduceSetView";

function reduceView(state = { root: "Home" }, action) {
  switch (action.type) {
    case REPLACE_VIEW:
      return reduceReplaceView(state, action);
    case SET_VIEW:
      return reduceSetView(state, action);
    default:
      return state;
  }
}

export default reduceView;
