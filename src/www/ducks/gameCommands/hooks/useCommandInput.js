import { useCallback } from "react";
import { useCommandValue } from "./useCommandValue";

export default function useCommandInput(entityId, type, fallbackValue = "") {
  const [value, setValue] = useCommandValue(entityId, type, fallbackValue);
  const onChange = useCallback(ev => setValue(ev.target.value), [setValue]);
  return [value, onChange];
}
