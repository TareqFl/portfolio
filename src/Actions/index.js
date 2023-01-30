const PAGE = "PAGE";

export const setPage = (value) => {
  return {
    type: PAGE,
    payload: value,
  };
};
