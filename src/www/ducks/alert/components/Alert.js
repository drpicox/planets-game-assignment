import React from "react";
import { css } from "emotion";
import useSelect from "../../../lib/useSelect";
import getAlert from "../selectors/getAlert";
import useDispatch from "../../../lib/useDispatch";
import Button from "../../../components/Button";
import { deleteAlert } from "../actions/deleteAlert";

const alertClass = css`
  background: var(white);
  color: gray;
  padding: 0.5em;
`;

function Alert() {
  const alert = useSelect(getAlert);
  const dismiss = useDispatch(deleteAlert);
  if (!alert) return null;

  return (
    <div className={alertClass} data-testid="alert-bar">
      {alert.text}
      <Button onClick={dismiss}>Dismiss</Button>
    </div>
  );
}

export default Alert;
