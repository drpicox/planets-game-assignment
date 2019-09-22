import React from "react";
import LoginView from "../login/LoginView";
import useSelect from "../../lib/useSelect";
import hasPlayer from "../../ducks/game/selectors/hasPlayer";
import MapView from "../map/MapView";
import getView from "../../ducks/view/selectors/getView";
import CellView from "../cell/CellView";

function PlayView() {
  const logged = useSelect(hasPlayer);
  const coordinates = useSelect(getView, "coordinates");

  if (!logged) return <LoginView />;
  if (!coordinates) return <MapView />;
  return <CellView />;
}

export default PlayView;
