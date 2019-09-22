import React from "react";
import { cx, css } from "emotion";
import { buttonClass } from "./Button";

export const submitButtonClass = cx(
  buttonClass,
  css`
    border: solid var(--primary) 2px;
    color: var(--primary);
  `
);

function SubmitButton({ value }) {
  return <input type="submit" value={value} className={submitButtonClass} />;
}

export default SubmitButton;
