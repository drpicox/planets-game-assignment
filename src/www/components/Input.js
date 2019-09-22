import React, { useCallback } from "react";
import { css } from "emotion";
import useAutofocusRef from "../lib/useAutofocusRef";
import InputWrapper from "./InputWrapper";

export const inputClass = css`
  border-radius: 0;
  background: transparent;
  color: inherit;
  border: none;
  border-bottom: var(--light) solid 1px;
  padding: 0;
  margin: 0;
  font-size: 1em;
  height: 2em;
  box-sizing: border-box;

  :focus {
    outline: none;
    color: var(--lightest);
    border-bottom: var(--lightest) solid 2px;
  }
`;

function Input({ label, value, onValue, autofocus = false }) {
  const autofocusRef = useAutofocusRef(autofocus);
  const onChange = useCallback(event => onValue(event.target.value), [onValue]);

  return (
    <InputWrapper label={label}>
      <input
        ref={autofocusRef}
        type="text"
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </InputWrapper>
  );
}

export default Input;
