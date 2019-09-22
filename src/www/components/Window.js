import React from "react";
import { cx, css } from "emotion";
import wrapperClass from "../styles/wrapperClass";

export const windowClass = cx(
  wrapperClass,
  css`
    background: gray;
    background: rgba(128, 128, 128, 0.7);
    backdrop-filter: blur(10px);
  `
);

function Window({ children, className = null }) {
  return <div className={cx(windowClass, className)}>{children}</div>;
}

export default Window;
