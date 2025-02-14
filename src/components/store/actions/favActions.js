export const FAV_ADD = "FAV_ADD";

export const FAV_REMOVE = "FAV_REMOVE";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";

export const addFav = (item) => {
  return {
    type: FAV_ADD,
    payload: item,
  };
};

export const removeFav = (fav) => {
  return {
    type: FAV_REMOVE,
    payload: fav,
  };
};

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};
