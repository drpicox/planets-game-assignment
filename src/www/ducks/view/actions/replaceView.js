export const REPLACE_VIEW = "view/REPLACE_VIEW";
export function replaceView(view) {
  return {
    type: REPLACE_VIEW,
    view,
  };
}
