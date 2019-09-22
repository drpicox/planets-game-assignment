import React from "react";
import { css, cx } from "emotion";
import inlineWrapperClass from "../styles/inlineWrapperClass";
import verticalContainerClass from "../styles/verticalContainerClass";

const labelClass = css`
  font-size: 75%;
  display: block;
  color: var(--lightish);
`;

function InputWrapper({ label, children }) {
  return (
    <div className={cx(inlineWrapperClass, verticalContainerClass)}>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

export default InputWrapper;
