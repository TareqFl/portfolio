const PAGE = "PAGE";
export default function pageReducer(state = "home", action) {
  if (action.type === PAGE) {
    return (state = { PageName: action.payload });
  }
  return state;
}
