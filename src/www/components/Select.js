import React, { useCallback } from "react";
import useAutofocusRef from "../lib/useAutofocusRef";
import { inputClass } from "./Input";
import InputWrapper from "./InputWrapper";

function Select({ label, value, onValue, children, autofocus = false }) {
  const autofocusRef = useAutofocusRef(autofocus);
  const onChange = useCallback(event => onValue(event.target.value), [onValue]);

  return (
    <InputWrapper label={label}>
      <select
        ref={autofocusRef}
        value={value}
        onChange={onChange}
        className={inputClass}
      >
        {children}
      </select>
    </InputWrapper>
  );
}

export default Select;
